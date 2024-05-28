"use client";

import ServiceNotificationCard from "@/components/service-notification-card";
import { fetchGetNotificationsSelf } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface NotificationsProps {
	quantity?: number;
}

export default function Notifications({ quantity }: NotificationsProps) {
	const router = useRouter();
	const [refetch, setRefetch] = useState(false);
	const [notifications, setNotifications] = useState<NotificationGetSelfReceiveData[]>([]);

	useEffect(() => {
		(async () => {
			try {
				const data = await fetchGetNotificationsSelf();
				setNotifications(data["notifications"]);
			} catch (error) {
				router.push("/dashboard");
				console.log(error);
			}
		})();
	}, [refetch, router]);

	const onRefetch = () => setRefetch((prev) => !prev);

	// Limitar las notificaciones según quantity, si está definido
	const displayedNotifications = quantity ? notifications.slice(0, quantity) : notifications;

	return (
		<section className="flex flex-col justify-center items-center py-6 gap-4">
			{displayedNotifications.map((notification: NotificationGetSelfReceiveData) => (
				notification.service_notification &&
				<ServiceNotificationCard 
					key={notification.id} 
					username={notification.service_notification.sender.username} 
					serviceTitle={notification.service_notification.service.title} 
					onRefetch={onRefetch} 
					status={notification.service_notification.status} 
					serviceNotificationId={notification.service_notification.id} 
				/>
			))}
		</section>
	);
}
