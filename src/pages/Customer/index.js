import { Outlet } from 'react-router';
import DashboardLayout from 'components/layout/dashboard';




const Customers = () => {
  return (
    <div>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </div>
  );
};
export default Customers;