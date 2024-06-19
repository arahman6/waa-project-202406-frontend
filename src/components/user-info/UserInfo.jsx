import React from 'react'
import './user-info.scss'
import {useLocation} from "react-router-dom";

const UserInfo = () => {
    const location = useLocation();
    const page = location.pathname.split("/")[2];
    return (
        <div className='user-info'>
            <div className="user-info__name">
                <span>{page[0].toUpperCase() + page.slice(1)}</span>
            </div>
        </div>
    )
}

export default UserInfo
