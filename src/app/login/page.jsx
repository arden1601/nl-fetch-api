"use client";
export default function Login() {

    const handleSubmit = () => {
        
    }

    return(
        <div className="flex justify-center items-center w-screen h-screen">
            <form onSubmit={handleSubmit} >
                <div className="flex flex-col gap-4">
                    <input type="text" placeholder="Username" className="border-2 border-gray-300 rounded-md p-2" />
                    <input type="password" placeholder="Password" className="border-2 border-gray-300 rounded-md p-2" />
                    <button type="submit" className="bg-blue-500 text-white rounded-md p-2 cursor-pointer">Login</button>
                </div>
            </form>

        </div>
    )
}