import Button from "@/app/components/Button";
import Image from "next/image";
import NoImage from "@/public/images/Empty-Image .png";



const DishCard: React.FC = () => {
    return (
       	<div
          className="bg-white dark:bg-[#18181b] rounded-xl shadow-md p-6 flex flex-col items-center border border-gray-200 dark:border-gray-700"
        >
            <Image
              src={NoImage}
              alt="No Image Available"
              width={80}
              height={80}
              className="mb-4"
            />
            <h2  className="text-xl font-semibold mb-2">Dish Name</h2>
			<Button className="bg-[#C5EC23] text-black">
                Vote
            </Button>
		</div> 
    );
};

export default DishCard;