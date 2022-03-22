
export default function Cart(props) {
    const { cart, data, removeItem } = props

    console.log(cart)
    function getTotalPagar() {
        let total = 0
        cart.forEach(element => {
            let q = element.cantidad
            let precio = data.find(d => d.id === element.id)["precio"]
            total += q * precio
        });
        return total
    }

    let total = getTotalPagar()

    let heigthStyle
    let header = document.querySelector(".header")
    if (header !== null) {
       heigthStyle  = {"margin":header.clientHeight}    
    }
    else {
        heigthStyle = {"margin":"1rem"}
    }

    return (
        <div className="cartSection" style={heigthStyle}>
            <div className="cartItems">
                {cart.map(item => (
                    <div key={item.id} id={item.id} className="cartElement">
                        <img className="cartImg" src={data.find(d => d.id === item.id)["img"]}></img>
                        <div className="itemDetails">
                            <h1>{data.find(d => d.id === item.id)["title"]}</h1>
                            <span>Cantidad: {item.cantidad}</span>
                            <span>Precio: {data.find(d => d.id === item.id)["precio"]}</span>
                        </div>
                        <button className="removeBtn" onClick={removeItem}>X</button>
                    </div>
                    )
                )}
            </div>
            <div className="totalAmount">
                <div className="totalAmount">{total === 0 ? "The cart is empty" : `Total ${total}`}</div>
            </div>
            
        </div>
    )
}