import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../features/authSlice";

const Header = () => {
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state?.cart || []);
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth)
    const logoutHandler = () => {
        dispatch(logout());
        navigate("/login");
    }
    return <header className={`box mb-2`}>
        <div className="row">
            <div className="col-3">
                <Link to={`/products`}>G1 Shop</Link>
            </div>
            <div className="col-5">
                <div class="input-group">
                    <input type="text"
                           className={`form-control`} placeholder={`Search product...`}
                           aria-label="Recipient's username"
                           aria-describedby="basic-addon2"/>
                </div>
            </div>

            <div className="col-4 text-end">
                <span className={`p-2`}><Link to="/cart">My Cart({cartItem.length})</Link></span>
                {!auth.isAuthenticated && <span className={`p-2`}>
                    <Link to="/login">Login</Link> / <Link to="/register">Register</Link>
                </span>}
                {auth.isAuthenticated && <span className={`p-2`}>
                    {auth?.user?.roles[0]?.role === "BUYER" && <Link to="/buyer/orders">My Orders</Link>}
                    {auth?.user?.roles[0]?.role !== "BUYER" && <Link to="/admin/dashboard">My Account</Link>}
                    <button className={`btn btn-outline-primary mx-4`} onClick={logoutHandler}>Logout</button>
                </span>}
            </div>
        </div>
    </header>
}

export default Header;