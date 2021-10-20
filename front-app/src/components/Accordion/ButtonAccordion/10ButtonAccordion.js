const ButtonAccordion10 = (props)=>{
    return(
        <div className="accordion-item">
            <div class="accordion-header" id="flush-headingTen">
                <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                    <h3>{props.children}</h3>
                </button>

            </div>

        </div>
    )
}
export default ButtonAccordion10