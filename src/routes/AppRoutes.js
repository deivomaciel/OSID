import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Coupon from '../Components/Coupon'

function AppRoutes() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/coupon" element={<Coupon />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes