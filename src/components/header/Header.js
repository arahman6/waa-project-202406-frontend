import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../features/auth/authSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isAuthenticated} = useSelector(state => state.auth)
    const logoutHandler = () => {
        dispatch(logout());
        navigate("/login");
    }
    return <header className={`box mb-2`}>
        <div className="row">
            <div className="col-3">
                <Link to="">Logo</Link>
            </div>
            <div className="col-6">
                <div class="input-group">
                    <input type="text"
                           className={`form-control`} placeholder={`Search product...`}
                           aria-label="Recipient's username"
                           aria-describedby="basic-addon2"/>
                </div>
            </div>

            <div className="col-3 text-end">
                {!isAuthenticated && <div>
                    <Link to="/login">Login</Link> / <Link to="/register">Register</Link>
                </div>}
                {isAuthenticated && <div>
                    <Link to="/admin/dashboard">My Account</Link>
                    <button className={`btn btn-outline-primary mx-4`} onClick={logoutHandler}>Logout</button>
                </div>}
            </div>
        </div>
    </header>
}

export default Header;