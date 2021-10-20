const Carrousel = (props) => {
    return(
        <>
            <div  className="carousel-inner">
                <div className="carousel-item active">
                    {props.children}
                </div>

            </div>
        </>
    )
}
export default Carrousel