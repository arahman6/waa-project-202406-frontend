import React, {useEffect, useState} from 'react'
import './sidebar.scss'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {images} from '../../constants'
import sidebarNav from '../../configs/sidebarNav'
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../features/authSlice";

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.auth);
    const authUserRole = user?.roles[0]?.role;
    const roleRoutes = {
        ADMIN: ["dashboard", "users", "reviews", "settings"],
        SELLER: ["dashboard", "products", "orders"],
        BUYER: ["orders"],
    }

    useEffect(() => {
        const curPath = location.pathname.split('/')[2]
        const activeItem = sidebarNav.findIndex(item => item.section === curPath)
        setActiveIndex(curPath.length === 0 ? 0 : activeItem)
    }, [location])

    // const closeSidebar = () => {
    //     document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)'
    //     setTimeout(() => {
    //         document.body.classList.remove('sidebar-open')
    //         document.querySelector('.main__content').style = ''
    //     }, 500);
    // }

    const logoutHandler = () => {
        dispatch(logout());
        navigate("/login");
    }

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <Link to={`/products`}><img src={images.logo} alt=""/></Link>
                <div className="sidebar-close">
                    <i className='bx bx-x'></i>
                </div>
            </div>
            <div className="sidebar__menu">
                {
                    sidebarNav.map((nav, index) => {
                        const pathName = nav.link.split("/")[2].trim();
                        if (roleRoutes[authUserRole]?.includes(pathName)) {
                            return <Link
                                to={nav.link}
                                key={`nav-${index}`}
                                className={`sidebar__menu__item ${activeIndex === index && 'active'}`}>
                                <div className="sidebar__menu__item__icon">
                                    {nav.icon}
                                </div>
                                <div className="sidebar__menu__item__txt">
                                    {(authUserRole === "BUYER" && pathName === 'orders') ? "My Orders" : nav.text}
                                </div>
                            </Link>
                        }

                    })
                }
                <div
                    className="sidebar__menu__item"
                    onClick={() => logoutHandler()}>
                    <div className="sidebar__menu__item__icon">
                        <i className='bx bx-log-out'></i>
                    </div>
                    <div className="sidebar__menu__item__txt">
                        Logout
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
