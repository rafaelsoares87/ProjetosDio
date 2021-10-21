const BtnAcordion5 = (props)=>{
    return(
        <div className="accordion-item">
            <div class="accordion-header" id="flush-headingFive">
                <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    <h5>{props.children}</h5>
                </button>

            </div>

        </div>
    )
}
export default BtnAcordion5