const Card = ({ icon: Icon, title, value }) => {
	return (
		<div className="p-4 md:w-1/4 sm:w-1/2 w-full ">
			<div className="bg-white px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
				<Icon className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
				<h2 className="leading-relaxed">{title}</h2>
				<p className="title-font font-medium text-3xl text-gray-900">
					{value}
				</p>
			</div>
		</div>
	);
};

export default Card;
