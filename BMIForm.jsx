const BMIForm = ({
  height,
  weight,
  setHeight,
  setWeight,
  calculateBMI,
  error,
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-80 border border-gray-100">
      <h2 className="text-xl font-semibold mb-4 text-center">
        BMI Calculator
      </h2>

      <input
        type="number"
        placeholder="Enter height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        className="w-full p-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="number"
        placeholder="Enter weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="w-full p-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        onClick={calculateBMI}
        className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 active:scale-95 transition"
      >
        Calculate BMI
      </button>

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
      )}
    </div>
  );
};

export default BMIForm;