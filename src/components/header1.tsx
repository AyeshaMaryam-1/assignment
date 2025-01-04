import Link from "next/link";

export default function Header1(){
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
                </div>
            </div>
            <hr className="my-2 border-gray-300 mb-12" />
        </div>
    )
}