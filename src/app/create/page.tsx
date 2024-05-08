"use client";

import OptionSelect from "@/components/option-select";
import {Button} from "@/components/ui/button";
import {ScrollArea} from "@/components/ui/scroll-area";
import {fetchCreateService} from "@/lib/api";
import {formToastError, toSentenceCase} from "@/lib/utils";
import styles from "@/ui/create-service.module.css";
import {Loader2} from "lucide-react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {FormEvent, useState} from "react";

export default function Register() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [serviceType, setServiceType] = useState<"requested" | "offered">("requested");

	const [loading, setLoading] = useState(false);

	const router = useRouter();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (loading) return;
		setLoading(true);

		if (title == "") formToastError("Title is required");
		else if (price < 0) formToastError("Price can't be lower than 0");
		else if (serviceType != "requested" && serviceType != "offered") formToastError("Service type is invalid");
		else {
			let serviceSentData: ServiceSentData = {
				title,
				description,
				price,
				type: serviceType
			};
			const data = await fetchCreateService(serviceSentData);
			console.log(data);
			if (data["error"]) formToastError(toSentenceCase(data["error"]));
			else router.push("/dashboard");
		}

		setLoading(false);
	};

	return (
		<main className={`${styles.background} h-svh`}>
			<div className="h-svh py-8 grid place-content-center">
				<ScrollArea className="w-[95vw] max-w-[600px] max-h-svh bg-background shadow-xl rounded-xl">
					<div className="px-10 py-8 sm:px-16 sm:py-10">
						<Link className="flex flex-row gap-1 mb-3 -translate-x-4 font-medium text-sm hover:underline underline-offset-4" href="/dashboard">
							<svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M5 12l14 0" />
								<path d="M5 12l6 6" />
								<path d="M5 12l6 -6" />
							</svg>
							Go Back
						</Link>
						<h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">Create Service</h1>
						<form onSubmit={handleSubmit} className="flex flex-col flex-1">
							<label className="flex flex-col text-sm sm:text-lg font-semibold gap-2 mb-6">
								Title
								<input onChange={e => setTitle(e.target.value)} value={title} className="border-2 rounded-lg text-base p-1.5" type="text" />
							</label>
							<label className="flex flex-col text-sm sm:text-lg font-semibold gap-2 mb-6">
								Description
								<textarea onChange={e => setDescription(e.target.value)} value={description} className="border-2 rounded-lg text-base p-1.5 max-h-96"></textarea>
							</label>
							<label className="flex flex-col text-sm sm:text-lg font-semibold gap-2 mb-6">
								Price
								<input onChange={e => setPrice(parseInt(e.target.value))} value={price} className="border-2 rounded-lg text-base p-1.5" type="number" />
							</label>
							<div className="flex flex-col text-sm sm:text-lg font-semibold gap-2 mb-6">
								<label>Service Type</label>
								<OptionSelect option1="Requested" option2="Offered" optionValue1="requested" optionValue2="offered" value={serviceType} setValue={setServiceType} />
							</div>
							<Button disabled={loading} type="submit" variant="secondary" onClick={handleSubmit} className="w-fit place-self-center mt-10 px-5 py-7 font-semibold text-base sm:text-lg shadow-lg flex flex-row gap-2">
								{loading ? (
									<>
										<Loader2 className="size-6 animate-spin" />
										Loading
									</>
								) : (
									<>
										<svg className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<path d="M12 5l0 14" />
											<path d="M5 12l14 0" />
										</svg>
										Create
									</>
								)}
							</Button>
						</form>
					</div>
				</ScrollArea>
			</div>
		</main>
	);
}
