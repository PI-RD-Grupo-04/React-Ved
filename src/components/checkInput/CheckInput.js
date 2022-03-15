import './CheckInput.css'

function CheckInput(props) {

    let label = props.label ? <label className="form-check-label" for={props.id} >
        {props.label} <b>{props.frete}</b>
    </label> : null


    return (
        <>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id={props.id} />
                {label != null
                    ? label
                    : props.children}
            </div>
        </>
    )
}

export default CheckInput