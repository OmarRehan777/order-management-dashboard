import Link from "next/link";

export default function RowLink({ orderId }: { orderId: string }) {
	return (
		<Link
			href={`/order_history/${orderId}`}
			className="absolute inset-0"
			aria-label="open order details"
		></Link>
	);
}
