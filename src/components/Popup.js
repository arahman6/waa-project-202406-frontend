import {toast, ToastContainer} from "react-toastify";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import {hideSuccess, showSuccess} from "../features/auth/notificationSlice";

const Popup = () => {
    const notification = useSelector(state => state.notification)
    const dispatch = useDispatch();
    useEffect(() => {
        if (notification.success) {
            toast.success("Successfully registered, please login!");
        }
        dispatch(hideSuccess());

    }, [notification]);
    return <div>
        <ToastContainer/>
    </div>
}

export default Popup;