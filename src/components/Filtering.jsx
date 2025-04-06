import Select from "react-select";

function Filtering({ categories, selectedCategories, onFilterChange }) {
  // Convert categories to select options with value and label
  const options = categories.map((category) => ({ value: category, label: category }));

  // Handle selection changes and pass selected values to the parent component
  const handleChange = (selectedOptions) => {
    const selectedValues = selectedOptions ? selectedOptions.map((opt) => opt.value) : [];
    onFilterChange(selectedValues);
  };

  return (
    <div className="mb-4 flex justify-center"> {/* Center the dropdown horizontally */}
      <Select
        isMulti // Allow multiple category selections
        options={options} 
        value={options.filter((opt) => selectedCategories.includes(opt.value))} // Pre-select categories
        onChange={handleChange} 
        className="md:w-96 w-full" 
        classNamePrefix="custom-select" 
        placeholder="Select Categories..." 
      />
    </div>
  );
}

export default Filtering;
