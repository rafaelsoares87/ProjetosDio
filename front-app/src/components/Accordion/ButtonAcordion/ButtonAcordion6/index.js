const BtnAcordion6 = (props)=>{
    return(
        <div className="accordion-item">
            <div class="accordion-header" id="flush-headingSix">
                <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                    <h5>{props.children}</h5>
                </button>

            </div>

        </div>
    )
}
export default BtnAcordion6