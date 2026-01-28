import Navbar from "../components/layout/navbar/Navbar";
import Header from "../components/layout/header/Header";
import MainContentContainer from "./MainContentContainer";

import type { ReactNode } from "react";

type LayoutProps = {
	children: ReactNode;
};

export default function layout({ children }: LayoutProps) {
	return (
		<div className="flex h-screen w-screen">
			<Navbar className={""}></Navbar>
			<div className="right-section  bg-grey-2  h-screen flex flex-col flex-1 min-w-0 ">
				<Header></Header>
				<MainContentContainer>{children}</MainContentContainer>
			</div>
		</div>
	);
}
