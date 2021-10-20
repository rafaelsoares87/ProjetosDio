

import Menus from "./components/Navbar/Menus";
import Navbar from "./components/Navbar";




import Routes from "./Routes/Routes";






const App = ()=>{
  return(
    <>
    
        <Navbar>
                <a className="navbar-brand" href="/">Ontech Brasil</a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <Menus><a class="nav-link" href="/Empresa">Empresa</a></Menus>
                    <Menus><a class="nav-link" href="/Sobre">Sobre</a></Menus>
                    
                    
                  </ul>
                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Pesquisar</button>
                  </form>

                  </div>
        </Navbar>
        <br/>
        <br/>
        <Routes/>
        
        
        <br/>
          
        <br/>
        

     
     
     
     
    </>
  )
}

export default App;
