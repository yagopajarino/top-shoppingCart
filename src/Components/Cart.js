
export default function Cart(props) {
    const { cart, data } = props

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
    console.log(total)

    return (
        <div>
            <h1>Cart</h1>
            <div className="cartItems">
                {cart.map(item => (
                    <div key={item.id} className="cartElement">
                        <h1>{data.find(d => d.id === item.id)["title"]}</h1>
                        <img src={data.find(d => d.id === item.id)["img"]}></img>
                        <span>Cantidad: {item.cantidad}</span>
                        <span>Precio: {data.find(d => d.id === item.id)["precio"]}</span>
                    </div>
                    )
                )}
            </div>
            <div className="totalAmount">
                <span>Total: {total}</span>
            </div>
            
        </div>
    )
}