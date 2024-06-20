import React, {useState} from 'react'
import ListTable from "../../components/ListTable";
import {Link} from "react-router-dom";

const Orders = () => {

    const [addProduct, setAddProduct] = useState(false)

    return <div className="row">
        <div className="col-12">
            <ListTable/>
        </div>
    </div>
}

export default Orders;