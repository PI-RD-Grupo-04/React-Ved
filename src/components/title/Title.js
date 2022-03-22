import "./Title.css"


function Title(props) {

    let text = "titulo "
    text = props.sub ? 'sub-title' : 'titulo '



    return (
        <>
            {props.sub != null
                ? <h3 className={text}>{props.children} </h3>
                : <h2 className={text}> {props.label}</h2>}
        </>
    )
}
export default Title
