interface RegisterSentData {
	email: string;
	username: string;
	password: string;
	type: string;
	community_code?: string;
	community_name?: string;
}

interface LoginSentData {
	email: string;
	password: string;
}
