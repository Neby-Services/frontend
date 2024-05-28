"use client";

import Header from "@/components/header";
import ServiceContent from "@/components/service-content";
import {logout} from "@/lib/actions";
import {fetchGetNotificationsSelf, fetchServiceById} from "@/lib/api";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Service({params}: {params: {id: string}}) {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [service, setService] = useState<ServiceReceivedData>();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchServiceById(params.id);
				setService(data["service"]);
				setLoading(false);
			} catch (error) {
				console.log("jola", error);
				logout();
				router.push("/");

				setLoading(false);
			}
		};

		setLoading(true);
		fetchData();
	}, [params.id]);

	if (!loading && service) {
		return (
			<main>
				<Header redirect={false} />
				<section className="max-w-[1200px] min-[1200px]:mx-auto min-h-full box-content py-6 px-4 md:px-16 gap-6">
					<ServiceContent id={service.id} title={service.title} description={service.description} username={service.creator.username} type={service.type} price={service.price} img={service.image_url} creatorId={service.creator.id} />
				</section>
			</main>
		);
	}
}
