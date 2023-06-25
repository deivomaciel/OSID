import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Coupon from '../Components/Coupon'
import Favorite from "../Components/Favorites";

function AppRoutes() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Home />} />
                    <Route path="/coupon" element={<Coupon />} />
                    <Route path="/favorite" element={<Favorite />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes