import Collapse1 from "../../Accordion/AccordionCollapse/Collapse1"
import Collapse2 from "../../Accordion/AccordionCollapse/Collapse2"
import Collapse3 from "../../Accordion/AccordionCollapse/Collapse3"
import Collapse4 from "../../Accordion/AccordionCollapse/Collapse4"
import BtnAcordion1 from "../../Accordion/ButtonAcordion/ButtonAcordion1"
import BtnAcordion2 from "../../Accordion/ButtonAcordion/ButtonAcordion2"
import BtnAcordion3 from "../../Accordion/ButtonAcordion/ButtonAcordion3"
import BtnAcordion4 from "../../Accordion/ButtonAcordion/ButtonAcordion4"
import Accordion from "../../Accordion/Index"
import BlockquoteSW from "../BlockquoteSW/BlockquoteSW"
import Cronology from "../Cronologia/Cronology"
import Cronology2 from "../Cronologia/Cronology2"
import SWCulture from "../Culture/SWCulture"
import SWPersons1 from "../Persons/SWPersons1"
import SWPersons2 from "../Persons/SWPersons2"
import SWPersons3 from "../Persons/SWPersons3"
import SWHistory from "../StarWarsHistory/SWHistory"

const StarWAcordion = ()=>{
     return(<Accordion>
        <div className="TitleAccordion"><BtnAcordion1>História</BtnAcordion1></div>
        <Collapse1>
            <SWHistory/>
            <BlockquoteSW/>
        </Collapse1>

        <div className="TitleAccordion"> <BtnAcordion2>Principais Personagens</BtnAcordion2> </div>
        <Collapse2>
            <SWPersons1/>
            <SWPersons2/>
            <SWPersons3/>
            <BlockquoteSW/>
        </Collapse2>

        <div className="TitleAccordion"> <BtnAcordion3>Impacto Cultural de Star Wars</BtnAcordion3></div>
        <Collapse3>
            <SWCulture/>
            <BlockquoteSW/>
        </Collapse3>

        <div className="TitleAccordion"><BtnAcordion4>Cronologia</BtnAcordion4></div>
        <Collapse4>
            <Cronology/>
            <Cronology2/>
            <BlockquoteSW/>
        </Collapse4>
    </Accordion>)
}
 export default StarWAcordion