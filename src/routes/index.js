import Customers from "pages/Customer";
import CustomerShipments from "pages/Customer/features/customerShipments";
import CustomersList from "pages/Customer/features/customersList";
import {
    Routes,
    Route,
  } from "react-router-dom";
import { AuthRoute } from "./authRoute";



  const Router = () => {
    return (  
        <Routes>
            <Route path="/customers" element={<AuthRoute path="">
                <Customers />
                </AuthRoute>} >

                    
                    <Route path="" element={<CustomersList />} />

          <Route path=":id" element={<CustomerShipments/>} />
            </Route>
        </Routes>
    );
  }
   
  export default Router;