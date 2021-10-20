const CardBody = (props)=>{
    return(
        <div className="card-body">
                <p className="card-text">
                    {props.children}
                </p>
               
        </div>
    )
}
export default CardBody