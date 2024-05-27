import Card from "./Card";
import { RiBarChart2Fill } from "react-icons/ri";
import { HiUsers } from "react-icons/hi2";
import { MdPersonAddAlt1 } from "react-icons/md";
import { BsBarChartFill } from "react-icons/bs";
import AreaChartCard from "./AreaChartCard";
import LineChartCard from "./LineChartCard";
import ColumnChartCard from "./ColumnChartCard";
import UserTable from "./UserTable";

const Dashboard = () => {
	return (
		<div className="p-4">
			<section className="text-gray-700 body-font">
				<div className="container px-5 py-5 mx-auto">
					<div className="flex flex-wrap -m-4 text-center">
						<Card
							icon={RiBarChart2Fill}
							title={"Today's Money"}
							value={"₹28304.98"}
						/>
						<Card
							icon={HiUsers}
							title={"Today's Users"}
							value={"2,300"}
						/>
						<Card
							icon={MdPersonAddAlt1}
							title={"New Clients"}
							value={"3,462"}
						/>
						<Card
							icon={BsBarChartFill}
							title={"Sales"}
							value={"47743.56"}
						/>
					</div>
				</div>
			</section>
			<section className="px-5 py-5 flex flex-wrap justify-center">
				<div className="px-5">
					<AreaChartCard />
				</div>
				<div className="px-5">
					<LineChartCard />
				</div>
				<div className="px-5">
					<ColumnChartCard />
				</div>
			</section>
			<section className="px-5 py-5">
				<UserTable />
			</section>
		</div>
	);
};

export default Dashboard;
