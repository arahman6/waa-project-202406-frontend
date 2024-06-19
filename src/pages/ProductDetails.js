import {Link, useParams} from "react-router-dom";
import Header from "../components/header/Header";

const ProductDetails = () => {
    const {params} = useParams();

    return <div className="container-fluid my-2">
        <Header/>
        <div className={`col-12`}>
            <div className={`product_details`}>
                <img src={`images/products/1.png`} />
                <div className={`product_info`}>
                    <div>Category: Cloth</div>
                    <h5 className={`product_name`}>Apple watch</h5>
                    <p className={`product_price`}>Price: $123</p>
                </div>
            </div>
        </div>
    </div>
}

export default ProductDetails;