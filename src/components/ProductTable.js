import React, { useState } from 'react';

const ProductTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Number of items per page

    const data = [
        {id: 1, name: "Apple Macbook Pro", brand: "Apple", category: "Electronics", price: 1100, status: "Pending", addedBy: "John Smith"},
        {id: 2, name: "Polo T Shirt", brand: "KC", category: "Cloth", price: 1100, status: "Approved", addedBy: "Luke Smith"},
        {id: 3, name: "Pixel Pro", brand: "Google", category: "Electronics", price: 900, status: "Approved", addedBy: "John Smith"},
        {id: 4, name: "Apple Macbook Pro", brand: "Apple", category: "Electronics", price: 1100, status: "Pending", addedBy: "John Smith"},
        {id: 5, name: "Polo T Shirt", brand: "KC", category: "Cloth", price: 1100, status: "Approved", addedBy: "Luke Smith"},
        {id: 6, name: "Pixel Pro", brand: "Google", category: "Electronics", price: 900, status: "Approved", addedBy: "John Smith"},
        {id: 7, name: "Apple Macbook Pro", brand: "Apple", category: "Electronics", price: 1100, status: "Pending", addedBy: "John Smith"},
        {id: 8, name: "Polo T Shirt", brand: "KC", category: "Cloth", price: 1100, status: "Approved", addedBy: "Luke Smith"},
        {id: 9, name: "Pixel Pro", brand: "Google", category: "Electronics", price: 900, status: "Approved", addedBy: "John Smith"},
        {id: 10, name: "Apple Macbook Pro", brand: "Apple", category: "Electronics", price: 1100, status: "Pending", addedBy: "John Smith"},
        {id: 11, name: "Polo T Shirt", brand: "KC", category: "Cloth", price: 1100, status: "Approved", addedBy: "Luke Smith"},
        {id: 12, name: "Pixel Pro", brand: "Google", category: "Electronics", price: 900, status: "Approved", addedBy: "John Smith"},
    ]

    // Calculate the indices of the first and last items on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Handle page change
    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <table className="table table-responsive">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Added by</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {currentItems.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{item.brand}</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>{item.status}</td>
                        <td>{item.addedBy}</td>
                        <td className={`action_icons`}>
                            <i className={`bx bx-edit mx-1`}/>
                            <i className={`bx bx-trash mx-1`}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className={`table_pagination`}>
                {Array.from({length: totalPages}, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handleClick(index + 1)}
                        disabled={index + 1 === currentPage}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductTable;