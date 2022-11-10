import useAuth from "hook/useAuth";
import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute: FC = () => {

    const { isLoggedIn } = useAuth();

    // const location: Location = useLocation();

    return isLoggedIn? <Outlet />: <Navigate replace to="/login" />
}

export default PrivateRoute;