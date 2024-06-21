import React, {useEffect, useState} from 'react'
import ListTable from "../../components/ListTable";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "../../configs/axios";
import {setOrder} from "../../features/ordersSlice";

const Orders = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state?.orders || []);
    const cols = ['id', 'deliveryDate', 'orderDate', 'price', 'status'];

    useEffect(() => {
        axios.get("orders")
            .then(res => dispatch(setOrder(res.data)))
            .catch(err => console.log(err))
    }, []);

    return <div className="row">
        <div className="col-12">
            <ListTable data={data} cols={cols} />
        </div>
    </div>
}

export default Orders;