import {Link} from "react-router-dom";

const Product = () => {
    return <div className={`col-3`}>
        <div className={`product_list`}>
            <Link href={``}><img src={`images/products/1.png`}/></Link>
            <div className={`product_info`}>
                <div>Lighting</div>
                <h5 className={`product_name`}><Link href={``}>Awesome Lamp</Link></h5>
                <p className={`product_price`}>$40</p>
            </div>
        </div>
    </div>
}

export default Product;