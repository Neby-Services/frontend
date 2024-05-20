"use client";

import {Avatar} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

interface ServiceContentProps {
	id: string;
	title: string;
	description: string;
	username: string;
	type: string;
	price: number;
	img?: string;
}

export default function ServiceContent({id, title, description, username, type, price, img}: ServiceContentProps) {
	return (
		<div className="w-full flex flex-col">
			<div className="flex justify-between items-center gap-4 md:gap-6">
				<Avatar className="size-10 md:size-14 -z-0">
					<div className="bg-secondary size-full grid place-content-center text-background font-bold text-2xl overflow-hidden">
						<p className="text-lg md:text-xl">{username ? username[0].toUpperCase() : "-"}</p>
					</div>
				</Avatar>
				<p className="flex-1 text-base md:text-xl">{username}</p>
				<Badge className="text-sm md:text-base border-2" variant="outline">
					{type}
				</Badge>
			</div>
			<div className="flex max-md:flex-col justify-between gap-6 md:gap-10 mt-8">
				<div className="flex-1">
					<h1 className="font-bold text-xl md:text-2xl mb-2">{title}</h1>
					<p className="text-base md:text-lg overflow-visible pt-4">{description}</p>
					<div className="flex w-full justify-between items-center gap-4 mt-4">
						<Button variant="secondary" size="lg" className="px-4 font-semibold text-base sm:text-lg shadow-md flex flex-row gap-2">
							Accept
							<svg className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M5 12l14 0" />
								<path d="M13 18l6 -6" />
								<path d="M13 6l6 6" />
							</svg>
						</Button>
						<span className="flex justify-center items-center gap-2">
							<p className="font-semibold text-sm md:text-lg max-w-28">{price == 0 ? "Exchange" : price}</p>
							{price == 0 ? (
								<svg className="size-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M7 10h14l-4 -4" />
									<path d="M17 14h-14l4 4" />
								</svg>
							) : (
								<svg className="size-7" viewBox="0 0 24 24">
									<circle className="fill-secondary stroke-primary" strokeWidth="2" cx="12" cy="12" r="9.8282385" />
									<path className="fill-primary stroke-none" d="M12 6.9640836c.556578 0 1.386924 2.8618972 1.780455 3.2554624.393565.39353 3.255462 1.223876 3.255462 1.780453 0 .556578-2.861897 1.386924-3.255462 1.780455-.393531.393565-1.223877 3.255462-1.780455 3.255462-.556577 0-1.386923-2.861897-1.780453-3.255462-.393566-.393531-3.2554635-1.223877-3.2554635-1.780455 0-.556577 2.8618975-1.386923 3.2554635-1.780453.39353-.3935652 1.223876-3.2554624 1.780453-3.2554624Z" />
								</svg>
							)}
						</span>
					</div>
				</div>
				{img && (
					<div className="overflow-hidden max-md:flex-1 relative grow-0 shrink-0 basis-5/12 xl:basis-1/2 rounded-xl xl:min-h-80">
						<img src={img} alt="chore" width="100%" className="max-md:hidden absolute top-1/2 left-1/2 h-auto w-auto min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover" />
						<img src={img} alt="chore" width="100%" className="block md:hidden h-80 w-full object-cover" />
					</div>
				)}
			</div>
		</div>
	);
}
