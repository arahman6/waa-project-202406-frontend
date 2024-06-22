import React, {useState} from 'react';
import moment from "moment";

const ListTable = ({cols = [], data, perPage = 10, editHandler, deleteHandler}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(perPage); // Number of items per page

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
                    {
                        cols.map(col => {
                            return <th>{col}</th>
                        })
                    }
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    currentItems.map((item) => (
                        <tr key={item.id}>
                            {
                                cols.map(col => {
                                    if (col == "price") {
                                        return <td>{`$`+item[col]}</td>
                                    }
                                    if (col == "subCategory") {
                                        return <td>{item[col]?.name}</td>
                                    }
                                    if (col == "orderDate") {
                                        return <td>{moment(item[col]).format('MM/DD/YYYY')}</td>
                                    }
                                    if (col == "category") {
                                        return <td>{item[col]?.category?.name}</td>
                                    }
                                    if (col == "address") {
                                        let street = item[col]?.street && item[col].street || '';
                                        street = street !== '' && street + ', '
                                        let city = item[col]?.city && item[col]?.city || '';
                                        city = city !== '' && city + ', '
                                        let state = item[col]?.state && item[col]?.state || '';
                                        state = state !== '' && state + ', '
                                        let country = item[col]?.country  && item[col]?.country || '';
                                        return <td>{street + city + state + country}</td>
                                    }
                                    if (col == "roles") {
                                        return <td>{item[col][0]?.role}</td>
                                    }
                                    return <td>{item[col]}</td>
                                })
                            }
                            <td className={`action_icons`}>
                                <i onClick={() => editHandler(item.id)} className={`bx bx-edit mx-1`}/>
                                <i onClick={() => deleteHandler(item.id)} className={`bx bx-trash mx-1`}/>
                            </td>
                        </tr>
                    ))
                }
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

export default ListTable;