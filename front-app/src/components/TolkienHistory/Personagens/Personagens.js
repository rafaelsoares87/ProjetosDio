import Colum from "../../Grid/Colum"
import Grid from "../../Grid/Grid"
import Aragorn from "./Aragorn"
import ArwenUndomiel from "./ArwenUndomiel"
import Bilbo from "./Bilbo"
import Feanor from "./Feanor"
import Frodo from "./Frodo"
import Galadriel from "./Galadriel"
import Gandalf from "./Gandalf"
import LuthienEBeren from "./LuthienEBeren"
import Maglor from "./Maglor"





const Personagens = () =>{
    return(
    <>
      <div className='PersonagensPrincipais'>  
        <h2 className='TitleAccordion card-title  text-center PersonTitle'>Principais Personagens da idade Média em Senhor dos Anéis</h2>
        <Grid>
                <Colum>
                 <div  className="card-group">
                     <Feanor/>
                       
                </div>
                     
                 </Colum>
                 <Colum>
                    <div  className="card-group">
                       <Maglor/>
                    </div>
                     
                 </Colum>
                 <Colum>
                     
                 <div  className="card-group">
                       <LuthienEBeren/>
 
                    </div>
 
                 </Colum>
    
             </Grid>
      </div> 
      <hr/>
      <div className='PersonagensPrincipais'>  
        
        <Grid>
                <Colum>
                 <div  className="card-group">
                     <Galadriel/>
                       
                </div>
                     
                 </Colum>
                 <Colum>
                    <div  className="card-group">
                       <ArwenUndomiel/>
                    </div>
                     
                 </Colum>
                 <Colum>
                     
                 <div  className="card-group">
                       <Aragorn/>
 
                    </div>
 
                 </Colum>
    
             </Grid>
      </div> 
      <hr/>
      <div className='PersonagensPrincipais'>  
        
        <Grid>
                <Colum>
                 <div  className="card-group">
                     <Frodo/>
                       
                </div>
                     
                 </Colum>
                 <Colum>
                    <div  className="card-group">
                       <Bilbo/>
                    </div>
                     
                 </Colum>
                 <Colum>
                     
                 <div  className="card-group">
                       <Gandalf/>
 
                    </div>
 
                 </Colum>
    
             </Grid>
      </div> 
      <hr/>
    </>      
    )

} 

export default Personagens