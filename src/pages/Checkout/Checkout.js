import Header from "../../components/header/Header";
import React, {useEffect, useState} from "react";
import "./Checkout.css";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "../../configs/axios";
import {toast} from "react-toastify";
import {removeAll} from "../../features/cartSlice";

const Checkout = () => {
    const authUser = useSelector(state => state?.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cart)

    const authUserId = useSelector(state => state?.auth?.user?.id)

    const [orderData, setOrderData] = useState([])

    useEffect( ()=> {
        axios.get(`buyer/${authUserId}/cart`)
            .then(res => setOrderData(res?.data?.cartItems))
            .catch( err=> console.log(err))
    }, []);

    const placeOrderHandler = () => {
        if (!authUser?.isAuthenticated) {
            navigate("/login")
            return false;
        }

        let orderData = [];

        axios.post(`buyer/${authUser?.user?.id}/cart/makeOrder`, orderData)
            .then( res => {
                dispatch(removeAll());
                toast.success("Order successfully placed!")
                navigate("/admin/orders");
        }).catch( err => console.log(err));
    }

    const firstName = authUser?.user?.firstName || '';
    const lastName = authUser?.user?.lastName || '';

    return (
        <div className="container-fluid my-2">
            <Header/>
            <div className="row">
                { !authUser?.isAuthenticated && <p className={`text-center p-3`}>Please <Link to={`/login`}>login </Link> before placing order.</p> }
                <div className="col-md-6">
                    <div className={`p-3 mt-3 box`}>
                        <h4>Billing Address/ Shipping Address</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    value={firstName + " " + lastName}
                                    type="text"
                                    className="form-control"
                                    id="fullName" name="fullName" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Street</label>
                                <input value={authUser?.user?.address?.street} type="text" className="form-control" id="street" name="street" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input type="text"
                                       value={authUser?.user?.address?.city}
                                       className="form-control" id="city"
                                       name="city" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="state">State</label>
                                <input
                                    value={authUser?.user?.address?.state}
                                    type="text" className="form-control" id="state" name="state" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="zip">Postal Code</label>
                                <input value={authUser?.user?.address?.postalCode} type="text" className="form-control" id="zip" name="postalCode" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <input
                                    value={authUser?.user?.address?.country}
                                    type="text"
                                    className="form-control"
                                    id="country"
                                    name="country" required/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={`p-3 mt-3 box`}>
                        <h4 className={`mb-3`}>Payment Information</h4>
                        <form>
                            <p><b>Choose Payment Method</b></p>
                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="paymentMethod"
                                           id="creditCard"
                                           value="creditCard" required/>
                                    <label className="form-check-label px-2" htmlFor="creditCard"> Credit Card </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="paymentMethod" id="paypal"
                                           value="paypal" required/>
                                    <label className="form-check-label px-2" htmlFor="paypal"> PayPal </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="paymentMethod" id="cash"
                                           value="cash" required/>
                                    <label className="form-check-label px-2" htmlFor="cash"> Cash </label>
                                </div>
                            </div>

                            <p><b>Credit Card Information</b></p>
                            <div className="form-group">
                                <label htmlFor="cardNumber">Card Number</label>
                                <input type="text" className="form-control" id="cardNumber" name="cardNumber" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="expirationDate">Expiration Date</label>
                                <input type="text" className="form-control" id="expirationDate" name="expirationDate"
                                       placeholder="MM/YY" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cvv">CVV</label>
                                <input type="text" className="form-control" id="cvv" name="cvv" required/>
                            </div>
                            <div className="form-group text-right">
                                <button
                                    onClick={() => placeOrderHandler()}
                                    type="submit"
                                    className="btn btn-outline-primary mt-3">Place Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
