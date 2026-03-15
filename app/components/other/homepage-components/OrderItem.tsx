import { getProductById } from "../../../lib/productMap";
import ProductImage from "./ProductImage";

type OrderItemProps = {
	quantity: number;
	productId: string;
};

// this component is responsible for rendering each item in the order card, it receives the productId and quantity as props, then it uses the productId to get the product name and image from the productMap, and renders them in a nice layout
export default function OrderItem({ quantity, productId }: OrderItemProps) {
	const src = getProductById(productId)?.imagePath;
	const name = getProductById(productId)?.name || "Unknown Product";
	return (
		<div className="rounded-xl bg-grey-1 w-full h-3/10 font-semibold flex justify-between items-center px-4 text-base xs:text-lg">
			<div className="order-item-data flex items-center gap-2">
				<ProductImage src={src} alt={name}></ProductImage>
				<span className="">{name}</span>
			</div>
			<span className="">{`× ${quantity}`}</span>
		</div>
	);
}
