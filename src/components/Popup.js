import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Popup = () => {
    // const notification = useSelector(state => state.notification)
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     if (notification.success) {
    //         toast.success("Successfully registered, please login!");
    //     }
    //     dispatch(hideSuccess());
    //
    // }, [notification]);
    return <div>
        <ToastContainer autoClose={2000} />
    </div>
}

export default Popup;