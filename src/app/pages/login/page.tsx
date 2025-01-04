import Image from "next/image"

export default function LogIn(){
    return(
        <div className="font-[sans-serif]">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 items-center mb-40 gap-20">
                <div className="max-md:order-1 h-screen min-h-full">
                <Image className="signup" 
                    src="/Signup.png"
                    alt="img"
                    width={905}
                    height={881}/>
                </div>
                <form className="max-w-sm w-85 p-10 mx-20">
                <div className="mb-12">
                    <h3 className="text-black text-3xl">Log in to Exclusive</h3>
                    <p className=" text-black text-sm mt-6">Enter your details below </p>
                </div>
                <div className="mt-6">
                    <div className="relative flex items-center">
                    <input name="email" type="text" required className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Email or Phone Number" />
                    </div>
                </div>

                <div className="mt-6">
                    <div className="relative flex items-center">
                    <input name="password" type="password" required className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Password" />
                    </div>
                </div>
                <div className="flex mt-12">
                    <div className="">
                        <button type="button" className="w-full py-2.5 px-6 text-sm tracking-wide rounded-sm text-white bg-[#DB4444] hover:bg-blue-700 focus:outline-none">
                        Log in
                        </button>
                    </div>
                    <button className="mt-2 ml-20 text-[#DB4444] outline-none">Forgot Password?</button>
                </div>
                </form>
            </div>
        </div>
    )
}