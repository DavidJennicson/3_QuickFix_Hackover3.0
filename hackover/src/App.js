
import './App.css';
import Card from './components/Card';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
// import Table from './components/Table';
import AdminNavbar from './components/AdminNavbar';
import Vertable from './components/Vertable'
import Table from './components/EventTable';
import {React,useState} from 'react';
import Login from './components/Login';
import { UserData } from "./Data";
import BarChart from './components/BarChart';
import MainNav from './components/MainNav';
import BottomNav from './components/BottomNav';
import Organizers from './components/organizer/Organizers';
import Notallowed from './components/Notallowed';
import OrgNavbar from './components/organizer/OrgNavbar';
import Orgcon from './components/organizer/Orgcon';

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
<Orgcon/>
<div className="mt-5 pt-5"><h1>My Events</h1></div>
{/* <Organizers/> */}

{/* <Card/>
<div className="container">
<div style={{ width: 600 }}>
        <BarChart chartData={userData} />
      </div>
    
</div>
<Table/> */}

{/* main admin components */}
{/* <BrowserRouter>
<Routes>
  <Route path='/' element={<div><Card/></div>}/>
  <Route path='/harsh' element={<div><Table/></div>}/>
  <Route path='/pooja' element={<div><Vertable/></div>}/>
</Routes>
</BrowserRouter> */}

   </>
  );
}

export default App;
