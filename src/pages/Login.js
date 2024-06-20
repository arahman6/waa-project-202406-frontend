import {useDispatch} from "react-redux";
import {loginSuccess} from "../features/authSlice";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "../configs/axios";
import {jwtDecode} from "jwt-decode";
import {toast} from "react-toastify";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons/faSpinner";

//import {faSpinner} from "@fortawesome/free-solid-svg-icons";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const [btnDisable, setBtnDisable] = useState(false);

    const [jwtResponse, setJwtResponse] = useState("");

    const [errors, setErrors] = useState({})

    const onChangeHandler = e => {
        setErrors({});
        setForm({...form, [e.target.name]: e.target.value})
    }

    const validate = form => {
        if (form.email === "") {
            setErrors({...errors, field: "email", message: "fields can not be empty"})
            return false;
        }

        if (form.password === "") {
            setErrors({...errors, field: "password", message: "fields can not be empty"})
            return false;
        }

        return true;
    }

    const loginHandler = () => {

        if (!validate(form)) {
            return false;
        }

        setBtnDisable(true);

        axios.post("/authenticate", form)
            .then(res => {
                setJwtResponse(res.data);
                dispatch(loginSuccess({
                    user: {},
                    token: res.data.accessToken
                }))
                const userPayload = jwtDecode(res.data.accessToken);
                return axios.get(`users/email/${userPayload.sub}`);
                //navigate("/admin/dashboard")
            })
            .then(res => {
                dispatch(loginSuccess({
                    user: res.data,
                    token: jwtResponse.accessToken
                }));

                setBtnDisable(false);

                toast.success("Successfully logged in!")

                if (res.data.roles[0].role === 'BUYER') {
                    navigate("/products");
                } else {
                    navigate("/admin/dashboard");
                }

            })
            .catch(err => {
                console.log(err);
                setBtnDisable(false);
                setErrors({...errors, message: "Wrong credential, try again!"})
            })
    }

    return <div className="container-fluid">
        <div className="form-container">
            <div className="login-form box">
                <div className="mb-3">
                    <label htmlFor="user_email" className="form-label">Email</label>
                    <input
                        onChange={onChangeHandler}
                        value={form.email}
                        type="email"
                        name={`email`}
                        className={`form-control ${errors?.field === "email" && " input_error"}`}
                        id="user_email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="user_password" className={`form-label`}>Password</label>
                    <input
                        onChange={onChangeHandler}
                        value={form.password}
                        name={`password`}
                        type="password"
                        className={`form-control ${errors?.field === "password" && " input_error"}`}
                        id="user_password"/>
                </div>
                <div>
                    {errors?.message && <p className={`error_text`}>{errors.message}</p>}
                    <Link className={`forget_password`} to={`/register`}>Register</Link>
                    <button
                        disabled={btnDisable}
                        onClick={() => loginHandler()}
                        type="button"
                        className="btn btn-outline-primary mb-3 float-end"> {btnDisable && <FontAwesomeIcon spin={true} icon={faSpinner} />} Login
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default Login;