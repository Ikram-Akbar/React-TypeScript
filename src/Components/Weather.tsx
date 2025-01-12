import { useState } from "react";

enum TempUnit {
  Celsius = "C",
  Fahrenheit = "F",
}

function Weather() {
  const [unit, setUnit] = useState<TempUnit>(TempUnit.Celsius);

  const temperatureInCelsius: number = 25;
  const temperatureInFahrenheit: number = (temperatureInCelsius * 9) / 5 + 32;

  const toggleUnit = (): void => {
    setUnit((preUnit) =>
      preUnit === TempUnit.Celsius ? TempUnit.Fahrenheit : TempUnit.Celsius
    );
  };

  const getTemperature = (): number => {
    return unit === TempUnit.Celsius
      ? temperatureInCelsius
      : temperatureInFahrenheit;
  };

  return (
    <div>
      <h1>Weather</h1>
      <p>City: New York</p>
      <p>
        Temperature: {getTemperature()}°{unit}
      </p>
      <button onClick={toggleUnit}>
        Switch to {unit === TempUnit.Celsius ? "Fahrenheit" : "Celsius"}
      </button>
    </div>
  );
}

export default Weather;
