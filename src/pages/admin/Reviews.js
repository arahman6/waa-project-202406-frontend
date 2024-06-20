import React, {useEffect, useState} from 'react'
import ListTable from "../../components/ListTable";
import axios from "../../configs/axios";
import {deleteUser, setUsers} from "../../features/usersSlice";
import {useDispatch, useSelector} from "react-redux";
import {confirm} from "react-confirm-box";
import {deleteReview, setReviews} from "../../features/reviewsSlice";


const Reviews = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state?.reviews || []);

    useEffect(() => {
        axios.get("reviews")
            .then(res => {
                dispatch(setReviews(res.data));
            })
            .then(err => console.log(err))

    }, []);

    const cols = ['id', 'comment', 'reviewDate'];

    const deleteHandler = async id => {

        const result = await confirm("Are you sure?");
        if (result) {
            axios.delete(`reviews/${id}`)
                .then(res => dispatch(deleteReview(id)))
                .catch(err => console.log(err));
            return;
        }
    }

    const editHandler = async id => {
        return false;
    }

    return <div className="row">
        <div className="col-12">
            {data && <ListTable
                cols={cols}
                data={data}
                perPage={10}
                editHandler={editHandler}
                deleteHandler={deleteHandler} />}
        </div>
    </div>
}

export default Reviews;