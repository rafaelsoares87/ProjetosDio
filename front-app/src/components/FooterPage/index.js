import Colum from "../Grid/Colum"
import Grid from "../Grid/Grid"

import SocialNetWorks from "../SocialNetworks"


const FooterPage = ()=>{
    return(
       <footer className='card-footer PageFooter'>

           <Grid>
               <Colum>
                    

               </Colum>
               <Colum>
                   <SocialNetWorks/>    
               </Colum>
               <Colum>
                    
                    
               </Colum>
                    
               
           </Grid>
           <br/> <br/>
           <p className='text-center' style={{fontSize: '14px', fontWeight: 'bold'}}>Projetos idealizado por meio de Bootcampo da Digital Innovation One</p>
           
           

       </footer>
    )
}
export default FooterPage