import Image from "next/image";


export default function Footer(){
    return(
        <div>
            <footer className="bg-black py-7 px-20 font-sans">
            <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 gap-2 p-10px">
                <div>
                <h4 className="text-white text-lg mb-6">Exclusive</h4>
                <ul className="space-y-4">
                    <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">Subscribe</a>
                    </li>
                    <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">Get 10% off your first order</a>
                    </li>
                    <li>
                        <div className="grid max-md:grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <form className="mb-4">
                            <div className="relative flex items-center">
                                <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="bg-black border border-white px-4 py-2.5 rounded-sm w-52 text-[15px] text-gray-300 pl-6" 
                                />
                                <div className="absolute left-40 top-1/2 -translate-y-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                                    <path 
                                    fill="none" 
                                    stroke="white" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="m6 12l-3 9l18-9L3 3zm0 0h6">
                                    </path>
                                </svg>
                                </div>
                            </div>
                        </form>


                        </div>
                    </li>
                </ul>
                </div>
                <div>
                <h4 className="text-white text-lg mb-6">Support</h4>
                <ul className="space-y-4">
                    <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh</a>
                    </li>
                    <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px] ">exclusive@gmail.com</a>
                    </li>
                    <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">+88015-88888-9999</a></li>
                </ul>
                </div>
                <div>
                <h4 className="text-white text-lg mb-6">Account</h4>
                <ul className="space-y-4">
                    <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">My Account</a>
                    </li>
                    <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">Login / Register</a>
                    </li>
                    <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">Cart</a>
                    </li>
                    <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">Wishlist</a></li>
                    <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">Shop</a></li>
                </ul>
                </div>
                <div>
                <h4 className="text-white text-lg mb-6">Quick Link</h4>
                <ul className="space-y-4">
                    <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">Privacy Policy</a></li>
                    <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">Terms of Use</a></li>
                    <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">FAQ</a>
                    </li>
                    <li className="text-[15px]"><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">Contact</a></li>
                </ul>
                </div>
                <div>
                <h4 className="text-white text-lg mb-6">Download App</h4>
                <ul className="space-y-4">
                    <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white text-[15px]">Save $3 with App New User Only</a></li>
                    <li>
                        <div className="flex">
                            <Image className="QrCode" 
                            src="/Qr Code.png"
                            alt="img"
                            width={80}
                            height={80}/>
                            <div className="ml-5">
                                <Image className="QrCode" 
                                src="/GooglePlay.png"
                                alt="img"
                                width={110}
                                height={40}/>
                                <Image className="QrCode mt-2" 
                                src="/AppStore.png"
                                alt="img"
                                width={110}
                                height={40}/>
                            </div>
                        </div>
                        <div className="flex mt-4 gap-7">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                    <path fill="white" d="M13 9h4.5l-.5 2h-4v9h-2v-9H7V9h4V7.128c0-1.783.186-2.43.534-3.082a3.64 3.64 0 0 1 1.512-1.512C13.698 2.186 14.345 2 16.128 2q.784 0 1.372.15V4h-1.372c-1.324 0-1.727.078-2.139.298a1.63 1.63 0 0 0-.691.692c-.22.411-.298.814-.298 2.138z"></path>
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                    <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 18.5C3.765 19.521 5.814 20 8 20c6.48 0 11.762-5.137 11.992-11.562L22 4.5l-3.354.5A4 4 0 0 0 16 4c-2.572 0-4.5 2.517-3.88 4.98c-3.552.23-6.771-1.959-8.633-4.875c-1.236 4.197-.09 9.251 3.013 12.366c0 1.176-3 1.878-4.5 2.029" color="currentColor"></path>
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                    <g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="white">
                                        <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></path>
                                        <path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01"></path>
                                    </g>
                                </svg>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                    <path fill="white" d="M12.001 9.55c.917-.937 2.111-1.55 3.5-1.55a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 1 0-7 0V21h-2V8.5h2zm-7-3.05a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-1 2h2V21h-2z"></path>
                                </svg>
                            </li>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
            <hr className="my-6 border-gray-600 -mx-20" />
            <p className='text-center text-gray-600 '>&copy; Copyright Rimel 2022. All right reserved</p>
            </footer>
        </div>
    )
}