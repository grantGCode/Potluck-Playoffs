// import Image from "next/image";
import Button from "@/app/components/Button";
import DishCard from "./components/DishCard";

export default function Home() {
	return (
		<div className="min-h-screen bg-background text-foreground flex flex-col items-center p-8 gap-8">
			<header className="w-full flex justify-between items-center max-w-4xl mb-8">
				<h1 className="italic text-3xl font-bold">Potluck Playoffs</h1>
        <div className="border border-[#898989] text-white" >0</div>
			</header>
				<nav className="flex gap-4">
          <Button className="border border-[#898989] text-white hover:bg-[#C5EC23] text-black">
            Past Winners
          </Button>
          <Button className="border border-[#898989] text-white hover:bg-[#C5EC23] text-black">
            My Dish
          </Button>
          <Button className="border border-[#898989] text-white hover:bg-[#C5EC23] hover:text-[#080808]">
            Rules
          </Button>
				</nav>
			<p className="mb-8 text-lg">Vote for your favorite dish!</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
      <DishCard />
				{/* {dishes.map((dish) => (

				))} */}
			</div>
		</div>
	);
}
