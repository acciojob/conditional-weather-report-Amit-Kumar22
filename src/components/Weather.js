import React from 'react';
//import { darken, lighten } from 'polished';

const Weather = ({ temperature, conditions }) => {
  // Define the temperature threshold
  const threshold = 20;

  // Determine the color based on the temperature
  const textColor = temperature > threshold ? 'red' : 'blue';

  // Style object for the text color
  const textStyle = {
    color: textColor,
  };

  // Style object for the background color
//   const containerStyle = {
//     // backgroundColor: temperature > threshold ? lighten(0.2, 'red') : lighten(0.2, 'blue'),
//     backgroundColor: "{textStyle}",
//     padding: '20px',
//     borderRadius: '8px',
//   };

  return (
    <div>
      <h2 style={textStyle}>Current Temperature: {temperature}°C</h2>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default Weather;
