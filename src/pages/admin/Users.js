import React, {useEffect, useState} from 'react'
import ListTable from "../../components/ListTable";
import axios from "../../configs/axios";
import {deleteUser, setUsers} from "../../features/usersSlice";
import {useDispatch, useSelector} from "react-redux";
import {confirm} from "react-confirm-box";


const Users = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state?.users || []);

    useEffect(() => {
        axios.get("users")
            .then(res => {
                dispatch(setUsers(res.data));
            })
            .then(err => console.log(err))

    }, []);

    const cols = ['id', 'firstName', 'lastName', 'email', 'phone', 'roles', 'address'];

    const deleteHandler = async id => {

        const result = await confirm("Are you sure?");
        if (result) {
            axios.delete(`users/${id}`)
                .then(res => dispatch(deleteUser(id)))
                .catch(err => console.log(err));
            return;
        }
    }

    return <div className="row">
        <div className="col-12">
            {data && <ListTable
                cols={cols}
                data={data}
                perPage={10}
                deleteHandler={deleteHandler}/>}
        </div>
    </div>
}

export default Users;