const Collapse4 = (props) => {
    return(
        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    {props.children}

                </div>
        </div>
    )
}
export default Collapse4