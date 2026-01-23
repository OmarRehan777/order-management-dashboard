import { Roboto } from "next/font/google";
import "./globals.css";

// const roboto = Roboto({
// 	variable: "--font-roboto",
// 	subsets: ["latin"],
// });

// ${roboto.variable}

export const metadata = {
	title: "Cairo Café",
	description: "The best coffee in Cairo",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={` font-main  box-border text-white`}>
				{children}
			</body>
		</html>
	);
}
