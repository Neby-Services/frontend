interface RegisterData {
	email: string;
	username: string;
	password: string;
	type: string;
	community_code?: string;
	community_name?: string;
}

interface LoginData {
	email: string;
	password: string;
}
