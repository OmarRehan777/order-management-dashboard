import Link from "next/link";

export default function RowLink() {
	const orderIdTest = 123;

	return (
		<Link
			href={`/order_history/${orderIdTest}`}
			className="absolute inset-0"
			aria-label="open order details"
		></Link>
	);
}
