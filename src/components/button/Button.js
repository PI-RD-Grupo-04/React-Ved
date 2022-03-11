import {Link} from 'react-router-dom'
import './Button.css'


function Button(props) {

    let btn = 'ml-0 btn-lg mb-3 btnCardDel '
    btn += props.card ? 'btn-add-card ' : ''
    btn += props.suporte ? 'btn-suport ' : ''
    btn += props.delete ? 'btn-delete ' : ''
    btn += props.success ? 'btn-success ' : ''
    btn += props.plans ? 'btn-Plano ' : '' 
    btn += props.cart ? 'btn  ' : '' 
    let link = props.link ? props.link : null
    
    if (link != null) {
      return (
        <>
          
            <Link to={link} className={btn}  type="submit">{props.label}</Link>
          
        </>
      )
    } else {
      return (
        <>
          
            <button className={btn}  type="submit">{props.label}</button>
          
        </>
      )
    }

    
}

export default Button