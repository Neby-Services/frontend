const fetchData = async (input: RequestInfo, init?: RequestInit) => {
	let data: any = {};
	const response = await fetch(`${process.env["NEXT_PUBLIC_BASE_URL"]}${input}`, init);
	try {
		data = await response.json();
	} catch (e) {
		data = {error: "something went wrong"};
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
		headers: {"Content-Type": "application/json"}
	});
};

export const fetchRegister = async (body: RegisterSentData) => {
	return await fetchData(`${process.env["NEXT_PUBLIC_API_PATH"]}/auth/register`, {
		method: "POST",
		body: JSON.stringify(body),
		headers: {"Content-Type": "application/json"}
	});
};

export const fetchCreateService = async (body: ServiceSentData) => {
	return await fetchData(`${process.env["NEXT_PUBLIC_API_PATH"]}/services`, {
		method: "POST",
		body: JSON.stringify(body),
		headers: {"Content-Type": "application/json"}
	});
};

export const fetchServices = async () => {
	return await fetchData(`${process.env["NEXT_PUBLIC_API_PATH"]}/services`);
};

export const fetchSelfUserData = async () => {
	return await fetchData(`${process.env["NEXT_PUBLIC_API_PATH"]}/auth/self`);
};
