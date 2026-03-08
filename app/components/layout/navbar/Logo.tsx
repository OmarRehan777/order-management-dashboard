import Image from "next/image";
export default function Logo() {
	return (
		<div className="Logo  flex items-center justify-center mb-6">
			<Image
				src="/images/cc-logo.png"
				width={100}
				height={100}
				alt="Logo of the brand"
			/>
		</div>
	);
}
