import React from 'react';
import Visualizer from './components/Visualizer';

interface ProjectResult {
  iteration: number;
  accuracy: number;
  precision: number;
  recall: number;
  f1_score: number;
}

interface ProjectData {
  name: string;
  description: string;
  lastUpdated: string;
  results: ProjectResult[];
}

const projectData: ProjectData = {
  name: "Wildfire Prediction Model",
  description: "Random Forest model to predict wildfire occurrence",
  lastUpdated: "2023-09-15T14:48:00",
  results: [
    { iteration: 1, accuracy: 0.75, precision: 0.72, recall: 0.78, f1_score: 0.75 },
    { iteration: 2, accuracy: 0.78, precision: 0.75, recall: 0.80, f1_score: 0.77 },
    { iteration: 3, accuracy: 0.82, precision: 0.79, recall: 0.83, f1_score: 0.81 },
    { iteration: 4, accuracy: 0.85, precision: 0.83, recall: 0.86, f1_score: 0.84 },
    { iteration: 5, accuracy: 0.87, precision: 0.86, recall: 0.88, f1_score: 0.87 },
  ]
};

function App() {
  return (
    <div className="App">
      <h1 className='text-3xl font-bold mb-4'>Project Visualizer</h1>
      <Visualizer data={projectData} />
    </div>
  );
}

export default App;