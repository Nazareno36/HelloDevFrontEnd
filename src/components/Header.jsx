import { Outlet } from "react-router-dom";
import Avatar from "./Avatar";
import NotificationIcon from "./NotificationIcon";

const Header = ({ setU, user, children, setShowLogin }) => {
	return (
		<>
			<div className="z-20 fixed w-full bg-slate-900">
				<header className="h-16 text-white flex bg-[#0069a3]">
					<a className="text-2xl font-bold hover:text-[#ffc107] flex " href="/">
						<img
							className="ml-5 h-[62px] w-[110px]"
							src="./src/components/assets/header_logo.png"
							alt="Logo"
						/>
					</a>
					{user ? <NotificationIcon user={user} /> : null}
					<Avatar setU={setU} user={user} setShowLogin={setShowLogin} />
				</header>
			</div>
			{children ? children : <Outlet />}
		</>
	);
};

export default Header;
