import ProfileComponent from "./ProfileComponent";
import SearchBar from "./SearchBar";

type HeaderProps = {
	className?: string;
};

export default function Header({ className }: HeaderProps) {
	return (
		<div
			className={` ${className} Header-main-container
				bg-grey-2  
				border-b border-grey-4  pl-4 pr-8 pt-4.5 pb-2 
				shadow-grey-1/60 shadow-xl 
				sticky top-0 z-10
				flex items-center justify-between `}
		>
			<SearchBar></SearchBar>
			<ProfileComponent></ProfileComponent>
		</div>
	);
}
