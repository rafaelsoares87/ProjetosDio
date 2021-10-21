
import './css/style.css'

import Navbar from "./components/Navbar";
import Routes from "./Routes/Routes";

import SocialNetWorks from './components/SocialNetworks';
import FooterPage from './components/FooterPage/index';






const App = ()=>{
  return(
    <>
      <header>
      <Navbar>
                <a className="navbar-brand" href="/">Universos Fantásticos</a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    

                    
                    
                  </ul>
                  
                  <form className='d-flex Margin'>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Pesquisar</button>
                  </form>
                  <SocialNetWorks/>

                  </div>
        </Navbar>
        

      </header>
      
      <Routes/>
      <FooterPage>
        
      </FooterPage>

     
    </>
  )
}

export default App;
