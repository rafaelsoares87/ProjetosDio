const ButtonAccordionSeven = (props)=>{
    return(
        <div className="accordion-item">
            <div class="accordion-header" id="flush-headingEight">
                <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                    <h3>{props.children}</h3>
                </button>

            </div>

        </div>
    )
}
export default ButtonAccordionSeven