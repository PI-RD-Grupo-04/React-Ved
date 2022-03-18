import "./Paragraph.css"


function Paragraph(props) {


    return (

        <div className="row">
            <p>
                {props.children }
            </p>

        </div>


    )





}
export default Paragraph