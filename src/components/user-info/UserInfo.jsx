import React from 'react'
import './user-info.scss'
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const UserInfo = () => {
    const location = useLocation();
    const {user} = useSelector((state) => state.auth);
    const authUserRole = user?.roles[0]?.role;
    const curPath = location.pathname.split('/')[2]
    const page = location.pathname.split("/")[2];
    return (
        <div className='user-info'>
            <div className="user-info__name">
                <span>{(authUserRole === "BUYER" && curPath === 'orders') ? "My Orders" : page[0].toUpperCase() + page.slice(1)}</span>
            </div>
        </div>
    )
}

export default UserInfo
