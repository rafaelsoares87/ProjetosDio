
import HistoriaTerraMedia from "../HistoriaTerraMedia"
import PovosDaTerraMedia from "../PovosDaTerraMedia"
import Linguas from "../Linguas"
import OSilmarillion from "../OSilmarillion"
import MagosAzuis from "../MagosAzuis"

import Elfos from "../Elfos"
import FilhosDeIlúvatar from "../FilhosDeIlúvatar"
import Numenor from "../Numenor"
import Juramento from "../Juramento"



//Modulos Acordion
import Accordion from "../../Accordion/Index"
import Collapse1 from "../../Accordion/AccordionCollapse/Collapse1"

import Collapse2 from "../../Accordion/AccordionCollapse/Collapse2"
import Collapse3 from "../../Accordion/AccordionCollapse/Collapse3"
import Collapse4 from "../../Accordion/AccordionCollapse/Collapse4"
import Collapse5 from "../../Accordion/AccordionCollapse/Collapse5"
import Collapse6 from "../../Accordion/AccordionCollapse/Collapse6"
import Collapse7 from "../../Accordion/AccordionCollapse/Collapse7"
import Collapse8 from "../../Accordion/AccordionCollapse/Collapse8"
import Collapse9 from "../../Accordion/AccordionCollapse/Collapse9"

//Modulos Itens-botões Acordion
import BtnAcordion1 from "../../Accordion/ButtonAcordion/ButtonAcordion1"
import BtnAcordion2 from "../../Accordion/ButtonAcordion/ButtonAcordion2"
import BtnAcordion3 from "../../Accordion/ButtonAcordion/ButtonAcordion3"
import BtnAcordion4 from "../../Accordion/ButtonAcordion/ButtonAcordion4"
import BtnAcordion5 from "../../Accordion/ButtonAcordion/ButtonAcordion5"
import BtnAcordion6 from "../../Accordion/ButtonAcordion/ButtonAcordion6"
import BtnAcordion7 from "../../Accordion/ButtonAcordion/ButtonAcordion7"
import BtnAcordion8 from "../../Accordion/ButtonAcordion/ButtonAcordion8"
import BtnAcordion9 from "../../Accordion/ButtonAcordion/ButtonAcordion9"






const AcordionTolkien = ()=>{
    return(
        <div className='TitleAccordion'>
            <Accordion>
                <BtnAcordion2>Historia da Terra Média</BtnAcordion2>
                <Collapse2><HistoriaTerraMedia/></Collapse2>
                
            </Accordion>

            <Accordion>
                <BtnAcordion1>Povos Da TerraMedia</BtnAcordion1>
                
                <Collapse1><PovosDaTerraMedia /></Collapse1>
            </Accordion>

            <Accordion>
                <BtnAcordion3>Linguas da Terra Média</BtnAcordion3>
                    <Collapse3><Linguas/>   </Collapse3>
                </Accordion>

            <Accordion>
                <BtnAcordion5>Magos Azuis</BtnAcordion5>
                <Collapse5><MagosAzuis/></Collapse5>
            </Accordion>

            <Accordion>
                <BtnAcordion3>Linguas da Terra Média</BtnAcordion3>
                <Collapse3><Linguas/>   </Collapse3>
            </Accordion>
        
            <Accordion>
                <BtnAcordion6>Elfos</BtnAcordion6>
                <Collapse6><Elfos /></Collapse6>
            </Accordion>


            <Accordion>
                <BtnAcordion7>Filhos De Iluvatar</BtnAcordion7>
                <Collapse7><FilhosDeIlúvatar /></Collapse7>
            </Accordion>
            
            <Accordion>
                <BtnAcordion8>Númenor</BtnAcordion8>
                <Collapse8> <Numenor /></Collapse8>
            </Accordion>

            <Accordion>
                <BtnAcordion9>A Libertação do Juramento</BtnAcordion9>
                <Collapse9>  <Juramento/></Collapse9>
            </Accordion>

            
        
    </div>
    )
}
export default AcordionTolkien