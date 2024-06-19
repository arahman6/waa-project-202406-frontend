import React, {useState} from 'react'
import ProductTable from "../../components/ProductTable";

const AddProduct = () => {

    const [addProduct, setAddProduct] = useState(false)

    return <div className="row">
        <div className="col-12">
            Add Product
        </div>
    </div>
}

export default AddProduct;