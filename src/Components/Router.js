import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"
import Shop from "./Shop"

export default function Router() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="shop" element={<Shop />} />
            </Route>
        </Routes>
    </BrowserRouter>
    )
}