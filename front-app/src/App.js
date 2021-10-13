import Home from "./components/Home";
import Item from "./Item";

const App = ()=>{
  return(
    <>
      <div className="container">
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">OnTech</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                     <Home/>
                     <Item>Nossa Empresa</Item>
                     <Item>Nossos valores</Item>
                     <Item>Nossa Gente</Item>
                    
                     

                     
                        
                  </ul>
                </div>
            </div>
          </nav>
      </div>
    </>
  )
}

export default App;
