export default function Returning() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
            <h1 className="text-3xl font-bold mb-4">Login</h1>
            <form className="flex flex-col gap-4 w-full max-w-sm">
                <input
                    type="text"
                    placeholder="Username"
                    className="p-2 border border-gray-300 rounded-md"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 border border-gray-300 rounded-md"
                />
                <button
                    type="submit"
                    className="bg-[#C5EC23] text-black p-2 rounded-md hover:bg-[#A0C21A]"
                >
                    Login
                </button>
            </form>
        </div>
    );
}