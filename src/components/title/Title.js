import "./Title.css"


function Title(props){
   
    let text = "titulo "

    

    return(
        <>
       
       <h2 className={text}> {props.label}</h2>

        </>
    )
}
export default Title
