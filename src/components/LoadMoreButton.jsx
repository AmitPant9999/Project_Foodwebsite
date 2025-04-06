// components/LoadMoreButton.js
const LoadMoreButton = ({ onClick, disabled }) => (
    <div className="flex justify-center mt-6">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`px-6 py-3 rounded-lg ${
          disabled ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
        } text-white text-lg font-medium transition transform hover:scale-105`}
      >
        Load More
      </button>
    </div>
  );
  
  export default LoadMoreButton;
  