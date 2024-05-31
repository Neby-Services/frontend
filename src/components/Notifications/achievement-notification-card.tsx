"use client";

import { Button } from "../ui/button";
import { useRouter, usePathname } from "next/navigation";
import { logout } from "@/lib/actions";

interface AchievementNotificationCardProps {
	achievementNotification: AchievementNotification;
/* 	onRefetch: () => void;
 */}

function truncateText(text: string, maxLength: number): string {
	if (text.length > maxLength) {
		return text.substring(0, maxLength) + ' ...';
	}
	return text;
}

export default function ServiceNotificationCard({ achievementNotification }: AchievementNotificationCardProps) {

	const router = useRouter();
	const pathname = usePathname();

	return (
		<div className="px-3 py-5 w-[300px] rounded-3xl shadow-md flex flex-col justify-between items-center sm:flex-row gap-3 sm:w-[492px]">
			<div className="flex items-center gap-4">
				<div className="flex items-center justify-center rounded-full bg-secondary px-3 py-3">
					<svg className="text-white h-9 w-9 flex px-0  py-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17 4V2H7v2H2v7c0 1.1.9 2 2 2h3.1a5.01 5.01 0 0 0 3.9 3.9v2.18C8 19.54 8 22 8 22h8s0-2.46-3-2.92V16.9a5.01 5.01 0 0 0 3.9-3.9H20c1.1 0 2-.9 2-2V4zM4 11V6h3v5zm16 0h-3V6h3z" /></svg>
				</div>
				<div className="text-wrap">
					<span className="text-sm"><b>{truncateText(achievementNotification.user_achievement.achievement_title, 40)}</b></span>
				</div>
			</div>
			<Button onClick={() => {
				router.push('/achievements');
			}}>
				<div className="flex gap-2 justify-center items-center font-bold">
					<span>Claim</span>
					<div className="flex gap-1 justify-center items-center">
						<span>{achievementNotification.user_achievement.achievement.reward}</span>
						<svg className="size-6" viewBox="0 0 24 24">
							<circle className="fill-secondary stroke-primary" strokeWidth="2" cx="12" cy="12" r="9.8282385" />
							<path className="fill-primary stroke-none" d="M12 6.9640836c.556578 0 1.386924 2.8618972 1.780455 3.2554624.393565.39353 3.255462 1.223876 3.255462 1.780453 0 .556578-2.861897 1.386924-3.255462 1.780455-.393531.393565-1.223877 3.255462-1.780455 3.255462-.556577 0-1.386923-2.861897-1.780453-3.255462-.393566-.393531-3.2554635-1.223877-3.2554635-1.780455 0-.556577 2.8618975-1.386923 3.2554635-1.780453.39353-.3935652 1.223876-3.2554624 1.780453-3.2554624Z" />
						</svg>
					</div>
				</div>
			</Button>

		</div>
	);
}
