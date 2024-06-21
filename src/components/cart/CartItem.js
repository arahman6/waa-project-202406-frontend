import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrementQuantity, incrementQuantity, removeItem} from "../../features/cartSlice";

const CartItem = ({cart}) => {
    const dispatch = useDispatch();

    const decrementHandler = () => {
        dispatch(decrementQuantity(cart.productID));
    }
    const incrementHandler = () => {
        dispatch(incrementQuantity(cart.productID));
    }

    const removeCartItem = id => {
        dispatch(removeItem(id));
    }

    return <div className="row my-cart-item">
        <div className="col-2">
            <img src={`/images/products/${cart.imageUrl}`} className="img-fluid product-image"/>
        </div>
        <div className="col-3">
            <p className="product-name">{cart.name}</p>
            <p className="product-description">{cart.category}</p>
        </div>
        <div className="col-2">
            <div className="quantity-control">
                <button
                    onClick={() => decrementHandler(cart.productID)}
                    className="btn btn-outline-secondary">-
                </button>
                <span className="quantity">{cart.quantity}</span>
                <button
                    onClick={() => incrementHandler(cart.productID)}
                    className="btn btn-outline-secondary">+
                </button>
            </div>
        </div>
        <div className="col-2">
            ${cart.price.toFixed(2)}
        </div>
        <div className="col-2">
            ${(cart.price * cart.quantity).toFixed(2)}
        </div>
        <div className={`col-1`}>
            <i onClick={() => removeCartItem(cart.productID)}
                className={`bx bx-trash cursor-pointer`} title={`Remove item`} />
        </div>
    </div>
}

export default CartItem;