import Image from "next/image";
export default function Logo() {
	return (
		<Image
			src="/images/cc-logo.png"
			width={100}
			height={100}
			alt="Logo of the brand"
		/>
	);
}
