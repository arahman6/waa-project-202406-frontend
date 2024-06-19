import {Navigate, Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Register from "../pages/Register";

const PageRoutes = () => {

    return <Routes>
        <Route path={"/"} element={<Navigate to={`/products`}/>}/>
        <Route path={"/products"} element={<Products/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/register"} element={<Register/>}/>
    </Routes>

}

export default PageRoutes;