import Button from "@/app/components/Button";
// import Image from "next/image";


const DishCard: React.FC = () => {
    return (
       	<div
		//   key={dish.name}
		  className="bg-white dark:bg-[#18181b] rounded-xl shadow-md p-6 flex flex-col items-center border border-gray-200 dark:border-gray-700"
		>
            {/* <Image
			//   src={dish.image}
			  alt={dish.name}
			  width={80}
			  height={80}
			  className="mb-4"
			/> */}
			{/* <h2  className="text-xl font-semibold mb-2">{dish.name}</h2> */}
			<p  className="mb-4 text-center text-gray-600 dark:text-gray-300">
				{/* {dish.description} */}
			</p>
			<Button className="bg-[#C5EC23] text-black">
                Vote
            </Button>
		</div> 
    );
};

export default DishCard;