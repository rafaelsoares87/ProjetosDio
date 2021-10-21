const Collapse3 = (props) => {
    return(
        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    {props.children}

                </div>
        </div>
    )
}
export default Collapse3