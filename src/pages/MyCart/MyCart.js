import React from 'react';
import './MyCart.css';
import Header from "../../components/header/Header";

const MyCart = () => {
    return (
        <div className="container-fluid my-2">
            <Header />
            <div className="row">
                <div className="col-md-8">
                    <h2>Cart Items</h2>
                    <div className="row my-cart-header">
                        <div className="col-2">Product</div>
                        <div className="col-4">Description</div>
                        <div className="col-2">Quantity</div>
                        <div className="col-2">Price</div>
                        <div className="col-2">Total</div>
                    </div>
                    {/** Product 1 */}
                    <div className="row my-cart-item">
                        <div className="col-2">
                            <img src="path/to/image1" alt="Product 1" className="img-fluid product-image" />
                        </div>
                        <div className="col-4">
                            <p className="product-name">Decoration</p>
                            <p className="product-description">Cool Flower</p>
                        </div>
                        <div className="col-2">
                            <div className="quantity-control">
                                <button className="btn btn-outline-secondary">-</button>
                                <span className="quantity">4</span>
                                <button className="btn btn-outline-secondary">+</button>
                            </div>
                        </div>
                        <div className="col-2">
                            $65
                        </div>
                        <div className="col-2">
                            $260
                        </div>
                    </div>
                    {/** Product 2 */}
                    <div className="row my-cart-item">
                        <div className="col-2">
                            <img src="path/to/image2" alt="Product 2" className="img-fluid product-image" />
                        </div>
                        <div className="col-4">
                            <p className="product-name">Electronics</p>
                            <p className="product-description">Smartphone</p>
                        </div>
                        <div className="col-2">
                            <div className="quantity-control">
                                <button className="btn btn-outline-secondary">-</button>
                                <span className="quantity">2</span>
                                <button className="btn btn-outline-secondary">+</button>
                            </div>
                        </div>
                        <div className="col-2">
                            $300
                        </div>
                        <div className="col-2">
                            $600
                        </div>
                    </div>
                    {/** Product 3 */}
                    <div className="row my-cart-item">
                        <div className="col-2">
                            <img src="path/to/image3" alt="Product 3" className="img-fluid product-image" />
                        </div>
                        <div className="col-4">
                            <p className="product-name">Books</p>
                            <p className="product-description">JavaScript Guide</p>
                        </div>
                        <div className="col-2">
                            <div className="quantity-control">
                                <button className="btn btn-outline-secondary">-</button>
                                <span className="quantity">1</span>
                                <button className="btn btn-outline-secondary">+</button>
                            </div>
                        </div>
                        <div className="col-2">
                            $45
                        </div>
                        <div className="col-2">
                            $45
                        </div>
                    </div>
                    {/** Product 4 */}
                    <div className="row my-cart-item">
                        <div className="col-2">
                            <img src="path/to/image4" alt="Product 4" className="img-fluid product-image" />
                        </div>
                        <div className="col-4">
                            <p className="product-name">Furniture</p>
                            <p className="product-description">Office Chair</p>
                        </div>
                        <div className="col-2">
                            <div className="quantity-control">
                                <button className="btn btn-outline-secondary">-</button>
                                <span className="quantity">1</span>
                                <button className="btn btn-outline-secondary">+</button>
                            </div>
                        </div>
                        <div className="col-2">
                            $120
                        </div>
                        <div className="col-2">
                            $120
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h2>Cart Summary</h2>
                    <div className="row">
                        <div className="col-6">Subtotal</div>
                        <div className="col-6">$1025</div>
                    </div>
                    <div className="row">
                        <div className="col-6">Shipping</div>
                        <div className="col-6">Free Shipping</div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <small>Shipping options will be updated during checkout.</small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">Total</div>
                        <div className="col-6">$1025</div>
                    </div>
                    <button className="btn btn-primary mt-3">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default MyCart;
