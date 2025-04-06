import { useNavigate } from "react-router";


function ProductCard({ product_name, categories, image_url, Nutrition_Grade, ingredients,id,sugar,nutriments }) {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate(`/product/${id}`,{ state: { product_name, categories, image_url, ingredients, Nutrition_Grade, sugar,nutriments } })
        
    }
    
    return (
      <div className="w-64 h-96 bg-white flex flex-col  justify-between shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
        <div className="relative ">
          <img
            src={image_url || "https://via.placeholder.com/150"}
            alt={product_name}
            loading="lazy"
            className="w-full h-44 object-cover"
          />
          <div className="absolute top-2 right-2 bg-white text-gray-700 text-xs font-bold px-2 py-1 rounded-full shadow-md">
            {Nutrition_Grade.toUpperCase()}
          </div>
        </div>
  
        <div className="p-4 text-center space-y-2">
          <h1 className="text-xl font-semibold text-gray-800">{product_name}</h1>
          <h3 className="text-sm text-gray-500 capitalize">{categories}</h3>
          <p className="text-sm text-gray-600 line-clamp-3">{ingredients}</p>
        </div>
  
        <div className="bg-gray-100 p-2 text-center  ">
          <button  onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded-full transition duration-300">
            View Details
          </button>
        </div>
      </div>
    );
  }
  
  export default ProductCard;
  