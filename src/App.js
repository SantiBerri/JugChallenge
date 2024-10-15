import React, { useState } from 'react';
import JugInput from './components/input';
import SolutionDisplay from './components/solution';
import './App.css'

function App() {
  const [solution, setSolution] = useState([]);
  const [noSolution, setNoSolution] = useState(false);

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const canMeasureWater = (x, y, z) => {
    if (x + y < z) return false;
    if (x === z || y === z || x + y === z) return true;
    return z % gcd(x, y) === 0;
  };

  const solveWaterJug = (x, y, z) => {
    let solutionSteps = [];
    setNoSolution(false);

    if (!canMeasureWater(x, y, z)) {
      setNoSolution(true);
      return;
    }


    let jugX = 0, jugY = 0;
    while (jugX !== z && jugY !== z) {
      if (jugX === 0) {
        solutionSteps.push(`Fill Jug X (now holds ${x} gallons)`);
        jugX = x;
      } else if (jugY === y) {
        solutionSteps.push(`Empty Jug Y (now holds 0 gallons)`);
        jugY = 0;
      } else {
        let transferAmount = Math.min(jugX, y - jugY);
        jugX -= transferAmount;
        jugY += transferAmount;
        solutionSteps.push(`Transfer ${transferAmount} gallons from Jug X to Jug Y (Jug X: ${jugX}, Jug Y: ${jugY})`);
      }

      if (jugX === z || jugY === z) {
        solutionSteps.push(`Solved! One of the jugs now holds exactly ${z} gallons.`);
        break;
      }
    }
    setSolution(solutionSteps);
  };

  return (
    <div className="App">
      <h1>Water Jug Challenge</h1>
      <JugInput onSolve={solveWaterJug} />
      <SolutionDisplay solution={solution} noSolution={noSolution} />
    </div>
  );
}

export default App;
