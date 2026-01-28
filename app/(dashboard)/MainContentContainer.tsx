import type { ReactNode } from "react";
import CardDetailsOverlay from "../components/other/homepage-components/CardDetailsOverlay";

type MainContentContainerProps = {
	children?: ReactNode;
};

export default function MainContentContainer({
	children,
}: MainContentContainerProps) {
	return (
		<div
			className=" MainContentContainer h-full relative px-4 py-4 mt-18.75 lg:mt-16.25  scrollbar-orange overflow-auto  flex-1
		text-sm md:text-base"
		>
			{children}
		</div>
	);
}
