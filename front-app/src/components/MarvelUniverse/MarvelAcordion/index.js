
import Collapse1 from "../../Accordion/AccordionCollapse/Collapse1"
import Collapse2 from "../../Accordion/AccordionCollapse/Collapse2"
import Collapse3 from "../../Accordion/AccordionCollapse/Collapse3"
import Collapse4 from "../../Accordion/AccordionCollapse/Collapse4"
import BtnAcordion1 from "../../Accordion/ButtonAcordion/ButtonAcordion1"
import BtnAcordion2 from "../../Accordion/ButtonAcordion/ButtonAcordion2"
import BtnAcordion3 from "../../Accordion/ButtonAcordion/ButtonAcordion3"
import BtnAcordion4 from "../../Accordion/ButtonAcordion/ButtonAcordion4"
import Accordion from "../../Accordion/Index"
import BlockquoteSW from "../../StarWars/BlockquoteSW/BlockquoteSW"
import MarvelHeroes from "../HeroesMarvel"
import MarvelHistory from "../HistoryMarvel"

import MarvelReal from "../MarvelReal"
import MarvelVilains from "../VillainsMarvel"

const MarvelAcordion = () =>{
    return(
        <div className="card">
                <Accordion>
                    <div className="TitleAccordion"><BtnAcordion1>História</BtnAcordion1></div>
                    
                    <Collapse1>
                        <MarvelHistory/>
                        <BlockquoteSW/>
                        
                        
                    </Collapse1>
                    <div className="TitleAccordion"><BtnAcordion2> Principais Heróis</BtnAcordion2></div>

                    
                    <Collapse2>
                        <MarvelHeroes/>
                        <BlockquoteSW/>
                    </Collapse2>
                    <div className="TitleAccordion"> <BtnAcordion3> Principais Vilões</BtnAcordion3></div>

                   
                    <Collapse3> 
                        <MarvelVilains/>
                        <BlockquoteSW/>
                    </Collapse3>
                    <div className="TitleAccordion"><BtnAcordion4>Relação com o Mundo Real</BtnAcordion4></div>

                    
                    <Collapse4>
                        <MarvelReal/>
                        <BlockquoteSW/>
                    </Collapse4>



                </Accordion>



        </div>
    )
}

export default MarvelAcordion