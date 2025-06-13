import Image from "next/image";
import Button from "@/app/components/Button";
import Thumbnail from "@/public/images/Login-pg-thumbnail.png";

export default function Login() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
            <h1 className="italic text-3xl font-bold">Potluck Playoffs</h1>
            <Image
                src={Thumbnail}
                alt='No Image Available'
                width={300}
                height={300}
                className="mb-8 rounded-full" 
            />
            <h1 className="text-3xl font-bold mb-4">Login</h1>
            <form className="flex flex-col gap-4 w-full max-w-sm">
                <Button className="bg-[#C5EC23] text-black p-2 hover:bg-[#A0C21A]">
                New Guest Sign Up
                </Button>
                <Button className="border border-[#898989] text-white hover:bg-[#A0C21A] hover:text-[#080808]">
                Returning User Login
                </Button>
            </form>
        </div>
    );
}