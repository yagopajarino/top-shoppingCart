
export default function Shop(props) {
    const {data, itemHandler} = props
    
    let heigthStyle
    let header = document.querySelector(".header")
    if (header !== null) {
       heigthStyle  = {"margin":header.clientHeight}    
    }
    else {
        heigthStyle = {"margin":"1rem"}
    }
    

    return (
        <div className="shopSection" style={heigthStyle}>
            <div className="shopItems">
            {data.map(item => 
                <div key={item.id} id={item.id} className="tile">
                    <img src={item.img} alt="item"></img>
                    <h3>{item.title}</h3>
                    <div className="priceCartContainer">
                        <span>ARS {item.precio}</span>
                        <button onClick={itemHandler}>Add to cart</button>
                    </div>
                </div>
            )}
            </div>
        </div>

    )
}