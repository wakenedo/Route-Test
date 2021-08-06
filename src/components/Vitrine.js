import Product from './Product'
import '../styles/Vitrine.css'
import catalogo from '../constants/catalogo'
//import {getCatalogo } from '../services/api'

//Sem permissão para acessar o local da api

function Vitrine() {
    const renderProducts = /*async*/ () => {
        let arr = []

        let catalogoArr = catalogo
        //let catalogoArr = await getCatalgo() : 
        catalogoArr.forEach(
            product => {
                arr.push(<Product key={product.productId} data={product}/>)  
            }
        )
        return arr 
    }
    
    
    return (
        <div className="body">
            <div className="vitrine__Rows">
                {renderProducts()}
                
            </div>
            
        </div>
    )
}

export default Vitrine
