import Header from "../components/header/Header";
import Product from "../components/products/Product";

const Products = () => {
    return <div className="container-fluid my-2">
        <Header />
        <section className={`mb-2`}>
            <h3 className={`text-center p-3`}>All Products</h3>
            <p className={`text-center`}>Check out our new furniture collection! Cozy sofa, fancy chair, wooden casket, and many more. The new collection brings an informal elegance to your home.</p>
        </section>
        <section>
            <div className={`row`}>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </section>
    </div>
}

export default Products;