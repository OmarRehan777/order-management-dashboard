export type UserRole = "cashier" | "kitchen" | "admin";

export interface User {
	id: string;
	name: string;
	email: string;
	role: UserRole;
	isActive: boolean;
}
