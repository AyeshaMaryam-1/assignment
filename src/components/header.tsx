import Link from "next/link";

export default function Header(){
    
    return(
        <div>
            <div className="flex top-header py-4 bg-white text-black text-center mt-6">
                <h1 className="ml-28 text-[24px]"><strong>Exclusive</strong></h1>
                <ul className="items flex gap-14 text-[16px] ml-2">
                    <li className="active:border-b-2 active:border-black"><Link href={"/"}>Home</Link></li>
                    <li className="active:border-b-2 active:border-black"><Link href={"/pages/contact"}>Contact</Link></li>
                    <li className="active:border-b-2 active:border-black"><Link href={"/pages/about"}>About</Link></li>
                    <li className="active:border-b-2 active:border-black"><Link href={"/pages/signup"}>Sign Up</Link></li>
                </ul>
                <div className="flex px-2 rounded-md overflow-hidden max-w-md mx-100 font-[sans-serif]">
                    <input type="email" placeholder="What are you looking for?" 
                    className="w-60 outline-none bg-gray-100 text-gray-600 text-sm py-2 px-4" />
                    <div className="absolute right-60 pt-8 -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-gray-600">
                        <path
                            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                        </path>
                        </svg>
                    </div>
                    <div className="flex gap-6 ml-8">
                        <Link href={"/pages/wishlist"}><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="hover:bg-[#DB4444] hover:rounded-full hover:w-6 hover:h-6 hover:text-white hover:p-1">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.696 3C14.652 3 12.887 4.197 12 5.943C11.113 4.197 9.348 3 7.304 3C4.374 3 2 5.457 2 8.481s1.817 5.796 4.165 8.073S12 21 12 21s3.374-2.133 5.835-4.446C20.46 14.088 22 11.514 22 8.481S19.626 3 16.696 3"></path>
                        </svg></Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 512 512" className="hover:bg-[#DB4444] hover:rounded-full hover:w-6 hover:h-6 hover:text-white hover:p-1">
                            <circle cx={176} cy={416} r={16} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32}></circle>
                            <circle cx={400} cy={416} r={16} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32}></circle>
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M48 80h64l48 272h256"></path>
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="hover:bg-[#DB4444] hover:rounded-full hover:w-6 hover:h-6 hover:text-white hover:p-1">
                            <g fill="none" stroke="currentColor" strokeDasharray={28} strokeDashoffset={28} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                                <path d="M4 21v-1c0 -3.31 2.69 -6 6 -6h4c3.31 0 6 2.69 6 6v1">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"></animate>
                                </path>
                                <path d="M12 11c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4Z">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="28;0"></animate>
                                </path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
                <hr className="my-2 border-gray-300 mb-12" />
        </div>
    )
}
