import Collapse1 from "../../Accordion/AccordionCollapse/Collapse1"
import Collapse2 from "../../Accordion/AccordionCollapse/Collapse2"
import Collapse3 from "../../Accordion/AccordionCollapse/Collapse3"
import Collapse4 from "../../Accordion/AccordionCollapse/Collapse4"
import BtnAcordion1 from "../../Accordion/ButtonAcordion/ButtonAcordion1"
import BtnAcordion2 from "../../Accordion/ButtonAcordion/ButtonAcordion2"
import BtnAcordion3 from "../../Accordion/ButtonAcordion/ButtonAcordion3"
import BtnAcordion4 from "../../Accordion/ButtonAcordion/ButtonAcordion4"
import Accordion from "../../Accordion/Index"
import BlockquoteStrek from "../BlockquoteSTrek/BlackquoteStrek"
import STrekCulture from "../StarTrekCulture/STrekCulture"
import STrekHistory from "../StarTrekHistory/STrekeHistory"
import STrekFilms from "../STrekFilms/STrekFilms"
import STrekPersons1 from "../STrekPersons/STrekPersons1"
import STrekPersons2 from "../STrekPersons/STrekPersons2"



const StrekAcordion = ()=>{
    return(
        <Accordion>
            <BtnAcordion1>História</BtnAcordion1>
            <Collapse1>
                <STrekHistory/>
                <BlockquoteStrek/>
            </Collapse1>
            

            <BtnAcordion2>Principais Personagens</BtnAcordion2>

            <Collapse2>
                <STrekPersons1/>
                <STrekPersons2/>
                <BlockquoteStrek/>
                
            </Collapse2>

            <BtnAcordion3> Impacto Cultural </BtnAcordion3>
            <Collapse3>
                <STrekCulture/>
                <BlockquoteStrek/>
            </Collapse3>
            

            <BtnAcordion4>Filmes</BtnAcordion4>
            <Collapse4>
                <STrekFilms/>
                <BlockquoteStrek/>
            </Collapse4>
            
        
        </Accordion>
    )
  
            
            
            
        

    
}
export default StrekAcordion