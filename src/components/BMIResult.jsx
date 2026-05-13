const BMIResult = ({ bmi, category, height, weight }) => {
  if (!bmi) return null;

  let color = "text-green-500";
  if (category === "Underweight") color = "text-blue-500";
  else if (category === "Normal") color = "text-green-500";
  else if (category === "Overweight") color = "text-orange-500";
  else if (category === "Obese") color = "text-red-500";

  const heightInMeters = Number(height) / 100;
  const w = Number(weight);
  const idealMin = (18.5 * heightInMeters * heightInMeters).toFixed(1);
  const idealMax = (24.9 * heightInMeters * heightInMeters).toFixed(1);
  const diff = (w - ((18.5 + 24.9) / 2 * heightInMeters * heightInMeters)).toFixed(1);
  const isNormal = category === "Normal";

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-80 border border-gray-100 text-center transition-all duration-300 hover:scale-105">
      <h2 className="text-xl font-semibold mb-2">Your Result</h2>

      <p className={`text-3xl font-bold ${color}`}>{bmi}</p>

      <p className={`mt-2 font-medium ${color}`}>{category}</p>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-500">Ideal weight for your height</p>
        <p className="text-lg font-semibold text-gray-700">{idealMin} – {idealMax} kg</p>

        {!isNormal && (
          <p className="mt-2 text-sm text-gray-500">
            {diff > 0
              ? `You are ${diff} kg above the ideal range`
              : `You are ${Math.abs(diff)} kg below the ideal range`}
          </p>
        )}
      </div>
    </div>
  );
};

export default BMIResult;
