const Collapse9 = (props) => {
    return(
        <div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    {props.children}

                </div>
        </div>
    )
}
export default Collapse9