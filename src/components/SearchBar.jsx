function SearchBar({ onSearch, searchQuery }) {
    const handleChange = (e) => {
      onSearch(e.target.value);
    };
  
    return (
      <div className="mb-4 flex justify-center">
        <div className="relative md:w-96 text-xs">
          <input
            value={searchQuery}
            onChange={handleChange}
            placeholder="Enter name or barcode "
            className="px-4 py-2 border rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a1 1 0 01-1.414 1.414l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  
  export default SearchBar;
  