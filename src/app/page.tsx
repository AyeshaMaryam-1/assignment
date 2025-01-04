import Image from "next/image";
import ProductPage from "./pages/productCard/productPage";

export default function Home() {
  return (
      <div>
        <div className="flex">
          <ul className="ml-28">
            <li className="flex">Woman&apos;s Fashion 
              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={24} viewBox="0 0 12 24" className="ml-14">
                <path fill="black" fillRule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"></path>
              </svg>
            </li><br />
            <li className="flex">Men&apos;s Fashion
              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={24} viewBox="0 0 12 24" className="ml-20">
                <path fill="black" fillRule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"></path>
              </svg>             
            </li><br />
            <li>Electronics</li><br />
            <li>Home & Lifestyle</li><br />
            <li>Medicine</li><br />
            <li>Sports & Outdoor</li><br />
            <li>Baby&apos;s & Toys</li><br />
            <li>Groceries & Pets</li><br />
            <li>Health & Beauty</li><br />
          </ul>
          <div className="h-100 -mt-12 w-px bg-gray-300 ml-8"></div>
          <Image className="ml-12" 
              src="/Frame 560.png"
              alt="img"
              width={892}
              height={344}/>
        </div>
        <div className="mt-24">
          <div className="flex">
            <span className="ml-28 bg-[#DB4444] rounded w-6 h-8"></span>
            <h1 className=" ml-6 text-[#DB4444] font-semibold">Today&apos;s</h1>
          </div>
          <div className="flex">
            <h1 className="ml-28 mt-4 text-[28px] font-semibold">Flash Sales</h1>
            <div>
              <span className="flex ml-28 text-[14px] gap-10 font-semibold">
                <p>Days</p>
                <p>Hours</p>
                <p>Minutes</p>
                <p>Seconds</p>
              </span>
              <h1 className="ml-28 text-[28px] font-semibold">03 &nbsp;<span className="text-[#DB4444]"> : </span>&nbsp; 23 &nbsp; <span className="text-[#DB4444]"> : </span>&nbsp; 19 &nbsp;<span className="text-[#DB4444]"> : </span>&nbsp; 56</h1>
            </div>
          </div>
          <ProductPage/>
        </div>
        <button className="bg-[#DB4444] text-white my-12 ml-[600px]  py-3 px-8 rounded hover:bg-black">Send Message</button>
        <div>
          <div className="flex">
            <span className="ml-28 bg-[#DB4444] rounded w-6 h-8"></span>
            <h1 className=" ml-6 text-[#DB4444] font-semibold">Categories</h1>
          </div>
            <h1 className="ml-28 mt-4 text-[28px] font-semibold">Browse By Category</h1>
            <div className="flex gap-8 mx-20 my-10">
              <div className="border w-[170px] h-[145px] py-6 text-center rounded hover:bg-[#DB4444]">
                <Image className="mx-14" 
                  src="/category1.png"
                  alt="img"
                  width={56}
                  height={56}/>
                  <p className="pt-2 font-semibold">Phones</p>
              </div>
              <div className="border w-[170px] h-[145px] py-6 text-center rounded hover:bg-[#DB4444]">
                <Image className="mx-14" 
                  src="/category2.png"
                  alt="img"
                  width={56}
                  height={56}/>
                  <p className="pt-2 font-semibold">Computers</p>
              </div>
              <div className="border w-[170px] h-[145px] py-6 text-center rounded hover:bg-[#DB4444]">
                <Image className="mx-14" 
                  src="/category3.png"
                  alt="img"
                  width={56}
                  height={56}/>
                  <p className="pt-2 font-semibold">SmartWatch</p>
              </div>
              <div className="border w-[170px] h-[145px] py-6 text-center rounded hover:bg-[#DB4444]">
                <Image className="mx-14" 
                  src="/category4.png"
                  alt="img"
                  width={56}
                  height={56}/>
                  <p className="pt-2 font-semibold">Camera</p>
              </div>
              <div className="border w-[170px] h-[145px] py-6 text-center rounded hover:bg-[#DB4444]">
                <Image className="mx-14" 
                  src="/category5.png"
                  alt="img"
                  width={56}
                  height={56}/>
                  <p className="pt-2 font-semibold">HeadPhones</p>
              </div>
              <div className="border w-[170px] h-[145px] py-6 text-center rounded hover:bg-[#DB4444]">
                <Image className="mx-14" 
                  src="/category6.png"
                  alt="img"
                  width={56}
                  height={56}/>
                  <p className="pt-2 font-semibold">Gaming</p>
              </div>
            </div>
            <hr className="my-14 border-gray-300 mx-20" />
        </div>
        <div>
          <div className="flex">
            <span className="ml-28 bg-[#DB4444] rounded w-6 h-8"></span>
            <h1 className=" ml-6 text-[#DB4444] font-semibold">This Month</h1>
          </div>
          <div className="flex">
            <h1 className="ml-28 mt-4 text-[28px] font-semibold">Best Selling Products</h1>
            <button className="bg-[#DB4444] text-white ml-[720px]  py-2 px-14 rounded hover:bg-black">View All</button>
          </div>


        </div>
        <Image className="mx-24 my-16" 
          src="/music.png"
          alt="img"
          width={1170}
          height={500}/>
      </div>
    );
}
