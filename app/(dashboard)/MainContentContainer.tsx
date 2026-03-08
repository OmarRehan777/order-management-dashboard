import type { ReactNode } from "react";

type MainContentContainerProps = {
	children?: ReactNode;
};

export default function MainContentContainer({
	children,
}: MainContentContainerProps) {
	return (
		<div className="MainContentContainer  overflow-y-auto overflow-x-hidden   main-scrollbar-orange  min-w-0 min-h-0 px-6">
			{children}
		</div>
	);
}
