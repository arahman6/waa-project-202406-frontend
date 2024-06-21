import {Link} from "react-router-dom";

const Product = ({product}) => {
    return <div className={`col-3`}>
        <div className={`product_list`}>
            <Link to={`/product/${product.id}`}><img height={200} width={`auto`} src={`/images/products/`+product.imageUrl}/></Link>
            <div className={`product_info`}>
                <div>Category: {product.category}</div>
                <h5 className={`product_name`}><Link to={`/product/${product.id}`}>{product.name}</Link></h5>
                <p className={`product_price`}>Price: ${product.price}</p>
            </div>
        </div>
    </div>
}

export default Product;