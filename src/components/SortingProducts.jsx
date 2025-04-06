import { useState } from "react";

function SortingProducts({ onSortChange }) {
    const [sortOrder, setSortOrder] = useState("");

    const handleSortChange = (e) => {
        const selectedOption = e.target.value;
        setSortOrder(selectedOption);
        onSortChange(selectedOption); // Trigger the sorting in the parent component
    };

    return (
        <div className="mb-4  text-center">
            <select
                value={sortOrder}
                onChange={handleSortChange}
                className="px-2 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 md:w-96 w-full "
            >
                <option value="">Sort By</option>
                <option value="name-asc">Sort by Name (A-Z)</option>
                <option value="name-desc">Sort by Name (Z-A)</option>
                <option value="nutrition-asc">Sort by Nutrition (A-Z)</option>
                <option value="nutrition-desc">Sort by Nutrition (Z-A)</option>
                <option value="calories-asc">Sort by Calories (Low to High)</option>
                <option value="calories-desc">Sort by Calories (High to Low)</option>
            </select>
        </div>
    );
}

export default SortingProducts;
