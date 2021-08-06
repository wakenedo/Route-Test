import '../styles/Product.css'
import {fixPortion, fixPrice, getLink, truncateText} from '../utils/functions'

function Product({data}) {
    return (
        <div className="product__Container">
            <img className="product__Image" src={data.items[0].images[0].imageUrl} alt=""/>
            <div className="product__Name">
                {truncateText(data.productName.toUpperCase(), 40)}
            </div>
            <div className="product__Price">
                {data.sobconsulta[0] === "nao" 
                ? <div className="price__Container">
                <h4>{fixPrice(data)}</h4>
                <span>{fixPortion(data)}</span>
                </div>
                : <div className="price__Container"/>
                }           
            </div>
            <button onClick={() => getLink(data)}
            >{data.sobconsulta[0] === "sim" ? "CONSULTE" : "COMPRAR"}</button>
            
        </div>
    )
}

export default Product

//