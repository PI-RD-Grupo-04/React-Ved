
import React, { useState } from 'react'
function ButtonQty(props) {

    let delet = props.delete ? props.delete : null


    const [qty, setQty] = useState(0)

    // const [valorTotal, setValorTotal] = useState(props.valor * props.qty)

    const incremento =  () => { 

        setQty(qty + 1);
        
        
     }


     const decremento = () => {
        
        if(qty <= 0){
            setQty(0); 
        } else {
            setQty(qty - 1); 
        }

        
     } 

  function resu() {
      props.vl(props.preco, )
  }



    return (
        <>
            <div className="input-group w-100 h-100 ">
                <button onClick={incremento}  className="btn btn-outline-dark  btn-green btn-sm" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                    </svg> <i className="bi-caret-down" ></i>
                </button>
                <input type="text" className="form-control text-center border-dark " value={qty} />
                <button onClick={decremento}  className="btn btn-outline-dark btn-green btn-sm" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                    </svg> <i className="bi-caret-up" ></i>
                </button>
                {delet != null
                    ? <button className="btn btn-outline-danger border-dark btn-red btn-sm" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </button>
                    : null }



            </div>
        </>
    )

}

export default ButtonQty