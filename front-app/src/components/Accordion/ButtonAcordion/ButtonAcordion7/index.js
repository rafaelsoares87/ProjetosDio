

const BtnAcordion7 = (props)=>{
    return(
        <div className="accordion-item">
            <div class="accordion-header" id="flush-headingSeven">
                <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                    <h5>{props.children}</h5>
                </button>

            </div>

        </div>
    )
}
export default BtnAcordion7