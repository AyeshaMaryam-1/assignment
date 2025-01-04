export default function Contact(){
    return(
        <div>
            <div className="md:max-w-5xl max-w-xl mx-24 tracking-wide">
                <div className="flex">
                <p className="text-gray-500 ml-4">Home /&nbsp;</p><p className="text-black">Contact</p>
                </div>
                <div className="flex gap-8 ml-10">
                    <div className="text-sm w-[450px] h-auto mt-20 mb-20 p-2 shadow-lg rounded">
                        <div className="flex m-4">
                            <div className="bg-[#DB4444] rounded-full p-1 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                    <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.554 6.24L7.171 2.335c-.39-.45-1.105-.448-1.558.006L2.831 5.128c-.828.829-1.065 2.06-.586 3.047a29.2 29.2 0 0 0 13.561 13.58c.986.479 2.216.242 3.044-.587l2.808-2.813c.455-.455.456-1.174.002-1.564l-3.92-3.365c-.41-.352-1.047-.306-1.458.106l-1.364 1.366a.46.46 0 0 1-.553.088a14.56 14.56 0 0 1-5.36-5.367a.46.46 0 0 1 .088-.554l1.36-1.361c.412-.414.457-1.054.101-1.465"></path>
                                </svg>
                            </div>
                            <h1 className="text-[16px] ml-6 mt-1 font-semibold">Call To Us</h1>
                        </div>

                        <p className="m-4">We are available 24/7, 7 days a week. </p>
                        <p className="m-4">Phone: +8801611112222</p>
                        <hr className="my-6 mx-4 border-gray-600" />

                        <div className="flex items-center m-4">
                            <div className="bg-[#DB4444] rounded-full p-1 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 16 16" className="w-6 h-6">
                                    <path fill="white" fillRule="evenodd" d="m1 3.5l.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5zm1 1.035V12h12V4.536L8.31 8.9H7.7zM13.03 4H2.97L8 7.869z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <h1 className="text-[16px] ml-6 mt-1 font-semibold">Write to US</h1>
                        </div>


                        <p className="m-4">Fill out our form and we will contact you within 24 hours.</p>
                        <p className="m-4">Emails: customer@exclusive.com</p>
                        <p className="m-4">Emails: support@exclusive.com</p>
                    </div>
                    <div className="w-[700px] h-auto border mt-20 mb-20 px-4 py-10 shadow-lg rounded">
                        <div className="flex text-black gap-4 ">
                            <input type="text" id="name" placeholder="Your Name *" required className="bg-gray-100 placeholder-gray-500 py-2 pl-4 rounded focus:outline-none" />
                            <input type="text" id="email" placeholder="Your Email *" required className="bg-gray-100 placeholder-gray-500 py-2 pl-4 rounded focus:outline-none" />
                            <input type="text" id="phone" placeholder="Your Phone *" required className="bg-gray-100 placeholder-gray-500 py-2 pl-4 rounded focus:outline-none" />
                            
                        </div>
                        <textarea name="message" id="message" className="mt-6 bg-gray-100 text-gray-500 w-[623px] h-[190px] py-2 pl-4 rounded focus:outline-none" >Your Message</textarea>
                        <button className="bg-[#DB4444] text-white mt-6 ml-[450px] py-3 px-8 rounded justify-end hover:bg-black hover:text-white">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}