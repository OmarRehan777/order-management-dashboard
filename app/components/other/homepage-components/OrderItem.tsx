import type { ReactNode } from "react";

type OrderItemProps = {
	item: string;
	count: number;
};

export default function OrderItem({ item, count }: OrderItemProps) {
	return (
		<div className="rounded-xl bg-grey-1 w-full h-4/10 text-xl font-bold flex justify-between items-center px-4">
			<span>{item}</span>
			<span>{`X${count}`}</span>
		</div>
	);
}
