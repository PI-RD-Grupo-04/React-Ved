import './ProductCard.css'
import favorito from '../asserts/imagens/Users_icon/favorito.png'

function ProductCard(props) {

    return (
        <>
      <div class="product-card">
        <div class="badge-B"><img src={favorito} width="20px"/></div>
        <div class="product-tumb">
          <img src={props.link} alt="Abacaxi queen"/>
        </div>
        <div class="product-details">

          <h4 className="text-center"><a href="">{props.nome}</a></h4>
          <p className='text-center'>{props.peso}</p>
          <div class="product-bottom-details text-center">
            <div class="product-price">

             {props.price}
            </div>
          </div>
        
        </div>
      </div>
        </>
    )
}

export default ProductCard