export default function TopHeader(){
    return(
        <div>
            <section className='top-header py-4 bg-black text-white text-center px-20'>
                <p className="text">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! &nbsp;<strong><u>ShopNow</u></strong></p>
                <div className="relative font-[sans-serif] w-max mx-auto">
                    <button type="button" id="dropdownToggle"
                        className="py-1 text-sm">
                        English
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                            clip-rule="evenodd" data-original="#000000" />
                        </svg>  
                    </button>
                </div>
            </section>
        </div>
    )
}