import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import FiltersSection from "../components/FiltersSection";
import ProductList from "../components/ProductList";
import LoadMoreButton from "../components/LoadMoreButton";
import NoProductsMessage from "../components/NoProductMessage";
import useDebounce from "../Hooks/useDebounce";

function Homepage() {
   // Access Dark Mode status
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [visible, setVisible] = useState(8);
  const [sugarRange, setSugarRange] = useState([0, 10]);
  const [sortCriteria, setSortCriteria] = useState("");
  const debounceSearchQuery = useDebounce(searchQuery, 2000);

  

  const { data: allProducts, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://world.openfoodfacts.org/products.json").then((res) =>
        res.json()
      ),
  });

  const isNumericSearch = /^\d+$/.test(searchQuery);
  const { data: searchedProducts, isLoading: isSearching } = useQuery({
    queryKey: ["search", debounceSearchQuery],
    queryFn: isNumericSearch
      ? () =>
          fetch(
            `https://world.openfoodfacts.org/api/v0/product/${debounceSearchQuery}.json`
          ).then((res) => res.json())
      : () =>
          fetch(
            `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${debounceSearchQuery}&json=true`
          ).then((res) => res.json()),
    enabled: debounceSearchQuery.length > 0,
  });

  const productsToDisplay = (
    searchQuery && !isNumericSearch
      ? searchedProducts?.products || []
      : isNumericSearch
      ? searchedProducts?.product
        ? [searchedProducts.product]
        : []
      : allProducts?.products || []
  ).filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.some(
        (category) =>
          product?.categories?.split(/[\s,;,-]+/)[0]?.toLowerCase() ===
          category.toLowerCase()
      );

    const sugar = parseFloat(product?.nutriments?.sugars || 0);
    return categoryMatch && sugar >= sugarRange[0] && sugar <= sugarRange[1];
  });

  const sortedProducts = [...productsToDisplay].sort((a, b) => {
    const nameA = a.product_name?.toLowerCase() || "";
    const nameB = b.product_name?.toLowerCase() || "";

    switch (sortCriteria) {
      case "name-asc":
        return nameA.localeCompare(b.product_name);
      case "name-desc":
        return nameB.localeCompare(a.product_name);
      default:
        return 0;
    }
  });

  const loadMore = () => setVisible((prev) => prev + 8);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex flex-col items-center">
      

      <FiltersSection
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
        selectedCategories={selectedCategories}
        onFilterChange={setSelectedCategories}
        sortCriteria={sortCriteria}
        onSortChange={setSortCriteria}
        sugarRange={sugarRange}
        onSugarRangeChange={setSugarRange}
      />

      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mt-10 mb-6">
        Product List
      </h1>

      <ProductList
        products={sortedProducts}
        isLoading={isLoading || isSearching}
        visible={visible}
      />

      {visible < sortedProducts.length ? (
        <LoadMoreButton onClick={loadMore} />
      ) : (
        <NoProductsMessage />
      )}
    </div>
  );
}

export default Homepage;
