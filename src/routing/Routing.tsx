import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import HomePage from "component/page/HomePage";
import LoginPage from "component/page/LoginPage";
import SignupPage from "component/page/SignupPage";


const Routing: FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path='/' element={<HomePage />} />
                </Route>
                <Route path='/sign-up' element={<SignupPage />} />
                <Route path='/sign-in' element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;