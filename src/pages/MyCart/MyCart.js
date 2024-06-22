import React, {useEffect} from 'react';
import './MyCart.css';
import Header from "../../components/header/Header";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import CartItem from "../../components/cart/CartItem";
import CartSummery from "../../components/cart/CartSummery";
import axios from "../../configs/axios";

const MyCart = () => {

    const cartItems = useSelector(state => state?.cart || []);

    return (
        <div className="container-fluid my-2">
            <Header/>
            <div className="row">
                <div className="col-md-8">
                    <div className={`p-3 mt-3 box`}>
                        <h4 className={`py-3`}>Cart Items</h4>
                        <div className="row my-cart-header">
                            <div className="col-2">Product</div>
                            <div className="col-3">Name</div>
                            <div className="col-2">Quantity</div>
                            <div className="col-2">Price</div>
                            <div className="col-2">Total</div>
                            <div className="col-1"></div>
                        </div>
                        {cartItems.length === 0 && <p className={`text-center p-5`}>Currently there are no items in cart</p>}
                        {
                            cartItems.map(cart => {
                                return <CartItem cart={cart}/>
                            })
                        }
                    </div>
                </div>
                <div className="col-md-4">
                    <CartSummery cart={cartItems} />
                </div>
            </div>
        </div>
    );
}

export default MyCart;
