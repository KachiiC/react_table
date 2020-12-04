import React from 'react'
import './App.css';
// Components
import SiteTable from 'Components/SiteTable';
// Data
import TableData from 'Data/TableData';

const App = () => {

  const hskColumns = ["chinese_characters", "pinyin", "definition", "type", "hsk_level"]

  return (
    <div className="App">
      <SiteTable columns={hskColumns} data={TableData} />
    </div>
  );
  
}

export default App;
