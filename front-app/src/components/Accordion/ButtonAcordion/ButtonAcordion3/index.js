const BtnAcordion3 = (props)=>{
    return(
        <div className="accordion-item">
            <div class="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <h5>{props.children}</h5>
                </button>

            </div>

        </div>
    )
}
export default BtnAcordion3