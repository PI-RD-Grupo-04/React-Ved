import CheckInput from '../checkInput/CheckInput'
import './CardInfo.css'

function CardInfo(props) {

    return (
        <>
            <div class="col-12 border mb-2">
                <CheckInput id={props.id}>
                    <label className="margin" for={props.id}>Nome: {props.nome}</label>
                    <label className="margin" for={props.id}>Nº {props.numero}</label>
                    <label className="margin" for={props.id}>Val: {props.mes}/{props.ano}</label>
                </CheckInput>
            </div>
        </>
    )
}

export default CardInfo