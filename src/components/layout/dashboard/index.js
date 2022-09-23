import React, { useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";


import { ReactComponent as DashIcon } from 'assets/icons/dashboard.svg';
import { ReactComponent as AdminIcon } from 'assets/icons/admin.svg';
import { ReactComponent as CustIcon } from 'assets/icons/custom.svg';
import { ReactComponent as ShipIcon } from 'assets/icons/shipment.svg';
import { ReactComponent as TrackIcon } from 'assets/icons/tracking.svg';
import { ReactComponent as DocIcon } from 'assets/icons/doc.svg';
import { ReactComponent as QuoteIcon } from 'assets/icons/quote.svg';
import { ReactComponent as InvoiceIcon } from 'assets/icons/invoice.svg';
import { ReactComponent as Oneport } from 'assets/icons/oneport.svg';
import { FaBars } from 'react-icons/fa';
import { dashboardLinks } from "../../../utils/dashboardLinks";


const DashboardLayout = ({ children }) => {
  const location = useLocation();
  const [sidenavOpen, setSidenavOpen] = useState(false);
  

    

  
  return (
    <div className="w-screen min-h-screen h-screen flex flex-grow flex-col relative">
      <header className="flex flex-row justify-between items-center w-full py-4 fixed left-0 right-0 top-0 border-b-1/2 border-grey-border z-[99] h-[70px] bg-white">
        <div className="relative flex flex-row justify-between items-center mx-auto w-full px-10 ">
          <div className="h-8 w-[110px] !my-0">
            <Oneport className="w-full h-full z-90" />
          </div>

          <div className="flex flex-row justify-start items-center space-x-[20px]">

            <FaBars
              onClick={() => {
                setSidenavOpen(!sidenavOpen);
              }}
              className={sidenavOpen ? "ham_crossed" : ""}
            />
          </div>
        </div>
      </header>
      <section className="w-full h-full flex flex-row flex-grow max-w-9xl mx-auto relative mt-[70px] overflow-hidden">
        <aside
          className={`dashboard-sidenav w-52 pt-[20px] pb-28 h-full flex flex-col flex-grow absolute left-0 top-0 bottom-0 z-50 bg-white
         overflow-y-scroll border-r-1/2 border-grey-border
         transition-transform duration-150 ease-in-out 
          ${
            sidenavOpen ? "translate-x-[0]" : "-translate-x-60"
          } lg:translate-x-0
         `}
        >
          <div className="flex flex-col justify-between items-start w-full h-full px-10">
            <div className="flex flex-col justify-start items-start pb-10 w-full space-y-8 cursor-pointer transition-all duration-150 ease-in-out">
              
              {dashboardLinks.map(({ title, icon, link }) => (
                <Link to={link} key={title}>
                  <div
                    className={`flex justify-center items-center hover:text-blue text-black text-sm space-x-2 ${
                      location.pathname.includes(link) && "!text-blue-alt"
                    }`}
                  >
                    {icon}
                    <span className="text-current">{title}</span>
                  </div>
                </Link>
              ))}
            </div>

            
          </div>
        </aside>

        <main className="dashboard-content bg-grey-whitesmoke w-full lg:ml-52 pb-14 flex flex-col flex-grow overflow-y-auto">
          {children}
        </main>
      </section>
      <footer >
      </footer>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.any,
};

export default (DashboardLayout);


