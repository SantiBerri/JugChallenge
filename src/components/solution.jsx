import React from 'react';

const SolutionDisplay = ({ solution, noSolution }) => {
  if (noSolution) {
    return <div>No Solution Possible</div>;
  }

  return (
    <div className="solution-display">
      <h3>Steps to Solve:</h3>
      <ul>
        {solution.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
};

export default SolutionDisplay;
