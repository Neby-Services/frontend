"use client";

import {Avatar} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import styles from "@/ui/service-card.module.css";
import Link from "next/link";

interface ServiceCardProps {
	className?: string;
	id: string;
	title: string;
	description: string;
	username: string;
	type: string;
	price: number;
	img?: string;
}

export default function ServiceCard({className, id, title, description, username, type, price, img}: ServiceCardProps) {
	return (
		<Card className={cn("border-none shadow-md flex overflow-hidden h-min md:h-80 rounded-3xl", className)}>
			{img && (
				<div className="w-80 hidden md:flex justify-center items-center overflow-hidden">
					<img className="size-full object-cover" src={img} alt="chore" />
				</div>
			)}
			<div className="w-full min-w-[200px] flex flex-col">
				<CardHeader>
					<CardTitle className="flex justify-between items-center gap-4 md:gap-6">
						<Avatar className="size-10 md:size-14 -z-0">
							<div className="bg-secondary size-full grid place-content-center text-background font-bold text-2xl overflow-hidden">
								<p className="text-lg md:text-xl">{username ? username[0].toUpperCase() : "-"}</p>
							</div>
						</Avatar>
						<p className="flex-1 truncate text-base md:text-xl max-[300px]:hidden">{username}</p>
						<Badge className="text-sm md:text-base border-2" variant="outline">
							{type}
						</Badge>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<h1 className="font-bold text-xl md:text-2xl mb-2 truncate">{title}</h1>
					<p className={`${styles.description} text-base md:text-lg`}>{description}</p>
				</CardContent>
				<CardFooter className="flex-1 flex items-end">
					<div className="flex w-full justify-between items-center gap-4">
						<Link href={`/service/${id}`}>
							<Button variant="secondary" size="lg" className="px-4 font-semibold text-base sm:text-lg shadow-md flex flex-row gap-2">
								See More
								<svg className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M5 12l14 0" />
									<path d="M13 18l6 -6" />
									<path d="M13 6l6 6" />
								</svg>
							</Button>
						</Link>
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
				</CardFooter>
			</div>
		</Card>
	);
}
