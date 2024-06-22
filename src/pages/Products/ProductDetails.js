import {Link, useParams} from "react-router-dom";
import Header from "../../components/header/Header";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {setProduct} from "../../features/productsSlice";
import StarRating from "../../components/products/StarRating";
import {decrementQuantity, incrementQuantity, setCart} from "../../features/cartSlice";
import {toast} from "react-toastify";
import axios from "../../configs/axios";

const ProductDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const products = useSelector(state => state?.products)
    const cart = useSelector(state => state?.cart || [])
    const [cartQuantity, setCartQuantity] = useState(1);
    const isAuthenticated = useSelector(state => state?.auth?.isAuthenticated);
    const authUserId = useSelector(state => state?.auth?.user?.id);

    const [product, setProduct] = useState(null);
    useEffect(() => {
        setProduct(products.find(product => product.id == id));
    }, []);

    const addToCart = () => {
        let cartItem = {
            product: {
                imageUrl: product.imageUrl,
                stock_quantity: product.stock_quantity,
                id: product.id,
                name: product.name,
                description: "Latest Apple iPhone",
                price: product.price,
                purchased: false
            },
            quantity: cartQuantity

        }

        // If the product is exist, then only update the quantity
        if (cart.find(item => item.productID == product.id)) {
            dispatch(incrementQuantity(product.id));
        } else {
            if (isAuthenticated) {
                axios.post(`buyer/${authUserId}/addToCart`, cartItem)
                    .then(res => {
                        let cartItem = {
                            productID: product.id,
                            name: product.name,
                            category: product.category,
                            price: product.price,
                            quantity: cartQuantity,
                            imageUrl: product.imageUrl,
                            stock_quantity: product.stock_quantity
                        }
                        dispatch(setCart(cartItem))
                    })
            } else {
                dispatch(setCart(cartItem));
            }

        }

        toast.success("Added to cart")
    }

    return <div className="container-fluid my-2">
        <Header/>

        <div className={`product_details py-3`}>
            <div className={`row`}>
                <div className={`col-4`}>
                    <img src={`/images/products/` + product?.imageUrl}/>
                </div>
                <div className={`col-8`}>
                    <div className={`product_info`}>
                        <div className={`py-3`}>Sub Category: {product?.subCategory.name},
                            Category: {product?.category}</div>
                        <h5 className={`product_name`}>{product?.name}</h5>
                        <p>{product?.description}</p>
                        <p className={`product_price`}>Price: ${product?.price} <span>(In Stock)</span></p>
                        <p className={`py-2`}>Quantity: <input value={cartQuantity}
                                                               onChange={e => setCartQuantity(e.target.value)}
                                                               className={`form-control-sm`}
                                                               type={`number`}/></p>
                        <button
                            onClick={addToCart}
                            className={`btn btn-outline-secondary`}>Add to cart
                        </button>
                    </div>
                </div>
                <div className={`col-12`}>
                    <h5 className={`p-3`}>Product reviews <button className={`btn btn-outline-secondary float-end`}>Add
                        a Review</button></h5>
                    {
                        product?.review.map(review => {
                            return <div className={`product_review p-3 mb-3`}>
                                <StarRating
                                    isEditable={false}
                                    totalStars={5}
                                    defaultRating={review?.rating}/>
                                <p className={`py-2`}>{review?.comment}</p>
                                <p className={`text-left py-2`}>Given by: {review?.user?.username}</p>
                            </div>
                        })
                    }

                    <h5 className={`p-3`}>Related products</h5>

                </div>
            </div>
        </div>
    </div>
}

export default ProductDetails;