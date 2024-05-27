// import { useState } from "react";
import Chart from "react-apexcharts";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { FaArrowUpLong } from "react-icons/fa6";

const AreaChartCard = () => {
	const options = {
		chart: {
			height: "100%",
			maxWidth: "100%",
			type: "area",
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
		fill: {
			type: "gradient",
			gradient: {
				opacityFrom: 0.55,
				opacityTo: 0,
				shade: "#7E3AF2",
				gradientToColors: ["#7E3AF2"],
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			width: 6,
		},
		grid: {
			show: false,
			strokeDashArray: 4,
			padding: {
				left: 2,
				right: 2,
				top: 0,
			},
		},
		series: [
			{
				name: "New users",
				data: [6500, 6418, 6456, 6526, 6356, 6456],
				color: "#7E3AF2",
			},
		],
		xaxis: {
			categories: [
				"01 February",
				"02 February",
				"03 February",
				"04 February",
				"05 February",
				"06 February",
				"07 February",
			],
			labels: {
				show: false,
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

	return (
		<div className="max-w-sm w-full bg-white rounded-lg shadow p-4 md:p-6">
			<div className="flex justify-between">
				<div>
					<h5 className="leading-none text-3xl font-bold text-gray-900  pb-2">
						32.4k
					</h5>
					<p className="text-base font-normal text-gray-500 ">
						Users this week
					</p>
				</div>
				<div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500  text-center">
					+12%
					<FaArrowUpLong className="w-3 h-3 ms-1" />
				</div>
			</div>
			<div id="area-chart">
				<Chart
					options={options}
					series={options.series}
					type="area"
					height="160"
				/>
			</div>
			<div className="grid grid-cols-1 items-center border-gray-200 border-t justify-between">
				<div className="flex justify-between items-center pt-5">
					<button
						id="dropdownDefaultButton"
						className="text-sm font-medium text-gray-500 hover:text-gray-900 text-center inline-flex items-center "
						type="button"
					>
						Last 7 days
						<FiChevronDown className="w-2.5 m-2.5 ms-1.5" />
					</button>
					<a
						href="#"
						className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 hover:bg-gray-100 px-3 py-2"
					>
						Users Report
						<FiChevronRight className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default AreaChartCard;
