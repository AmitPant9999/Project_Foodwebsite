import { useLocation } from "react-router-dom";

function ProductDetail() {
  const location = useLocation();
  const product = location.state;

  if (!product) {
    return <div className="text-center mt-10 text-red-500 text-xl font-semibold">Product not found!</div>;
  }

  const nutrients = product.nutriments || {};
  const {
    alcohol = "N/A",
    calcium = "N/A",
    carbohydrates = "N/A",
    energy = "N/A",
    fat = "N/A",
    fiber = "N/A",
    sodium = "N/A",
  } = nutrients;

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full h-full flex flex-col">
        <img
          src={product.image_url}
          alt={product.product_name}
          className="w-full h-64 object-cover"
        />

        <div className="p-4 flex flex-col flex-grow overflow-y-auto">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800">{product.product_name}</h1>
            <p className="text-gray-500 text-sm">{product.categories || "N/A"}</p>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Ingredients:</h2>
            <p className="text-gray-600">{product.ingredients || "N/A"}</p>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Nutritional Values:</h2>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <p><strong>Nutrition Grade:</strong> {product.nutrition_grades || "N/A"}</p>
              <p><strong>Sugar:</strong> {product.nutriments?.sugars || "N/A"}</p>
              <p><strong>Alcohol:</strong> {alcohol}</p>
              <p><strong>Calcium:</strong> {calcium} mg</p>
              <p><strong>Carbohydrates:</strong> {carbohydrates} g</p>
              <p><strong>Energy:</strong> {energy} kJ</p>
              <p><strong>Fat:</strong> {fat} g</p>
              <p><strong>Fiber:</strong> {fiber} g</p>
              <p><strong>Sodium:</strong> {sodium} mg</p>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Labels & Tags:</h2>
            <p className="text-gray-600">{product.labels || "No tags available"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
