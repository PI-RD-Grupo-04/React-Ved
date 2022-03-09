import React, { useState } from 'react'
import './Button.css'


function Button(props) {

    let btn = 'w-100 ml-0 btn-lg mb-3 '
    btn += props.card ? 'btn-add-card ' : ''
    btn += props.suporte ? 'btn-suport ' : ''
    btn += props.delete ? 'btn-delete ' : ''
    btn += props.success ? 'btn-success ' : ''
    btn += props.plans ? 'btnPlano ' : ''
    

    return (
      <>
        
          <button className={btn} type="submit">{props.label}</button>
        
      </>
    )
}

export default Button