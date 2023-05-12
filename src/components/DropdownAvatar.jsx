import { ROLES } from "../const.js";

function DropdownAvatar({ setU, action, user, setShowLogin }) {
	return (
		<div
			id="dropdownAvatar"
			className="absolute ml-auto top-16 right-2 divide-y divide-gray-300 rounded-lg shadow w-36 bg-white"
		>
			{user ? (
				<div className="px-4 py-3 text-sm text-black font-semibold ">
					<div>{user.nombres}</div>
					<div className="flex mt-2">
						<div className="rounded-full bg-green-500 mr-2 text-transparent">
							oo
						</div>
						Online
					</div>
				</div>
			) : null}
			<div className="py-2">
				{/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
				<a
					href="/"
					className="block px-4 py-2 text-sm text-black cursor-pointer hover:bg-[#0069a3] hover:bg-opacity-80 hover:text-white hover:font-semibold hover:scale-95 transition rounded-lg"
					onClick={() => action(false)}
				>
					Inicio
				</a>
			</div>
			{user ? (
				user.rol === ROLES.EDITOR ? (
					<>
						<div className="py-2">
							{/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
							<a
								href="/EditorArticlesHistory"
								className="block px-4 py-2 text-sm text-black cursor-pointer hover:bg-[#0069a3] hover:bg-opacity-80 hover:text-white hover:font-semibold hover:scale-95 transition rounded-lg"
								onClick={() => action(false)}
							>
								Historial Articulos
							</a>
						</div>
						<div className="py-2">
							{/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
							<a
								href="/AuthorsList"
								className="block px-4 py-2 text-sm text-black cursor-pointer hover:bg-[#0069a3] hover:bg-opacity-80 hover:text-white hover:font-semibold hover:scale-95 transition rounded-lg"
								onClick={() => action(false)}
							>
								Autores
							</a>
						</div>
					</>
				) : (
					<>
						<div className="py-2">
							{/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
							<a
								href="/AuthorArticles"
								className="block px-4 py-2  text-sm text-black cursor-pointer hover:bg-[#0069a3] hover:bg-opacity-80 hover:text-white hover:font-semibold hover:scale-95 transition rounded-lg"
								onClick={() => action(false)}
							>
								Mis Articulos
							</a>
						</div>
						<div className="py-2">
							{/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
							<a
								href="/Profile"
								className="block px-4 py-2  text-sm text-black cursor-pointer hover:bg-[#0069a3] hover:bg-opacity-80 hover:text-white hover:font-semibold hover:scale-95 transition rounded-lg"
								onClick={() => action(false)}
							>
								Perfil
							</a>
						</div>
					</>
				)
			) : null}

			{user ? (
				<div className="py-2">
					<button
						className="text-left block px-4 py-2 w-full text-sm text-black  hover:bg-[#0069a3] hover:bg-opacity-80 hover:text-white hover:font-semibold hover:scale-95 transition rounded-lg"
						onClick={() => {
							setU(null);
							action(false);
							localStorage.setItem("user", null);
						}}
					>
						Sign out
					</button>
				</div>
			) : window.location.pathname === "/register" ? null : (
				<div className="py-2">
					<button
						className="block w-full text-left px-4 py-2 text-sm text-black cursor-pointer hover:bg-[#0069a3] hover:bg-opacity-80 hover:text-white hover:font-semibold hover:scale-95 transition rounded-lg"
						onClick={() => {
							action(false);
							setShowLogin(true);
						}}
					>
						Sign in
					</button>
				</div>
			)}
		</div>
	);
}

export default DropdownAvatar;
