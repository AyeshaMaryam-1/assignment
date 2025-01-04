import ProductPage from "../productCard/productPage";


export default function Wishlist(){
    return(
        <div>
            <div className="flex">
                <p className="text-lg ml-28"> Wishlist (4)</p>
                <button className="border border-gray-400 hover:bg-gray-200 font-semibold ml-[880px] py-3 px-10 rounded justify-end">Move All To Bag </button>
            </div>
            <ProductPage/>
        </div>
    )
}