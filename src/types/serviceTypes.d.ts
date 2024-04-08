interface ServiceReceivedData {
	id: string;
	creator_id: string;
	creator: {
		id: string;
		username: string;
	};
	buyer_id?: string;
	title: string;
	description: string;
	price: number;
	status: string;
	type: string;
	image_url?: string;
	created_at: string;
	updated_at: string;
}
