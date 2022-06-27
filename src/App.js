import logo from './logo.svg';
import './App.css';
import Details from './Details';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import CreateAccount from './CreateAccount';
import { Route,BrowserRouter as Router,Routes, useLocation } from 'react-router-dom';
import Form from './form/Form';
import Main from './Main';
import Accordian from './accordian/Accordian';
import Table from './accordian/Table';
import ResetPassword from './ResetPassword';
import NestedTable from './nestedTable/NestedTable';
import ReactNestTable from './nestedTable/ReactNestTable';
import Trackpo from './accordian/Trackpo';
import Generalsearch from './accordian/Generalsearch';
import Header from './Header';
import Admin from './Admin';
import All_employees from './All_employees';
import Offboard from './Offboard';
import Onboard from './Onboard';
import Success from './Success';




const App=()=> {
  const location = useLocation();
  
  //console.log(location);
  return (
    <div className="wrapper">
       {
        (location.pathname==='/login' || location.pathname==='/forgotPassword'
        || location.pathname==='/resetpassword' || location.pathname==='/createAccount') ? null:<Header/>
        
       }
       
        <Routes>
        {/* <Route exact path='/' element={<NestedTable/>}/> */}
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/form" element={<Form/>} />
        <Route exact path="/details" element={<Details/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/forgotPassword" element={<ForgotPassword/>} />
        <Route exact path="/createAccount" element={<CreateAccount/>} />
        <Route exact path="/resetpassword" element={<ResetPassword/>} />
        <Route exact path="/trackpo" element={<Trackpo/>} />
        <Route exact path="/generalsearch" element={<Generalsearch/>} />
        <Route exact path="/admin" element={<Admin/>} />
        <Route exact path="/All_employees" element={<All_employees/>} />
        <Route exact path="/Offboard" element={<Offboard/>} />
        <Route exact path="/Onboard" element={<Onboard/>} />
        <Route exact path="/success" element={<Success/>} />
        <Route element={Error} />
        </Routes> 
      {/* </Router>  */}
      
    </div> 
  );
}

export default App;
