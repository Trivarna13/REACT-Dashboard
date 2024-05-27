import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { FaArrowUpLong } from "react-icons/fa6";

const ColumnChartCard = () => {
	const [options, setOptions] = useState(null);
	useEffect(() => {
		const chartOptions = {
			colors: ["#1A56DB"],
			series: [
				{
					name: "Daily Traffic",
					color: "#1A56DB",
					data: [
						{ x: "00", y: 20 },
						{ x: "04", y: 30 },
						{ x: "08", y: 40 },
						{ x: "12", y: 12 },
						{ x: "14", y: 14 },
						{ x: "16", y: 16 },
						{ x: "18", y: 18 },
					],
				},
			],
			chart: {
				type: "bar",
				height: "220px",
				fontFamily: "Inter, sans-serif",
				toolbar: {
					show: false,
				},
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: "50%",
					borderRadiusApplication: "end",
					borderRadius: 8,
				},
			},
			tooltip: {
				shared: true,
				intersect: false,
				style: {
					fontFamily: "Inter, sans-serif",
				},
			},
			states: {
				hover: {
					filter: {
						type: "darken",
						value: 1,
					},
				},
			},
			stroke: {
				show: true,
				width: 0,
				colors: [
					"linear-gradient(to top, #1a56db, #3952e3, #514de9, #6845ee, #7e3af2)",
				],
			},
			grid: {
				show: false,
				strokeDashArray: 4,
				padding: {
					left: 2,
					right: 2,
					top: -14,
				},
			},
			dataLabels: {
				enabled: false,
			},
			legend: {
				show: false,
			},
			xaxis: {
				floating: false,
				labels: {
					show: true,
					style: {
						fontFamily: "Inter, sans-serif",
						cssClass: "text-xs font-normal fill-gray-500 ",
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
			fill: {
				opacity: 1,
			},
		};
		setOptions(chartOptions);
	}, []);

	return (
		<div className="max-w-sm w-full bg-white rounded-lg shadow p-4 md:p-6">
			<div>
				<div className="flex justify-between">
					<div>
						<p className="text-base font-normal text-gray-500 ">
							Daily Traffic
						</p>
						<div className="flex">
							<h5 className="leading-none text-3xl font-bold text-gray-900  pb-2">
								2.579
							</h5>
							<p className="text-base font-normal text-gray-500 pl-2 pt-2">
								Visitors
							</p>
						</div>
					</div>
					<div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500  text-center">
						+2.45%
						<FaArrowUpLong className="w-3 h-3 ms-1" />
					</div>
				</div>
				<div id="column-chart">
					{options && (
						<Chart
							options={options}
							series={options.series}
							type="bar"
							height="215"
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default ColumnChartCard;
