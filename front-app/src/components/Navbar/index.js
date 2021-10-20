const Navbar = (props) => {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">   
            {props.children}
        </div>
      </nav>
    )
}

export default Navbar