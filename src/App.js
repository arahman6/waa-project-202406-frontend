import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import './app.css'
import {BrowserRouter, Routes} from 'react-router-dom'
import AdminRoutes from "./routes/adminRoutes";
import PageRoutes from "./routes/pageRoutes";
import Popup from "./components/Popup";

function App() {
    return (
        <BrowserRouter>
            <AdminRoutes/>
            <PageRoutes/>
            <Popup />
        </BrowserRouter>
    )
}

export default App
