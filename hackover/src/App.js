
import './App.css';
import Card from './components/Card';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
// import Table from './components/Table';
import AdminNavbar from './components/AdminNavbar';

import Table from './components/EventTable';
import {React,useState} from 'react';
import Login from './components/Login';
import { UserData } from "./Data";
import BarChart from './components/BarChart';

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Revenue",
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
{/* <Card/>
<div className="container">
<div style={{ width: 600 }}>
        <BarChart chartData={userData} />
      </div>
    
</div>
<Table/> */}
<BrowserRouter>
<Routes>
  <Route path='/' element={<div><Card/></div>}/>
  <Route path='/harsh' element={<div><Table/></div>}/>
  <Route path='/pooja' element={<div><h1>Shreeshalilya</h1></div>}/>
</Routes>
</BrowserRouter>

   </>
  );
}

export default App;
