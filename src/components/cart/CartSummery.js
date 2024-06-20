import {Link} from "react-router-dom";
import React from "react";

const CartSummery = ({cart}) => {

    const subTotal = cart?.reduce((total, c) => {
        return total + c.price * c.quantity
    }, 0) || 0;

    const shippingCharge = 0;

    return <div className={`p-3 mt-3 box`}>
        <h4 className={`py-3`}>Cart Summary</h4>
        <div className="row mb-2">
            <div className="col-6">Subtotal</div>
            <div className="col-6">${subTotal.toFixed(2)}</div>
        </div>
        <div className="row mb-2">
            <div className="col-6">Shipping</div>
            <div className="col-6">{shippingCharge.toFixed(2)}</div>
        </div>
        <div className="row mb-2">
            <div className="col-12">
                <small>---------------------------------------------------------------</small>
            </div>
        </div>
        <div className="row mb-2">
            <div className="col-6">Total</div>
            <div className="col-6">${(subTotal + shippingCharge).toFixed(2)}</div>
        </div>
        { cart.length > 0 && <Link to={`/checkout`} className="btn btn-outline-secondary mt-3">Proceed to Checkout</Link> }
    </div>
}

export default CartSummery;