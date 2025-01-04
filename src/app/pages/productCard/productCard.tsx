import Image from "next/image";
import StarIcon from "./staricon";

interface ProductCardProps {
  image: string; // URL of the product image
  title: string; // Product title
  badge?: string; // Optional badge text
  badge1?: string; // Optional badge1 text
  badge2?: string; // Optional badge2 text
  badgeColor?: string; // Optional badge background color
  badgeColor1?: string; // Optional badge background color
  price: string,
  originalPrice: string,
  rating: string,
}

const Stars = () => (
  <div style={{ display: "flex", gap: "2px" }}>
    {Array.from({ length: 5 }).map((_, index) => (
      <StarIcon key={index} />
    ))}
  </div>
);

const ProductCard: React.FC<ProductCardProps> = ({ image, title, badge, badge1, badge2, badgeColor, badgeColor1, price, originalPrice, rating }) => {
  return (
    <div className="relative tracking-wide group w-[270px] h-[370px] bg-white shadow-md overflow-hidden hover:-translate-y-2 transition-all">
      {/* Product Image */}
      <div className="relative bg-gray-200 w-[270px] h-[246px]">
        <div className=" px-12 py-10">
          <Image src={image} alt={title} width={190} height={180} className="w-[190px] h-[180px] object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-0 bg-black opacity-0 transition-all duration-300 group-hover:h-14 group-hover:opacity-100">
          <p className="text-white font-semibold text-center p-4">Add To Cart</p>
        </div>
            {/* Badge */}
            {badge && (
              <div className="w-16 h-8 flex rounded items-center justify-center absolute top-4 left-4"
              style={{ backgroundColor: badgeColor1 }} // Dynamically set the badge color
              >
                    <h3 className="text-white text-sm">{badge}</h3>
                </div>
            )}
            {badge1 && (
                <div className="w-10 h-10 flex items-center justify-center rounded-full absolute top-4 right-4"
                style={{ backgroundColor: badgeColor }} // Dynamically set the badge color
              >
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="hover:bg-[#DB4444] hover:rounded-full hover:w-10 hover:h-10 hover:text-white hover:p-1">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.696 3C14.652 3 12.887 4.197 12 5.943C11.113 4.197 9.348 3 7.304 3C4.374 3 2 5.457 2 8.481s1.817 5.796 4.165 8.073S12 21 12 21s3.374-2.133 5.835-4.446C20.46 14.088 22 11.514 22 8.481S19.626 3 16.696 3"></path>
                    </svg>
                </div>
            )}
            {badge2 && (
                <div className="w-10 h-10 flex items-center justify-center rounded-full absolute top-16 right-4"
                style={{ backgroundColor: badgeColor }} // Dynamically set the badge color
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="hover:bg-[#DB4444] hover:rounded-full hover:w-10 hover:h-10 hover:text-white hover:p-1">
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                            <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></path>
                            <path d="M2 12c1.6-4.097 5.336-7 10-7s8.4 2.903 10 7c-1.6 4.097-5.336 7-10 7s-8.4-2.903-10-7"></path>
                        </g>
                    </svg>
                </div>
            )}
            
      </div>
      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-lg font-semibold text-[#DB4444]">{price}</p>
          {originalPrice && (
            <p className="text-gray-500 font-semibold text-md pl-2 line-through">{originalPrice}</p>
          )}
        </div>
        <div className="flex pt-2">
          <Stars/>
          <p className="text-gray-500 font-semibold text-md pl-2 ">(88)</p>
          <p>{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
