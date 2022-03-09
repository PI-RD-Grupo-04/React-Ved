import React, { useState } from 'react'
import './Button.css'


function Button(props) {

    let btn = 'btn-success'
    btn += props.card ? 'btn-add-card' : ''
    btn += props.suporte ? 'btn-suport' : ''
    btn += props.delete ? 'btn-delete' : ''
    

    return (
      <>
        <li>
          <button className="w-100 ml-0 btn-success btn-lg btnPlano mb-3" type="submit">Assine</button>
        </li>
      </>
    )
}

export default Button