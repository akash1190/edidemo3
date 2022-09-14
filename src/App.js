
import './App.css';
import Details from './Details';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import CreateAccount from './CreateAccount';
import { Route,BrowserRouter as Router,Routes, useLocation } from 'react-router-dom';
import Form from './form/Form';
import Main from './Main';
import ResetPassword from './ResetPassword';
import Trackpo from './accordian/Trackpo';
import Generalsearch from './accordian/Generalsearch';
import Header from './Header';

import All_employees from './All_employees';
import Offboard from './Offboard';
import Onboard from './Onboard';
import Success from './Success';
import RegistrationNewUser from './RegistrationNewUser';
import Supervisor from './Supervisor';
import SearchPage from './SearchPage';
import Invoice_810 from './accordian/Invoice_810';
import Po_850 from './accordian/Po_850';
import Acknowledgement_997 from './accordian/Acknowledgement_997';
import Shipment_856 from './accordian/Shipment_856';

import AcknowledgementDetail from './accordian/AcknowledgementDetail';
import InvoiceDetails810 from './accordian/InvoiceDetails810';
import PoDetails850 from './accordian/PoDetails850';

import Admin from './admin/Admin';
import ChangeRole from './admin/ChangeRole';

import Order_Status_Report_870 from './accordian/Order_Status_Report_870';

import Po_change_860 from './accordian/Po_change_860';
import Purchase_Order_Change_Acknowledgement_865 from './accordian/Purchase_Order_Change_Acknowledgement_865';

import Purchase_Order_Acknowledgement_855 from './accordian/Purchase_Order_Acknowledgement_855';
import Report_850_chart from './Report_850_chart';
import Report_856_chart from './Report_856_chart';
import Report_810_chart from './Report_810_chart';
import Table from './accordian/Table';



const App=()=> {
  const location = useLocation();
  
  //console.log(location);
  return (
    <div className="wrapper">
       {
        (location.pathname==='/login' || location.pathname==='/forgotPassword'
        || location.pathname==='/resetpassword' || location.pathname==='/createAccount' || location.pathname==='/supervisor' || location.pathname==='/RegistrationNewUser' || location.pathname==='/success') ? null:<Header/>
        
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
        <Route exact path="/registrationNewUser" element={<RegistrationNewUser/>} />
        <Route exact path="/supervisor"  element={<Supervisor/>} />
        <Route exact path="/search" element={<SearchPage/>} />
        <Route exact path="/invoice_810" element={<Invoice_810/>} />
        <Route exact path="/invoiceDetail" element={<InvoiceDetails810/>} />
        <Route exact path="/po_850" element={<Po_850/>}/>
        <Route exact path="/poDetails850" element={<PoDetails850/>}/>
        <Route exact path="/acknowledgement_997" element={<Acknowledgement_997/>}/>
        <Route exact path="/acknowledgementdetail" element={<AcknowledgementDetail/>}/>
        <Route exact path="/shipment_856" element={<Shipment_856/>}/>
        <Route exact path="/changeRole" element={<ChangeRole/>}/>
        <Route exact path="/Order_Status_Report_870" element={<Order_Status_Report_870/>} />
    
        <Route exact path="/Po_change_860" element={<Po_change_860/>} />
        <Route exact path="/Purchase_Order_Acknowledgement_855" element={<Purchase_Order_Acknowledgement_855/>} />
        <Route exact path="/Po_change_860" element={<Po_change_860/>} />
        <Route exact path="/Purchase_Order_Change_Acknowledgement_865" element={<Purchase_Order_Change_Acknowledgement_865/>} />
        
        <Route exact path="/Report_850_chart" element={<Report_850_chart/>} />
        <Route exact path="/Report_856_chart" element={<Report_856_chart/>} />
        <Route exact path="/Report_810_chart" element={<Report_810_chart/>} />
        <Route exact path="/Table" element={<Table/>} />
        
      
        <Route element={Error} />
        </Routes> 
      {/* </Router>  */}
      
    </div> 
  );
}

export default App;
