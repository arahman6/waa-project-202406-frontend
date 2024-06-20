import Header from "../../components/header/Header";
import React from "react";
import "./Checkout.css";
import {Link} from "react-router-dom";

const Checkout = () => {
    return (
        <div className="container-fluid my-2">
            <Header/>
            <div className="row">
                <p className={`text-center p-3`}>Please <Link to={`/login`}>login </Link> before placing order.</p>
                <div className="col-md-6">
                    <div className={`p-3 mt-3 box`}>
                        <h4>Billing Address/ Shipping Address</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" className="form-control" id="fullName" name="fullName" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input type="text" className="form-control" id="address" name="address" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input type="text" className="form-control" id="city" name="city" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="state">State</label>
                                <input type="text" className="form-control" id="state" name="state" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="zip">Zip Code</label>
                                <input type="text" className="form-control" id="zip" name="zip" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <input type="text" className="form-control" id="country" name="country" required/>
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
                                <button type="submit" className="btn btn-outline-primary mt-3">Place Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
