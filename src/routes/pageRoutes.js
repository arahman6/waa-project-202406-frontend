import {Navigate, Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Products from "../pages/Products/Products";
import Register from "../pages/Register";
import ProductDetails from "../pages/Products/ProductDetails";
import Popup from "../components/Popup";
import MyCart from "../pages/MyCart/MyCart";

const PageRoutes = () => {

    return <Routes>
        <Route path={"/"} element={<Navigate to={`/products`}/>}/>
        <Route path={"/products"} element={<Products/>}/>
        <Route path={`/product/:id`} element={<ProductDetails />}/>
        <Route path={`/cart`} element={<MyCart />}/>
        <Route path={`/cart`} element={<ProductDetails />}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/register"} element={<Register/>}/>
    </Routes>

}

export default PageRoutes;