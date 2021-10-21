const Accordion = (props) =>{
    return(
        <div className="accordion-item">
            <div className="accordion accordion-flush " id="accordionExample">
                {props.children}

            </div>
        </div>
       
    )
}
export default Accordion