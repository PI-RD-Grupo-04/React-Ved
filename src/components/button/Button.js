import { Link } from 'react-router-dom'
import './Button.css'


function Button(props) {

<<<<<<< HEAD
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

    
=======
  let btn = ' ml-0 btn-lg mb-3 '
  btn += props.card ? 'btn-add-card ' : ''
  btn += props.suporte ? 'btn-suport ' : ''
  btn += props.delete ? 'btn-delete ' : ''
  btn += props.success ? 'btn-success ' : ''
  btn += props.plans ? 'btn-Plano ' : ''

  let link = props.link ? props.link : null


  //btn-outline-success


  return (
    <>
      {link != null 
        ? <Link to={link} className={btn} type="submit">{props.label}</Link>
        : <button className={btn} type="submit">{props.label}</button>}

    </>
  )



>>>>>>> 3b121aca6b91219cb46ab5af7311054340c5309b
}

export default Button