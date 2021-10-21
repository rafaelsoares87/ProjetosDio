const BtnAcordion9 = (props)=>{
    return(
        <div className="accordion-item">
            <div class="accordion-header" id="flush-headingNine">
                <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                    <h5>{props.children}</h5>
                </button>

            </div>

        </div>
    )
}
export default BtnAcordion9