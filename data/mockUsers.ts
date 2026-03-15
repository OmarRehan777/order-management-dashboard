import type { User } from "../types/user";

const mockUsers: User[] = [
	{
		id: "user-1",
		name: "Omar Cashier",
		email: "cashier@cairocafe.com",
		role: "cashier",
		isActive: true,
	},
	{
		id: "user-2",
		name: "Mona Kitchen",
		email: "kitchen@cairocafe.com",
		role: "kitchen",
		isActive: true,
	},
	{
		id: "user-3",
		name: "Mr. Owner",
		email: "admin@cairocafe.com",
		role: "admin",
		isActive: true,
	},
];

export default mockUsers;
