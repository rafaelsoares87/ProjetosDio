const CardHeader = (props)=>{
    return(
        <div className="card text-center">
            <h2 className="card-title">
                {props.children}
            </h2>
                
        </div>
    )
}
export default CardHeader