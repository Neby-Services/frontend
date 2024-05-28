const fetchData = async (input: RequestInfo, init?: RequestInit) => {
	let data: any = {};
	const response = await fetch(`${process.env["NEXT_PUBLIC_BASE_URL"]}${input}`, init);
	try {
		data = await response.json();
	} catch (e) {
		data = { error: "something went wrong" };
	}
	if (!response.ok) {
		data["status"] = response.status;
	}
	return data;
};

export const fetchLogin = async (body: LoginSentData) => {
	return await fetchData(`${process.env["NEXT_PUBLIC_API_PATH"]}/auth/login`, {
		method: "POST",
		body: JSON.stringify(body),
		headers: { "Content-Type": "application/json" }
	});
};

export const fetchRegister = async (body: RegisterSentData) => {
	return await fetchData(`${process.env["NEXT_PUBLIC_API_PATH"]}/auth/register`, {
		method: "POST",
		body: JSON.stringify(body),
		headers: { "Content-Type": "application/json" }
	});
};

export const fetchCreateService = async (body: ServiceSentData) => {
	return await fetchData(`${process.env["NEXT_PUBLIC_API_PATH"]}/services`, {
		method: "POST",
		body: JSON.stringify(body),
		headers: { "Content-Type": "application/json" }
	});
};

export const fetchServices = async (status: string) => {
	const params = new URLSearchParams({ status });
	return await fetchData(`${process.env["NEXT_PUBLIC_API_PATH"]}/services?${params.toString()}`);
};

export const fetchSelfUserData = async () => {
	return await fetchData(`${process.env["NEXT_PUBLIC_API_PATH"]}/auth/self`);
};

export const fetchServiceById = async (id: string) => {
	return await fetchData(`${process.env["NEXT_PUBLIC_API_PATH"]}/services/${id}`);
};

export const fetchCreateNotification = async (queryStrings: NotificationCreateQueryParams) => {
	const { service_id, type } = queryStrings;

	const params = new URLSearchParams({ type });
	service_id && params.append("service_id", service_id);

	return await fetchData(`${process.env["NEXT_PUBLIC_API_PATH"]}/notifications?${params.toString()}`, {
		method: "POST"
	})
}

export const fetchGetNotificationsSelf = async () => {
	return await fetchData(`${process.env["NEXT_PUBLIC_API_PATH"]}/notifications`);
}

export const fetchNotificationServiceSelf = async (service_id: string) => {
	return await fetchData(`${process.env["NEXT_PUBLIC_API_PATH"]}/services/${service_id}/notifications`);
}
export const fetchArchievements = async () => {
	return await fetchData(`${process.env["NEXT_PUBLIC_API_PATH"]}/user_achievements`);
};

export const fetchHandleNotification = async (action: string, serviceNotificationId: string) => {

	const params = new URLSearchParams({ action });
	return await fetchData(`${process.env["NEXT_PUBLIC_API_PATH"]}/notifications/${serviceNotificationId}?
	${params.toString()}`, {
		method: "PUT"
	});
}
