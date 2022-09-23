import DashboardLayout from "components/layout/dashboard";
import { string, bool, node } from "prop-types";
import { Navigate } from "react-router-dom";


export const AuthRoute = ({ path, notProtected, children, ...rest }) => {
  const isAuthenticated  = true;
  if (notProtected && isAuthenticated) {
    return (
      <DashboardLayout>
        <Navigate replace to="/customers" />;
      </DashboardLayout>
    );
  }
 

  if (!isAuthenticated && !notProtected) {
    return (
      <Navigate
        replace
        to={{
          pathname: "/",
          state: {
            prevLocation: path,
            error: "You need to login first!",
          },
        }}
        exact
      />
    );
  }

  return <>{children}</>;
};

AuthRoute.propTypes = {
  notProtected: bool,
  path: string.isRequired,
  children: node,
};

AuthRoute.defaultProps = {
  notProtected: false,
};