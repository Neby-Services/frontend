interface ServiceReceivedData {
	id: string;
	creator_id: string;
	creator: {
		id: string;
		username: string;
		type: string;
		email: string;
		balance: number;
		created_at: string;
		updated_at: string;
	};
	buyer_id?: string;
	buyer?: {
		id: string;
		username: string;
		type: string;
		email: string;
		balance: number;
		created_at: string;
		updated_at: string;
	};
	title: string;
	description: string;
	price: number;
	status: string;
	type: string;
	image_url?: string;
	created_at: string;
	updated_at: string;
}

interface ServiceSentData {
	title: string;
	description: string;
	price: number;
	type: "requested" | "offered";
	image_url?: string;
}
