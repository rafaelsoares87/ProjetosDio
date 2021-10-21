
const Collapse1 = (props) => {
    return(
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    {props.children}

                </div>
        </div>
    )
}
export default Collapse1