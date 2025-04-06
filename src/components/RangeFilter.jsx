
import { Range } from "react-range";

// RangeFilter component to filter products based on sugar content
function RangeFilter({ sugarRange, onChange }) {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-sm mb-4"> {/* Container with padding, background, and shadow */}
      <h3 className="text-lg font-semibold mb-2">Filter by Sugar Content (g)</h3> {/* Filter title */}

      {/* Range slider for selecting sugar range */}
      <Range
        values={sugarRange} // Current range values [min, max]
        step={1} // Increments of 1 gram
        min={0} 
        max={50} 
        onChange={onChange} 
        renderTrack={({ props, children }) => (
          <div {...props} className="track bg-gray-300 h-2 rounded-md">{children}</div> // Track styling
        )}
        renderThumb={({ props }) => (
          <div {...props} className="thumb bg-blue-500 w-6 h-6 rounded-full shadow-md" /> // Thumb styling
        )}
      />

      {/* Display selected sugar range */}
      <div className="flex justify-between mt-2">
        <span>{sugarRange[0]}g</span> {/* Minimum sugar value */}
        <span>{sugarRange[1]}g</span> {/* Maximum sugar value */}
      </div>
    </div>
  );
}

export default RangeFilter;
