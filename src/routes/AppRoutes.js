import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Coupon from '../Components/Coupon'
import Favorite from "../Components/Favorites";
import Cart from "../Components/Cart";

function AppRoutes() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/coupon" element={<Coupon />} />
                    <Route path="/favorite" element={<Favorite />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes