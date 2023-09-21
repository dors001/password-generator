import React from "react";

interface Props {
  value: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RangeBar = ({ value, handleChange }: Props) => {
  const min = 8;
  const max = 20;

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <>
      <div className="letter-length-container">
        <div className="letter-length-content d-flex justify-content-between align-items-center">
          <span className="letter-length-title">Character Length</span>
          <div className="range-value">{value}</div>
        </div>
        <div className="range-container mt-4">
          <input
            type="range"
            className="range-bar"
            min="8"
            max="20"
            value={value}
            onChange={handleChange}
            style={
              { "--slider-percentage": `${percentage}%` } as React.CSSProperties
            }
          />
        </div>
      </div>
    </>
  );
};

export default RangeBar;
