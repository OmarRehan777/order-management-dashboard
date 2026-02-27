import type { Product } from "../types/product";

const mockProducts: Product[] = [
	{
		id: "prd_espresso",
		name: "Espresso",
		price: 30,
		isAvailable: true,
		imagePath: "/images/products/espresso.jpg",
	},
	{
		id: "prd_cappuccino",
		name: "Cappuccino",
		price: 45,
		isAvailable: true,
		imagePath: "/images/products/cappuccino.jpg",
	},
	{
		id: "prd_latte",
		name: "Latte",
		price: 50,
		isAvailable: true,
		imagePath: "/images/products/latte.jpg",
	},
	{
		id: "prd_mocha",
		name: "Mocha",
		price: 60,
		isAvailable: false,
		imagePath: "/images/products/mocha.jpg",
	},
	{
		id: "prd_iceCoffee",
		name: "Ice coffee",
		price: 70,
		isAvailable: true,
		imagePath: "/images/products/iceCoffee.jpg",
	},
];

export default mockProducts;
