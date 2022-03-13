import { Link } from 'react-router-dom'
import './Button.css'


function Button(props) {

  let btn = ' ml-0 btn-lg mb-3  '
  btn += props.card ? 'btn-add-card ' : ''
  btn += props.suporte ? 'btn-suport ' : ''
  btn += props.delete ? 'btn-delete ' : ''
  btn += props.success ? 'btn-success ' : ''
  btn += props.plans ? 'btn-Plano ' : ''
  btn += props.cart ? ' btnCardDel ' : '' 
  btn += props.img ? 'button-search ' : ''

  let link = props.link ? props.link : null


  //btn-outline-success


  return (
    <>
      {link != null 
        ? <Link to={link} className={btn} type="submit">{props.label}</Link>
        : <button className={btn} type="submit">{props.label}</button>}

    </>
  )



}

export default Button