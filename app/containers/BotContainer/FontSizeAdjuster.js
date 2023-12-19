import React from 'react';

const FontSizeAdjuster = ({ onIncrease, onDecrease }) => {
  const buttonStyle = {
    borderRadius: '50%', // Circular shape
    width: '40px', // Width of the button
    height: '40px', // Height of the button
    margin: '5px', // Margin around the button
    fontSize: '18px', // Font size of '+' and '-'
    fontWeight: 'bold', // Bold font weight
    lineHeight: '40px', // Vertically center the text
    textAlign: 'center', // Horizontally center the text
    background: 'white', // White background
    border: 'none', // No border
    cursor: 'pointer', // Cursor pointer on hover
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)' // Shadow for button
  };

  const containerStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 5000,
    background: 'white', // White background for the container
    borderRadius: '10%', // Circular shape for the container
    padding: '10px', // Padding inside the container
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' // Shadow for container
  };

  return (
    <div style={containerStyle}>
      <button onClick={onIncrease} style={buttonStyle}>A+</button>
      <button onClick={onDecrease} style={buttonStyle}>A-</button>
    </div>
  );
};

export default FontSizeAdjuster;
