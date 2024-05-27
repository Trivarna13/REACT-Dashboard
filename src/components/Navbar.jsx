import React from "react";
import { TfiSearch } from "react-icons/tfi";
import { FiBell } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
	return (
		<div className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
			<h1 className="text-xl font-semibold px-5 text-black">
				Main Dashboard
			</h1>

			<div className="flex items-center space-x-4">
				<div className="relative text-gray-600">
					<input
						type="search"
						name="search"
						placeholder="Search..."
						className="bg-gray-100 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
					/>
					<button
						type="submit"
						className="absolute right-0 top-0 mt-2 mr-4"
					>
						<TfiSearch className="text-gray-600 h-4 w-4 text-indigo-600" />
					</button>
				</div>

				<div className="relative">
					<button className="focus:outline-none hover:bg-gray-100">
						<FiBell className="text-indigo-600 h-6 w-6" />
					</button>
					<div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden z-20">
						<div className="py-2">
							<a
								href="#"
								className="block px-4 py-2 text-gray-800"
							>
								A notification panel
							</a>
						</div>
					</div>
				</div>

				<div className="relative">
					<button className="focus:outline-none">
						<img
							className="w-10 h-10 rounded-full"
							src={
								process.env.PUBLIC_URL +
								"/assets/images/profile-picture-4.jpg"
							}
							alt="Bonnie Green"
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
