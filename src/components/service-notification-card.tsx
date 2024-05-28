"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { useRouter, usePathname } from "next/navigation";
import { logout } from "@/lib/actions";
import { fetchHandleNotification } from "@/lib/api";
interface ServiceNotificationCardProps {
	serviceNotificationId: string
	username: string;
	serviceTitle: string;
	status: string;
	onRefetch: () => void;
}

function truncateText(text: string, maxLength: number): string {
	if (text.length > maxLength) {
		return text.substring(0, maxLength) + ' ...';
	}
	return text;
}

export default function ServiceNotificationCard({ username, serviceTitle, onRefetch, status, serviceNotificationId }: ServiceNotificationCardProps) {

	const router = useRouter();
	const pathname = usePathname();

	const handleServiceNotification = async (action: string) => {
		try {
			const response = await fetchHandleNotification(action, serviceNotificationId);
			console.log(response);
			if (pathname === '/notifications')
				onRefetch();
			else
				router.push('/notifications');
		} catch (error) {
			logout();
			router.push("/");
		}
	}

	return (
		<div className="px-3 py-5 w-[300px] rounded-3xl shadow-md flex flex-col justify-between items-center sm:flex-row gap-3 sm:w-[492px]">
			<div className="flex gap-3 items-center">
				<Avatar className="size-10 md:size-14 -z-0">
					<div className="bg-secondary size-full grid place-content-center text-background font-bold text-2xl overflow-hidden">
						<p className="text-lg md:text-xl">{username ? username[0].toUpperCase() : "-"}</p>
					</div>
				</Avatar>
				<div>
					<p><b>{truncateText(username.toUpperCase(), 15)}</b> wants: <br /> <b>{truncateText(serviceTitle.toUpperCase(), 20)}</b></p>
				</div>
			</div>
			{
				status === "pending" ?
					<div className="flex gap-3 items-center">
						<Button variant="ghost" onClick={
							() => {
								(async () => {
									handleServiceNotification("refused");
								})()
							}
						}>Reject</Button>
						<Button variant="secondary" onClick={() => {
							(async () => {
								handleServiceNotification("accepted");
							})()
						}}>Accept</Button>
					</div> : null
			}
		</div>
	);
}
