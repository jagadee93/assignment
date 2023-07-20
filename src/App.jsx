import { useState } from 'react';
import './App.css';
import TableComponent from './components/Table';
import LineChartComponent from './components/Chart';
import data from "./data/dummyData.json"
const App = () => {
  const [showTable, setShowTable] = useState(true);

  const toggleView = () => {
    setShowTable(!showTable);
  };

  return (
    <div className="container">
      <div className="header">
        <h3>Jagadeesh babu</h3>
        <p>Email: jagadeeshgongidi@gmail.com</p>
        <p> Contact: +91 6281190840</p>
      </div>
      <div className="switch-container" onClick={toggleView}>

        <span className={`switch ${showTable ? '' : 'active'}`}>
          <input type="checkbox" name="" id="switcher" />
          <label htmlFor="switcher"></label>
        </span>

      </div>
      {showTable ? <TableComponent data={data} /> : <LineChartComponent data={data} />}
    </div>
  );
};

export default App;
