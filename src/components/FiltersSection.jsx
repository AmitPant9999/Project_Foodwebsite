// components/FiltersSection.js
import SearchBar from "./SearchBar";
import Filtering from "./Filtering";
import SortingProducts from "./SortingProducts";
import RangeFilter from "./RangeFilter";

// FiltersSection component to group all filter-related UI components
const FiltersSection = ({
  searchQuery,
  onSearch,
  selectedCategories,
  onFilterChange,
  sortCriteria,
  onSortChange,
  sugarRange,
  onSugarRangeChange,
}) => (
  <div className="flex flex-col items-center space-y-4"> 
    <SearchBar onSearch={onSearch} searchQuery={searchQuery} /> 
    <Filtering
      categories={["Beverages", "Dairies", "Snacks"]} // Category filter options
      selectedCategories={selectedCategories} 
      onFilterChange={onFilterChange}
    />
    <SortingProducts onSortChange={onSortChange} /> {/* Dropdown to sort products */}
    <RangeFilter sugarRange={sugarRange} onChange={onSugarRangeChange} /> {/* Sugar content filter */}
  </div>
);

export default FiltersSection;
