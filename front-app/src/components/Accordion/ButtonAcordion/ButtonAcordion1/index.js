const BtnAcordion1 = (props)=>{
    return(
        <div className="accordion-item ">
            <div class="accordion-header" id="flush-headingOne " >
                <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <h5>{props.children}</h5>
                </button>

            </div>

        </div>
    )
}
export default BtnAcordion1