import { FaShopify } from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className="bg-gray-800 text-white h-screen w-64 flex flex-col">
			<div className="flex">
				<button
					onClick={toggleSidebar}
					aria-controls="logo-sidebar"
					type="button"
					className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-indigo-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  "
				>
					<span className="sr-only">Open sidebar</span>
					<svg
						className="w-6 h-6"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							clipRule="evenodd"
							fillRule="evenodd"
							d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
						/>
					</svg>
				</button>

				<aside
					id="logo-sidebar"
					className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
						isOpen ? "translate-x-0" : "-translate-x-full"
					} sm:translate-x-0 bg-gray-50`}
					aria-label="Sidebar"
				>
					<div className="h-full px-3 py-4 overflow-y-auto">
						<a href="#" className="flex items-center ps-2.5 mb-5">
							<FaShopify className="text-indigo-500 h-12 me-3 sm:h-7" />
							<span className="text-black self-center text-xl font-bold whitespace-nowrap">
								Shoppy
							</span>
						</a>
						<ul className="space-y-2 font-medium">
							<li>
								<a
									href="#"
									className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-indigo-100 group"
								>
									<svg
										className="w-5 h-5 text-indigo-500 transition duration-75 group-hover:text-indigo-500"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 22 21"
									>
										<path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
										<path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
									</svg>
									<span className="ms-3">Dashboard</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-indigo-100 group"
								>
									<svg
										className="flex-shrink-0 w-5 h-5 text-indigo-500 transition duration-75 group-hover:text-indigo-500"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
									</svg>
									<span className="flex-1 ms-3 whitespace-nowrap">
										Inbox
									</span>
									<span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
										3
									</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-indigo-100 group"
								>
									<svg
										className="flex-shrink-0 w-5 h-5 text-indigo-500 transition duration-75 group-hover:text-indigo-500"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M8.5 0A7.5 7.5 0 1 0 13 14.472V18h-2a2 2 0 1 0 2 2h5a2 2 0 1 0 2-2h-2v-4.06A7.5 7.5 0 0 0 8.5 0ZM5 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM9.825 12.708a.25.25 0 0 1-.243.042A4.473 4.473 0 0 1 8.5 12.5c-.36 0-.712-.045-1.05-.133a.25.25 0 0 1-.092-.46A3.505 3.505 0 0 0 8.5 10c.818 0 1.569.273 2.142.732a.25.25 0 0 1-.053.433 4.481 4.481 0 0 1-.764.393ZM12 9A1 1 0 1 1 12 7a1 1 0 0 1 0 2Z" />
									</svg>
									<span className="flex-1 ms-3 whitespace-nowrap">
										Users
									</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-indigo-100 group"
								>
									<svg
										className="flex-shrink-0 w-5 h-5 text-indigo-500 transition duration-75 group-hover:text-indigo-500"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 18 20"
									>
										<path d="M9 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2Zm0 5a3 3 0 1 0-3-3 3 3 0 0 0 3 3ZM9 10A6 6 0 0 0 3 16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1 6 6 0 0 0-6-6Zm-4.7 5a5 5 0 0 1 9.4 0Z" />
									</svg>
									<span className="flex-1 ms-3 whitespace-nowrap">
										Products
									</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-indigo-100 group"
								>
									<svg
										className="flex-shrink-0 w-5 h-5 text-indigo-500 transition duration-75 group-hover:text-indigo-500"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M17.211 4.5H2.789A2.789 2.789 0 0 0 0 7.289v5.422a2.789 2.789 0 0 0 2.789 2.789h14.422A2.789 2.789 0 0 0 20 12.711V7.289A2.789 2.789 0 0 0 17.211 4.5ZM2 12.711V7.289c0-.436.353-.789.789-.789h14.422c.436 0 .789.353.789.789v5.422c0 .436-.353.789-.789.789H2.789A.789.789 0 0 1 2 12.711ZM4 10a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H4Z" />
									</svg>
									<span className="flex-1 ms-3 whitespace-nowrap">
										Sign In
									</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-indigo-100 group"
								>
									<svg
										className="flex-shrink-0 w-5 h-5 text-indigo-500 transition duration-75 group-hover:text-indigo-500"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M14.75 1.75a1 1 0 1 1 0 2h-9.5a1 1 0 1 1 0-2h9.5Zm3.5 8a1 1 0 1 1 0 2h-16.5a1 1 0 1 1 0-2h16.5Zm-3.5 8a1 1 0 1 1 0 2h-9.5a1 1 0 1 1 0-2h9.5Z" />
									</svg>
									<span className="flex-1 ms-3 whitespace-nowrap">
										Sign Up
									</span>
								</a>
							</li>
						</ul>
					</div>
				</aside>
			</div>
		</div>
	);
};

export default Sidebar;
