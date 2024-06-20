import React, {useState} from 'react';

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
                                    if (col == "address") {
                                        return <td>{item[col].street + ", " + item[col].city + ", " + item[col].state + ", " + item[col].country}</td>
                                    }
                                    if (col == "roles") {
                                        return <td>{item[col][0].role}</td>
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