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
        <div class="product-details align-items-center justify-content-center">

          <h4 className="text-center"><a href="">{props.nome}</a></h4>
          <p className='text-center'>{props.peso}</p>
          <div class="product-bottom-details text-center">
            <div class="product-price">

              R$ {props.price}
            </div>
          </div>
          <div class=" row text-center justify-content-center ">
            <div className="col-12 d-grid gy-2">
              <Button label="adicionar a cesta" success />
            </div>

          </div>

        </div>
      </div>
    </div >
  )
}

export default ProductCard