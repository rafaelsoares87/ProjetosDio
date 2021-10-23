import Collapse1 from "../../Accordion/AccordionCollapse/Collapse1"
import Collapse2 from "../../Accordion/AccordionCollapse/Collapse2"
import Collapse3 from "../../Accordion/AccordionCollapse/Collapse3"
import Collapse4 from "../../Accordion/AccordionCollapse/Collapse4"
import BtnAcordion1 from "../../Accordion/ButtonAcordion/ButtonAcordion1"
import BtnAcordion2 from "../../Accordion/ButtonAcordion/ButtonAcordion2"
import BtnAcordion3 from "../../Accordion/ButtonAcordion/ButtonAcordion3"
import BtnAcordion4 from "../../Accordion/ButtonAcordion/ButtonAcordion4"
import Accordion from "../../Accordion/Index"
import HPPersons1 from "../HPPersons/HPPersons"
import HPPersons3 from "../HPPersons/HPPersons3"
import HPPersons2 from "../HPPersons/HPPersons2"
import HPCinema1 from "../HPCinema/HPCinema1"
import HPCinema2 from "../HPCinema/HPCinema2"
import HPCulture from "../HPCulture/HPCulture"
import HPHistory from "../HPHistory/HPHistory1"
import Blockquote from "../../Blockquote/Blockquote"

const HPAcordion = ()=>{
    return(
        <>
            <Accordion>
                <div className="TitleAccordion"><BtnAcordion1>História</BtnAcordion1> </div>
                
                <Collapse1>
                    <HPHistory/>
                </Collapse1>
                <div className="TitleAccordion"><BtnAcordion2>Personagens Principais</BtnAcordion2></div>

                
                <Collapse2>
                    <HPPersons1/>
                    <HPPersons2/>
                    <HPPersons3/>
                    <Blockquote/>
                </Collapse2>
                <div className="TitleAccordion"><BtnAcordion3>Cinema</BtnAcordion3></div>

                
                <Collapse3>
                    <HPCinema1/>
                    <HPCinema2/>
                    <Blockquote/>
                </Collapse3>
                <div className="TitleAccordion"><BtnAcordion4>Harry Potter na cultura popular </BtnAcordion4></div>

                
                <Collapse4> 
                    <HPCulture/>
                    <Blockquote/>
                </Collapse4>





            </Accordion>
            
            


        </>

    )
}
export default HPAcordion