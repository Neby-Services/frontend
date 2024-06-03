"use client";

import Header from "@/components/header";
import Userrating from "@/components/ratingcomponent";
import ServiceContentextra from "@/components/service-card2";
import {Avatar} from "@/components/ui/avatar";
import {fetchUserData, fetchUserServices} from "@/lib/api";
import {SelfService} from "@/types/serviceselfTypes";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Profile({params}: {params: {id: string}}) {
	const [userData, setUserData] = useState<UserReceivedData>();
	const [servicesData, setServicesData] = useState<ServiceReceivedData[]>();

	const [loading, setLoading] = useState(true);

	const router = useRouter();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const user = await fetchUserData(params.id);
				const services = await fetchUserServices(params.id);
				console.log(user);
				console.log(services);
				if (user.error === "user not found") router.push("/not-found");
				if (!user.error) setUserData(user["user"]);
				if (!services.error) setServicesData(services["self_services"]);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		};

		setLoading(true);
		fetchData();
	}, []);

	if (!loading && userData && servicesData) {
		return (
			<main>
				<Header />
				<section className="max-w-[1800px] min-[1800px]:mx-auto py-10 px-6 md:px-16">
					<div className="flex justify-between items-start">
						<div className="flex flex-1 flex-row gap-6 items-center mb-14">
							<Avatar className="size-16 md:size-20" title={userData["username"]}>
								<div className="bg-secondary size-full grid place-content-center text-background font-bold text-3xl overflow-hidden">
									<p>{userData["username"].slice(0, 1).toUpperCase()}</p>
								</div>
							</Avatar>
							<div className="flex flex-col justify-center align-center gap-2">
								<h3 className="text-xl font-medium">{userData["username"]}</h3>
								<h4 className="text-sm text-gray-600">Services: {servicesData.length}</h4>
								<h4 className="text-sm text-gray-600">Community Code: {(userData as any)["community"]["code"]}</h4>
							</div>
						</div>
					</div>
					<Userrating />
					<h2 className="text-3xl font-bold mb-4">{userData["username"]}'s Services</h2>
					<div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
						{servicesData.map((service: SelfService) => (
							<ServiceContentextra key={service.id} id={service.id} title={service.title} description={service.description} username={service.creator.username} type={service.type} price={service.price} img={service.image_url} status={service.status} buyerId={service.creator.id} />
						))}
					</div>
				</section>
			</main>
		);
	}
}
