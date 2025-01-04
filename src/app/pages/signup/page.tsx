import Image from "next/image";
import Link from "next/link";

export default function SignUp(){
    return(
        <div>
            <div className="font-[sans-serif]">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 items-center mb-40 gap-20">
                    <div className="max-md:order-1 h-screen min-h-full">
                    <Image className="login" 
                        src="/Signup.png"
                        alt="img"
                        width={905}
                        height={881}/>
                    </div>
                    <form className="max-w-sm w-85 p-10 mx-20">
                    <div className="mb-12">
                        <h3 className="text-black text-3xl">Create an account</h3>
                        <p className=" text-black text-sm mt-6">Enter your details below </p>
                    </div>

                    <div className="mt-6">
                        <div className="relative flex items-center">
                        <input name="name" type="text" required className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Name" />
                        </div>
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

                    <div className="mt-12">
                        <button type="button" className="w-full py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-[#DB4444] hover:bg-blue-700 focus:outline-none">
                        Create Account
                        </button>
                    </div>

                    <button type="button" className="w-full mt-4 flex items-center justify-center gap-4 py-2.5 px-4 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-transparent hover:bg-gray-50 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="inline" viewBox="0 0 512 512">
                        <path fill="#fbbd00"
                            d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                            data-original="#fbbd00" />
                        <path fill="#0f9d58"
                            d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                            data-original="#0f9d58" />
                        <path fill="#31aa52"
                            d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                            data-original="#31aa52" />
                        <path fill="#3c79e6"
                            d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                            data-original="#3c79e6" />
                        <path fill="#cf2d48"
                            d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                            data-original="#cf2d48" />
                        <path fill="#eb4132"
                            d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                            data-original="#eb4132" />
                        </svg>
                        Sign Up with google
                    </button>
                    <p className="text-center text-gray-600 text-sm mt-6">Already have account? <a href="javascript:void(0);" className="text-gray-600 font-semibold hover:underline ml-1 whitespace-nowrap">
                        <Link href = "/pages/login">Log in</Link></a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}