import Image from "next/image";

type ProductImageProps = {
	src?: string;
	alt: string;
};

export default function ProductImage({ src, alt }: ProductImageProps) {
	return (
		<div
			className="relative aspect-square w-12 xs:w-14 overflow-hidden rounded-xl
			bg-grey-3/40 -ml-2"
		>
			<Image
				src={src ?? "/images/products/placeholder.png"}
				alt={alt}
				fill
				sizes="56px"
				className="object-cover"
				priority={false}
			/>
		</div>
	);
}
