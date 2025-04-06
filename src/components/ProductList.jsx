// components/ProductList.js
import ProductCard from "./ProductCard";
import LoadingSpinner from "./LoadingSpinner.jsx";

const ProductList = ({ products, isLoading, visible }) => {
  return (
    <div className="w-full max-w-6xl flex flex-wrap justify-center gap-6">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        products.slice(0, visible).map((product, index) => (
          <ProductCard
            key={index}
            product_name={product.product_name || "Product"}
            categories={product.categories?.split(/[\s,;,-]+/)[0] || "Random Products"}
            image_url={product.image_url}
            ingredients={product.ingredients_text}
            Nutrition_Grade={product.nutrition_grades}
            sugar={product.nutriments?.sugars || "N/A"}
            id={product.id}
            nutriments={product.nutriments}
          />
        ))
      )}
    </div>
  );
};

export default ProductList;
