const fetchData = async (input: RequestInfo, init?: RequestInit) => {
	let data: any = {};
	const response = await fetch(`${process.env["NEXT_PUBLIC_BASE_URL"]}${input}`, init);
	try {
		data = await response.json();
	} catch (e) {
		data = {error: "Something went wrong"};
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

export const fetchServices = async () => {
	return await fetchData(`${process.env["NEXT_PUBLIC_API_PATH"]}/services`);
};
