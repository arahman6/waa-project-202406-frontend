import React from 'react'
import './MyCart.css';
import Header from "../../components/header/Header";

const MyCart = () => {
    return <div className="container-fluid my-2">
        <Header/>
        <div className="row">
            <div className="col-9">
                Cart Table
            </div>
            <div className="col-3">
                Cart summery
            </div>
        </div>
    </div>
}

export default MyCart;