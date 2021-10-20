const ButtonAccordion4 = (props)=>{
    return(
        <div className="accordion-item">
            <div class="accordion-header" id="flush-headingFour">
                <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    <h3>{props.children}</h3>
                </button>

            </div>

        </div>
    )
}
export default ButtonAccordion4