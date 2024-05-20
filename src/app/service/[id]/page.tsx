"use client";
import Header from "@/components/header";
import ServiceCard from "@/components/service";
import {logout} from "@/lib/actions";
import {fetchServiceById} from "@/lib/api";
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
				console.log(data);
				setLoading(false);
			} catch (error) {
				console.log(error);
				logout();
				router.push("/");
				setLoading(false);
			}
		};

		setLoading(true);
		fetchData();
	}, [params.id]);

	return (
		<main>
			<Header />
			<section className="max-w-[1800px] min-[1800px]:mx-auto h-[100%] box-content py-6 px-4 md:px-16 gap-6 xl:grid-cols-2">{service ? <ServiceCard key={service.id} id={service.id} title={service.title} description={service.description} username={service.creator.username} type={service.type} price={service.price} img={service.image_url} /> : ""}</section>
		</main>
	);
}
