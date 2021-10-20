const ButtonAccordion5 = (props)=>{
    return(
        <div className="accordion-item">
            <div class="accordion-header" id="flush-headingFive">
                <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    <h3>{props.children}</h3>
                </button>

            </div>

        </div>
    )
}
export default ButtonAccordion5