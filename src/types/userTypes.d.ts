interface UserReceivedData {
	id: string;
	community_id: string;
	username: string;
	email: string;
	type: string;
	balance: number;
	created_at: string;
	updated_at: string;
}

type UserType = "admin" | "neighbor"
interface User {
	id: string;
	community_id: string;
	username: string;
	email: string;
	type: UserType;
	balance: number;
	created_at: string;
	updated_at: string;

	community?: Community;
}
