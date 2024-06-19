import React, {useState} from 'react'
import ProductTable from "../../components/ProductTable";

const AddProduct = () => {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        image: null,
        quantity: '',
        category: '',
        subcategory: '',
    });

    const [errors, setErrors] = useState({});

    const categoryList = ['Electronics', 'Books', 'Clothing'];
    const subcategoryList = {
        Electronics: ['Phones', 'Laptops', 'Accessories'],
        Books: ['Fiction', 'Non-Fiction', 'Comics'],
        Clothing: ['Men', 'Women', 'Kids'],
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const validate = form => {
        if (form.name === "") {
            setErrors({...errors, field: "name", message: "fields can not be empty"})
            return false;
        }

        if (form.description === "") {
            setErrors({...errors, field: "description", message: "fields can not be empty"})
            return false;
        }

        if (form.price === "") {
            setErrors({...errors, field: "price", message: "fields can not be empty"})
            return false;
        }

        if (form.image === null) {
            setErrors({...errors, field: "image", message: "fields can not be empty"})
            return false;
        }

        if (form.quantity === null) {
            setErrors({...errors, field: "quantity", message: "fields can not be empty"})
            return false;
        }

        if (form.category === null) {
            setErrors({...errors, field: "category", message: "fields can not be empty"})
            return false;
        }

        if (form.subcategory === null) {
            setErrors({...errors, field: "subcategory", message: "fields can not be empty"})
            return false;
        }

        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate(formData)) {
            return false;
        }
        // Handle form submission logic here
    };

    return <div className="row">
        <div className="col-12">
            <form className="styled-form" onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className={`form-control ${errors?.field === "name" && " input_error"}`}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        className={`form-control ${errors?.field === "description" && " input_error"}`}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        
                    ></textarea>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        className={`form-control ${errors?.field === "price" && " input_error"}`}
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="image">Image:</label>
                    <input
                        type="file"
                        id="image"
                        className={`form-control ${errors?.field === "image" && " input_error"}`}
                        name="image"
                        onChange={handleChange}
                        
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        className={`form-control ${errors?.field === "quantity" && " input_error"}`}
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="category">Category:</label>
                    <select
                        id="category"
                        className={`form-control ${errors?.field === "category" && " input_error"}`}
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        >
                        <option value="">Select Category</option>
                        {categoryList.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="subcategory">Subcategory:</label>
                    <select
                        id="subcategory"
                        className={`form-control ${errors?.field === "subcategory" && " input_error"}`}
                        name="subcategory"
                        value={formData.subcategory}
                        onChange={handleChange}
                        
                    >
                        <option value="">Select Subcategory</option>
                        {formData.category &&
                            subcategoryList[formData.category].map((subcategory) => (
                                <option key={subcategory} value={subcategory}>
                                    {subcategory}
                                </option>
                            ))}
                    </select>
                </div>

                <div className="form-group mb-3">
                    {errors?.message && <p className={`error_text`}>{errors.message}</p>}
                    <button className={`btn btn-outline-secondary float-end`} type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
}

export default AddProduct;