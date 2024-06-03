export interface Creator {
	id: string;
	updated_at: string;
	username: string;
	type: string;
	created_at: string;
	email: string;
	balance: number;
}

export interface SelfService {
	id: string;
	created_at: string;
	updated_at: string;
	type: string;
	status: string;
	description: string;
	title: string;
	price: number;
	creator: Creator;
	image_url?: string;
}

export interface SelfServicesData {
	self_services: SelfService[];
}
