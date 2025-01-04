import Image from "next/image";

export default function About(){
    return(
        <div className="font-sans bg-white p-4 mb-20">
            <div className="md:max-w-5xl max-w-xl mx-24">
                    <div className="flex">
                    <p className="text-gray-500">Home / </p><p className="text-black"> About</p>
                    </div>
                <div className="grid md:grid-cols-2 gap-20 flex">
                    <div className="text-left mt-28">
                        <h2 className="text-black text-4xl font-bold">Our Story</h2>
                        <p className="w-82 mt-10 mb-4 text-sm text-black">Launced in 2015, Exclusive is South Asia&apos;s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <p className="text-sm text-black">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>
                    <Image className="about mt-10 ml-10" 
                        src="/about.png"
                        alt="img"
                        width={705}
                        height={609}/>
                </div> 
            </div>
            <div className="flex gap-4 ml-24 mt-24">
                <Image className="about" 
                    src="/Frame 870.png"
                    alt="img"
                    width={270}
                    height={230}/>
                <Image className="about" 
                    src="/Frame 871.png"
                    alt="img"
                    width={270}
                    height={230}/>
                <Image className="about" 
                    src="/Frame 872.png"
                    alt="img"
                    width={270}
                    height={230}/>
                <Image className="about" 
                    src="/Frame 873.png"
                    alt="img"
                    width={270}
                    height={230}/>
            </div>
            <div className="font-sans p-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full mt-20">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white cursor-pointer">
                        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                            <Image className="about" 
                            src="/Frame 874.png"
                            alt="img"
                            width={370}
                            height={430}/>
                        </div>
                        <div className=" mt-16">
                            <h3 className="text-xl font-bold text-gray-800">Tom Cruise</h3>
                            <h3 className="text-sm text-black">Founder & Chairman</h3>
                            <div className="flex mt-4 gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24">
                                    <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 18.5C3.765 19.521 5.814 20 8 20c6.48 0 11.762-5.137 11.992-11.562L22 4.5l-3.354.5A4 4 0 0 0 16 4c-2.572 0-4.5 2.517-3.88 4.98c-3.552.23-6.771-1.959-8.633-4.875c-1.236 4.197-.09 9.251 3.013 12.366c0 1.176-3 1.878-4.5 2.029" color="currentColor"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24">
                                    <g fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="white">
                                        <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></path>
                                        <path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01"></path>
                                    </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24">
                                    <path fill="black" d="M12.001 9.55c.917-.937 2.111-1.55 3.5-1.55a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 1 0-7 0V21h-2V8.5h2zm-7-3.05a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-1 2h2V21h-2z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white cursor-pointer">
                        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                            <Image className="about" 
                                src="/Frame 875.png"
                                alt="img"
                                width={370}
                                height={430}/>
                        </div>
                        <div className="mt-16">
                            <h3 className="text-xl font-bold text-gray-800">Emma Watson</h3>
                            <h3 className="text-sm text-black">Managing Director</h3>
                            <div className="flex mt-4 gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24">
                                    <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 18.5C3.765 19.521 5.814 20 8 20c6.48 0 11.762-5.137 11.992-11.562L22 4.5l-3.354.5A4 4 0 0 0 16 4c-2.572 0-4.5 2.517-3.88 4.98c-3.552.23-6.771-1.959-8.633-4.875c-1.236 4.197-.09 9.251 3.013 12.366c0 1.176-3 1.878-4.5 2.029" color="currentColor"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24">
                                    <g fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="white">
                                        <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></path>
                                        <path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01"></path>
                                    </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24">
                                    <path fill="black" d="M12.001 9.55c.917-.937 2.111-1.55 3.5-1.55a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 1 0-7 0V21h-2V8.5h2zm-7-3.05a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-1 2h2V21h-2z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white cursor-pointer">
                        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                            <Image className="about" 
                                src="/Frame 876.png"
                                alt="img"
                                width={370}
                                height={430}/>
                        </div>
                        <div className="mt-16">
                            <h3 className="text-xl font-bold text-black">Will Smith</h3>
                            <h3 className="text-sm text-black">Product Designer</h3>
                            <div className="flex mt-4 gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24">
                                    <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 18.5C3.765 19.521 5.814 20 8 20c6.48 0 11.762-5.137 11.992-11.562L22 4.5l-3.354.5A4 4 0 0 0 16 4c-2.572 0-4.5 2.517-3.88 4.98c-3.552.23-6.771-1.959-8.633-4.875c-1.236 4.197-.09 9.251 3.013 12.366c0 1.176-3 1.878-4.5 2.029" color="currentColor"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24">
                                    <g fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="white">
                                        <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></path>
                                        <path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01"></path>
                                    </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24">
                                    <path fill="black" d="M12.001 9.55c.917-.937 2.111-1.55 3.5-1.55a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 1 0-7 0V21h-2V8.5h2zm-7-3.05a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-1 2h2V21h-2z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image className="mx-auto mt-4" 
                src="/Frame 883.png"
                alt="img"
                width={112}
                height={16}/>
            <div className="flex ml-60 mt-32 mb-24 gap-10">
                <Image className="701" 
                    src="/Frame 701.png"
                    alt="img"
                    width={249}
                    height={161}/>
                <Image className="702" 
                    src="/Frame 702.png"
                    alt="img"
                    width={262}
                    height={161}/>
                <Image className="703" 
                    src="/Frame 703.png"
                    alt="img"
                    width={256}
                    height={161}/>
            </div>
        </div>
    )
}