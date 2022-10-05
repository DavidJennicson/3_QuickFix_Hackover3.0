
import './App.css';
import Card from './components/Card';

// import Table from './components/Table';
import AdminNavbar from './components/AdminNavbar';
import RevGraph from './components/RevGraph';
import Table from './components/Table';
import {React,useState} from 'react';
import Login from './components/Login';
import { UserData } from "./Data";
import BarChart from './components/BarChart';

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.revGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
   <>
<AdminNavbar/>
<Card/>
<div className="container-sm">
<div style={{ width: 500 }}>
        <BarChart chartData={userData} />
      </div>
    
</div>
<Table/>

   </>
  );
}

export default App;
