import Collapse1 from "../../Accordion/AccordionCollapse/Collapse1"
import Collapse2 from "../../Accordion/AccordionCollapse/Collapse2"
import Collapse3 from "../../Accordion/AccordionCollapse/Collapse3"
import Collapse4 from "../../Accordion/AccordionCollapse/Collapse4"
import BtnAcordion1 from "../../Accordion/ButtonAcordion/ButtonAcordion1"
import BtnAcordion2 from "../../Accordion/ButtonAcordion/ButtonAcordion2"
import BtnAcordion3 from "../../Accordion/ButtonAcordion/ButtonAcordion3"
import BtnAcordion4 from "../../Accordion/ButtonAcordion/ButtonAcordion4"
import Accordion from "../../Accordion/Index"
import BlockquoteStrek from "../../StarTrek/BlockquoteSTrek/BlackquoteStrek"
import HistoryDC from "../DCHistory"
import DimensionDc from "../DimensoesDC"
import GeographyDC from "../GeographyDC"
import RacesDc from "../RaçasDC"

const AcordionDC = () =>{
    return(
        
        <Accordion>
            <BtnAcordion1>História do Universo DC</BtnAcordion1>
            <Collapse1>
                <HistoryDC/>
                <BlockquoteStrek/>
            </Collapse1>

            <BtnAcordion2>Dimensões</BtnAcordion2>
            <Collapse2>
                <DimensionDc/>
                <BlockquoteStrek/>
            </Collapse2>

            <BtnAcordion3>Raças</BtnAcordion3>
            <Collapse3>
                <RacesDc/>
                <BlockquoteStrek/>
            </Collapse3>

            <BtnAcordion4>Geografia do Universo DC</BtnAcordion4>
            <Collapse4>
                <GeographyDC/>
                <BlockquoteStrek/>
            </Collapse4>



        </Accordion>
    
    )
}
export default AcordionDC