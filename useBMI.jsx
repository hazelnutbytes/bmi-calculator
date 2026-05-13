import { useState } from "react";

const useBMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const calculateBMI = () => {
    setError("");

    // Empty check
    if (!height || !weight) {
      setError("Please enter both height and weight.");
      setBmi(null);
      setCategory("");
      return;
    }

    const h = Number(height);
    const w = Number(weight);

    // Range validation
    if (h < 50 || h > 250) {
      setError("Height should be between 50 cm and 250 cm.");
      setBmi(null);
      setCategory("");
      return;
    }

    if (w < 20 || w > 300) {
      setError("Weight should be between 20 kg and 300 kg.");
      setBmi(null);
      setCategory("");
      return;
    }

    // BMI calculation
    const heightInMeters = h / 100;
    const result = (w / (heightInMeters * heightInMeters)).toFixed(2);

    setBmi(result);

    // Category logic
    if (result < 18.5) setCategory("Underweight");
    else if (result < 24.9) setCategory("Normal");
    else if (result < 29.9) setCategory("Overweight");
    else setCategory("Obese");
  };

  return {
    height,
    weight,
    setHeight,
    setWeight,
    bmi,
    category,
    error,
    calculateBMI,
  };
};

export default useBMI;