import Collapse1 from "../../Accordion/AccordionCollapse/Collapse1"
import Collapse2 from "../../Accordion/AccordionCollapse/Collapse2"
import Collapse3 from "../../Accordion/AccordionCollapse/Collapse3"
import BtnAcordion1 from "../../Accordion/ButtonAcordion/ButtonAcordion1"
import BtnAcordion2 from "../../Accordion/ButtonAcordion/ButtonAcordion2"
import BtnAcordion3 from "../../Accordion/ButtonAcordion/ButtonAcordion3"
import Accordion from "../../Accordion/Index"
import Blockquote from "../../Blockquote/Blockquote"
import BlockquoteStrek from "../../StarTrek/BlockquoteSTrek/BlackquoteStrek"
import HitHistory from "../HitcHistory"
import HitCulture from "../HitCulture"
import HitPersons from "../HitPersons"




const HitAccordion = () => {
    return(
            <Accordion>
                
                <BtnAcordion1>História</BtnAcordion1>
                <Collapse1>
                    <HitHistory/>
                    <BlockquoteStrek/>
                    
                    
                </Collapse1>

                <BtnAcordion2>Personagens</BtnAcordion2>
                <Collapse2>
                    <HitPersons/>
                    <BlockquoteStrek/>
                </Collapse2>

                <BtnAcordion3>Trilogia</BtnAcordion3>
                <Collapse3>
                    <HitCulture/>
                    <BlockquoteStrek/>
                </Collapse3>
                

                

                
               
                
                






            </Accordion>
    

    )
}
export default HitAccordion