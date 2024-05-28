type NotificationType = "services" | "achievements" | "reviews";

interface NotificationCreateQueryParams {
	type: NotificationType;
	service_id?: string;
}

interface NotificationGetSelfReceiveData {
	id: string;
	type: string;
	created_at: string;
	updated_at: string;
	service_notification?: ServiceNotification;
}

interface ServiceNotification {
	id: string;
	sender_id: string;
	notification_id: string;
	sender: User;
	service: ServiceReceivedData;
	service_id: string;
	status: string;
}
