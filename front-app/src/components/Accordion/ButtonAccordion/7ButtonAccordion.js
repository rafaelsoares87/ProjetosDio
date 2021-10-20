const ButtonAccordion7 = (props)=>{
    return(
        <div className="accordion-item">
            <div class="accordion-header" id="flush-headingSeven">
                <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                    <h3>{props.children}</h3>
                </button>

            </div>

        </div>
    )
}
export default ButtonAccordion7