"use client";

import {Avatar} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import styles from "@/ui/service-card.module.css";

interface ServiceCardProps {
	img?: string;
	username?: string;
	type: string;
	title: string;
	description: string;
	price: number;
}

export default function ServiceCard({img, username, type, title, description, price}: ServiceCardProps) {
	return (
		<div className="bg-card text-card-foreground border-none shadow-md flex overflow-hidden h-min md:h-80 rounded-3xl">
			{img && (
				<div className="w-80 hidden md:flex justify-center items-center overflow-hidden">
					<img className="size-full object-cover" src={img} alt="chore" />
				</div>
			)}
			<div className="w-full min-w-[200px] flex flex-col">
				<div className="flex flex-col space-y-1.5 p-6">
					<div className="text-2xl font-semibold leading-none tracking-tight flex justify-between items-center gap-4 md:gap-6">
						{username ? (
							<>
								<Avatar className="size-10 md:size-14 -z-0">
									<div className="bg-secondary size-full grid place-content-center text-background font-bold text-2xl overflow-hidden">
										<p className="text-lg md:text-xl">{username ? username[0].toUpperCase() : "-"}</p>
									</div>
								</Avatar>
								<p className="flex-1 truncate text-base md:text-xl max-[300px]:hidden">{username}</p>
							</>
						) : (
							<h1 className="font-bold text-xl md:text-2xl truncate">{title}</h1>
						)}
						<Badge className="text-sm md:text-base border-2" variant="outline">
							{type}
						</Badge>
					</div>
				</div>
				<div className="p-6 pt-0">
					{username && <h1 className="font-bold text-xl md:text-2xl mb-2 truncate">{title}</h1>}
					<p className={`${username ? styles.descriptionSmall : styles.descriptionLarge} text-base md:text-lg`}>{description}</p>
				</div>
				<div className="flex items-end p-6 pt-0 flex-1">
					<div className="flex w-full justify-between items-center gap-4">
						<Button variant="secondary" size="lg" className="px-4 font-semibold text-base sm:text-lg shadow-md flex flex-row gap-2">
							See More
							<svg className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M5 12l14 0" />
								<path d="M13 18l6 -6" />
								<path d="M13 6l6 6" />
							</svg>
						</Button>
						<span className="flex justify-center items-center gap-2">
							<p className="font-semibold text-sm md:text-lg truncate max-w-28">{price == 0 ? "Exchange" : price}</p>
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
			</div>
		</div>
	);
}
