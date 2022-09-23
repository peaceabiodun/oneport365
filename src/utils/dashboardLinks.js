import { ReactComponent as DashIcon } from 'assets/icons/dashboard.svg';
import { ReactComponent as AdminIcon } from 'assets/icons/admin.svg';
import { ReactComponent as CustIcon } from 'assets/icons/custom.svg';
import { ReactComponent as ShipIcon } from 'assets/icons/shipment.svg';
import { ReactComponent as TrackIcon } from 'assets/icons/tracking.svg';
import { ReactComponent as DocIcon } from 'assets/icons/doc.svg';
import { ReactComponent as QuoteIcon } from 'assets/icons/quote.svg';
import { ReactComponent as InvoiceIcon } from 'assets/icons/invoice.svg';


export const dashboardLinks = [
    {
        link: "/dashboard",
        icon: <DashIcon />, 
        title: "Dashboard",
    }, 
    {
        link: "/admin",
        icon: <AdminIcon />, 
        title: "Admin",
    },
    {
        link: "/customers",
        icon: <CustIcon />, 
        title: "Customers",
    },
    {
        link: "/shipment",
        icon: <ShipIcon />, 
        title: "Shipment",
    },
    {
        link: "/track", 
        icon: <TrackIcon />,
        title: "Tracking",
    },
    {
        link: "/document", 
        icon: <DashIcon />,
        title: "Documents",
    },
    {
        link: "/rates",
        icon: <DocIcon />, 
        title: "Rates",
    },
    {
        link: "/quotes", 
        icon: <QuoteIcon />,
        title: "Quotes",
    },
    {
        link: "/invoice",
        icon: <InvoiceIcon />, 
        title: "Invoices",
    },
]
    