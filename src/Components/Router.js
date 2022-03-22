import { BrowserRouter, Routes, Route, useLocation, HashRouter } from "react-router-dom";
import { useState } from "react"
import App from "./App"
import Shop from "./Shop"
import Cart from "./Cart"
import "../Static/style.css"

export default function Router() {
    const [data, setData] = useState([
        {id:"0", img: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/c22b5d9820db44f8961cabc60123718d_9366/parka-stadium-river-plate.jpg", title: "PARKA STADIUM RIVER PLATE", precio:26999},
        {id:"1", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cddbe2b74a6d42eb9d3dab0900d1311b_9366/Campera_Rompevientos_River_Plate_Gris_FH7920_01_laydown.jpg", title: "CAMPERA ROMPEVIENTOS RIVER PLATE", precio:12999},
        {id:"2", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6f2c82d2ae704c72a6f6ad2e00f35896_9366/Camiseta_Local_River_Plate_21-22_Blanco_GU9603_01_laydown.jpg", title: "CAMISETA LOCAL RIVER PLATE 21/22", precio:10999},
        {id:"3", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc2cc1ce7db445ab907cada900eb6bbb_9366/Camiseta_Visitante_River_Plate_21-22_Negro_GU9605_01_laydown.jpg", title: "CAMISETA VISITANTE RIVER PLATE 21/22", precio:10999},
        {id:"4", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fd081a1ed6154c56b52eac9b0009aad2_9366/Camiseta_Visitante_Oficial_River_Plate_20-21_Rojo_GK2995_01_laydown.jpg", title: "CAMISETA VISITANTE OFICIAL RIVER PLATE 20/21", precio:17499},
        {id:"5", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09989b94a7d5414bb340ac400028a17f_9366/Shorts_Visitante_River_Plate_20-21_Blanco_FQ7663_01_laydown.jpg", title: "SHORTS VISITANTE RIVER PLATE 20/21", precio:6499},
        {id:"6", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c7734bdd2207437d82fead1a01053e48_9366/Pantalon_de_Presentacion_Tiro_River_Plate_Gris_GU9637_21_model.jpg", title: "PANTALÓN DE PRESENTACIÓN TIRO RIVER PLATE", precio:11999},
        {id:"7", img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4ddfba96b75d4cd49885ad1a01049d0b_9366/Shorts_de_Descanso_Tiro_River_Plate_Gris_GU9633_21_model.jpg", title: "SHORTS DE DESCANSO TIRO RIVER PLATE", precio:7999}
      ])   

    const [cart, setCart] = useState([])
    const addItem = e => {
        const id = e.target.parentNode.parentNode.id

        const filtered = cart.find(item => item.id === id)
        let data
        if (filtered != undefined) {
            let index = cart.indexOf(filtered)
            data = filtered
            data["cantidad"] += 1
            let items = [...cart]
            items[index] = data
            setCart(items)
        }
        else {
            data = {"id": id, "cantidad": 1}
            setCart(cart.concat(data))
        }
    }

    const [displayVideo, setDisplayVideo] = useState(true)
    function toggleVideo(e) {
        let id = e.target.id
        if(id === "shop" || id === "cart" || id === "cartIcon") {
            setDisplayVideo(false)
        }
        else {
            setDisplayVideo(true)
        }
    }

    function removeItem(e) {
        let id = e.target.parentNode.id
        let items = [...cart]
        setCart(items.filter(i => i.id !== id))
    }

    return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<App cart={cart} displayVideo={displayVideo} toggleVideo={toggleVideo}/>}>
                <Route path="shop" element={<Shop data={data} itemHandler={addItem}/>} />
                <Route path="cart" element={<Cart cart={cart} data={data} removeItem={removeItem}/>} />
            </Route>
        </Routes>
    </HashRouter>
    )
}