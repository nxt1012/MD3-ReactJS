import React, { useState } from "react";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (event) => {
    setCelsius(event.target.value);
    setFahrenheit(event.target.value * 1.8 + 32);
  };

  const handleFahrenheitChange = (event) => {
    setFahrenheit(event.target.value);
    setCelsius((event.target.value - 32)/1.8);
  }
  return <div>
    <div>
    <label>Celsius:</label>
    <input type="text" value={celsius} onChange={handleCelsiusChange} />
    </div>
    <div>
    <label>Fahrenheit:</label>
    <input type="text" value={fahrenheit} onChange={handleFahrenheitChange}/>
    </div>
  </div>;
}
