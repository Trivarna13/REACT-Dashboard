import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

const Layout = () => {
	return (
		<div className="flex h-screen">
			<Sidebar />
			<div className="flex-1 flex flex-col">
				<Navbar />
				<Dashboard />
			</div>
		</div>
	);
};

export default Layout;
