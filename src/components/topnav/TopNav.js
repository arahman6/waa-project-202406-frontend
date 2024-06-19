import React from 'react'
import './topnav.scss'
import UserInfo from '../user-info/UserInfo'
import { data } from '../../constants'
import {Link, useLocation} from "react-router-dom";

const TopNav = () => {

    const location = useLocation();
    const curPath = location.pathname.split("/")[2];

    return (
        <div className='topnav'>
            <UserInfo user={data.user} />
            {curPath === 'products' && <Link className={`btn btn-outline-primary`} to={`/admin/add-product`}>Add Product</Link>}

        </div>
    )
}

export default TopNav
