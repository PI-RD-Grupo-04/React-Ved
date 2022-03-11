import './ProductCard.css'
import favorito from '../asserts/imagens/Users_icon/favorito.png'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'

function ProductCard(props) {

  return (
    <div className={props.col}>
      <div class="product-card">
        <div class="badge-B"><img src={favorito} width="20px" /></div>
        <div class="product-tumb">
          <Link to={props.link}>  <img src={props.img} alt="Abacaxi queen" /></Link>
        </div>
        <div class="product-details">

          <h4 className="text-center"><a href="">{props.nome}</a></h4>
          <p className='text-center'>{props.peso}</p>
          <div class="product-bottom-details text-center">
            <div class="product-price">

              R$ {props.price}
            </div>
          </div>
          <Button label="adicionar a cesta" success />
        </div>
      </div>
    </div >
  )
}

export default ProductCard