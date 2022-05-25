
import './CardInfo.css'

function CardInfo(props) {

    
    return (
        <>
            <div class="col-12 border mb-2 mocall">
                <li id={props.id}>
                    <label className="margin" for={props.id}>Nome: {props.nome}</label>
                    <label className="margin" for={props.id}>Nº {props.numero}</label>
                    <label className="margin" for={props.id}>Val: {props.mes}/{props.ano}</label>
                    <div className="col-12 col-sm-4   ">
                    <button onClick={() =>  props.delete(props.id)} className="btn-delete"> Excluir</button>
                </div>
                </li>
            </div>
        </>
    )
}

export default CardInfo