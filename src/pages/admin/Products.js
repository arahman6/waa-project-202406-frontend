import React, {useState} from 'react'
import ProductTable from "../../components/ProductTable";
import {Link} from "react-router-dom";

const Products = () => {

    const [addProduct, setAddProduct] = useState(false)

    return <div className="row">
        <div className="col-12">
            <ProductTable/>
        </div>
    </div>
}

export default Products;