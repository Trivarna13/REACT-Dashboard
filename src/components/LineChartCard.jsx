import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { FaArrowUpLong } from "react-icons/fa6";

const LineChartCard = () => {
	const [options, setOptions] = useState(null);

	useEffect(() => {
		const chartOptions = {
			chart: {
				height: "100%",
				maxWidth: "100%",
				type: "line",
				fontFamily: "Inter, sans-serif",
				dropShadow: {
					enabled: false,
				},
				toolbar: {
					show: false,
				},
			},
			tooltip: {
				enabled: true,
				x: {
					show: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				width: 6,
				curve: "smooth",
			},
			grid: {
				show: true,
				strokeDashArray: 4,
				padding: {
					left: 2,
					right: 2,
					top: -26,
				},
			},
			series: [
				{
					name: "Revenue",
					data: [332, 456, 518, 426, 418],
					color: "#1A56DB",
				},
				{
					name: "Profit",
					data: [456, 356, 424, 526, 356],
					color: "#7E3AF2",
				},
			],
			legend: {
				show: false,
			},
			xaxis: {
				categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
				labels: {
					show: true,
					style: {
						fontFamily: "Inter, sans-serif",
						cssClass: "text-xs font-normal fill-gray-500",
					},
				},
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
			},
			yaxis: {
				show: false,
			},
		};

		setOptions(chartOptions);
	}, []);

	return (
		<div className="max-w-sm w-full bg-white rounded-lg shadow p-4 md:p-6">
			<div className="flex justify-between">
				<div>
					<h5 className="leading-none text-3xl font-bold text-gray-900 pb-2">
						₹317.01K
					</h5>
					<p className="text-base font-normal text-gray-500 ">
						Total Spent
					</p>
				</div>
				<div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 text-center">
					+2.45%
					<FaArrowUpLong className="w-3 h-3 ms-1" />
				</div>
			</div>
			<div id="line-chart">
				{options && (
					<Chart
						options={options}
						series={options.series}
						type="area"
						height="215"
					/>
				)}
			</div>
		</div>
	);
};

export default LineChartCard;
