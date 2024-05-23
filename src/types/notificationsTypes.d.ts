type NotificationType = "services" | "achievements" | "reviews";

interface NotificationCreateQueryParams {
	type: NotificationType;
	service_id?: string;
}
