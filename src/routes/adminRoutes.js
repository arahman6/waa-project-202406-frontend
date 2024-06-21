import MainLayout from "../layout/MainLayout";
import {Route, Routes} from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Blank from "../pages/Blank";
import PrivateRoute from "./privateRoute";
import Products from "../pages/admin/Products";
import AddProduct from "../pages/admin/AddProduct";
import Users from "../pages/admin/Users";
import Reviews from "../pages/admin/Reviews";
import Orders from "../pages/admin/Orders";

const AdminRoutes = () => {

    return <Routes>
        {/*<Route element={<PrivateRoutes/>}>*/}
        <Route path="/admin" element={<MainLayout/>}>
            <Route path="dashboard" index element={
                <PrivateRoute roles={['ADMIN', 'SELLER']}>
                    <Dashboard/>
                </PrivateRoute>
            }/>
            <Route path="orders" element={
                <PrivateRoute roles={['BUYER', 'SELLER']}>
                    <Orders/>
                </PrivateRoute>
            }/>
            <Route path="products" element={
                <PrivateRoute roles={['SELLER', 'ADMIN']}>
                    <Products/>
                </PrivateRoute>
            }/>
            <Route path="add-product" element={
                <PrivateRoute roles={['SELLER']}>
                    <AddProduct/>
                </PrivateRoute>
            }/>
            <Route path="customers" element={
                <PrivateRoute roles={['ADMIN']}>
                    <Blank/>
                </PrivateRoute>
            }/>
            <Route path="settings" element={
                <PrivateRoute roles={['ADMIN']}>
                    <Blank/>
                </PrivateRoute>
            }/>
            <Route path="users" element={
                <PrivateRoute roles={['ADMIN', 'SELLER']}>
                    <Users/>
                </PrivateRoute>
            }/>
            <Route path="reviews" element={
                <PrivateRoute roles={['ADMIN']}>
                    <Reviews/>
                </PrivateRoute>
            }/>
        </Route>
        <Route path="/buyer" element={<MainLayout/>}>
            <Route path="orders" index element={
                <PrivateRoute roles={['BUYER']}>
                    <Orders/>
                </PrivateRoute>
            }/>
        </Route>
        {/*</Route>*/}
    </Routes>

}

export default AdminRoutes;