import BMIForm from "./components/BMIForm";
import BMIResult from "./components/BMIResult";
import useBMI from "./components/useBMI";

function App() {
  const {
    height,
    weight,
    setHeight,
    setWeight,
    bmi,
    category,
    error,
    calculateBMI,
  } = useBMI();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-2">Calculate Your BMI</h1>

      <p className="text-gray-600 text-center max-w-md mb-6">
        BMI (Body Mass Index) is a simple way to estimate body fat using
        your height and weight. It helps indicate whether your weight is
        within a healthy range, though it doesn’t account for muscle mass
        or body composition.
      </p>

      <div className="flex gap-6 flex-wrap justify-center">
        <BMIForm
          height={height}
          weight={weight}
          setHeight={setHeight}
          setWeight={setWeight}
          calculateBMI={calculateBMI}
          error={error}
        />

        <BMIResult bmi={bmi} category={category} height={height} weight={weight} />
      </div>
    </div>
  );
}

export default App;