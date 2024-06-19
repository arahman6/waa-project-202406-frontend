import MainLayout from "../layout/MainLayout";
import {Route, Routes} from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Blank from "../pages/Blank";
import PrivateRoute from "./privateRoute";

const AdminRoutes = () => {

    return <Routes>
        {/*<Route element={<PrivateRoutes/>}>*/}
            <Route path="/admin" element={<MainLayout/>}>
                <Route path="dashboard" index element={
                    <PrivateRoute roles={['ADMIN', 'BUYER', 'SELLER']}>
                        <Dashboard />
                    </PrivateRoute>
                }/>
                <Route path="orders" element={
                    <PrivateRoute roles={['BUYER', 'SELLER']}>
                        <Blank />
                    </PrivateRoute>
                }/>
                <Route path="products" element={
                    <PrivateRoute roles={['BUYER', 'SELLER']}>
                        <Blank />
                    </PrivateRoute>
                }/>
                <Route path="customers" element={
                    <PrivateRoute roles={['ADMIN']}>
                        <Blank />
                    </PrivateRoute>
                }/>
                <Route path="settings" element={
                    <PrivateRoute roles={['ADMIN']}>
                        <Blank />
                    </PrivateRoute>
                }/>
            </Route>
        {/*</Route>*/}
    </Routes>

}

export default AdminRoutes;