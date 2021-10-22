

import Grid from "../components/Grid/Grid"
import Colum from "../components/Grid/Colum"
import ListGroup from "../components/ListGroup"
import Accordion from "../components/Accordion/Index"
import BtnAcordion1 from "../components/Accordion/ButtonAcordion/ButtonAcordion1"
import Collapse1 from "../components/Accordion/AccordionCollapse/Collapse1"
import BtnAcordion2 from "../components/Accordion/ButtonAcordion/ButtonAcordion2"
import Collapse2 from "../components/Accordion/AccordionCollapse/Collapse2"
import BtnAcordion3 from "../components/Accordion/ButtonAcordion/ButtonAcordion3"
import Collapse3 from "../components/Accordion/AccordionCollapse/Collapse3"
import BtnAcordion4 from "../components/Accordion/ButtonAcordion/ButtonAcordion4"
import Collapse4 from "../components/Accordion/AccordionCollapse/Collapse4"
import BtnAcordion5 from "../components/Accordion/ButtonAcordion/ButtonAcordion5"
import Collapse5 from "../components/Accordion/AccordionCollapse/Collapse5"
import BtnAcordion6 from "../components/Accordion/ButtonAcordion/ButtonAcordion6"
import Collapse6 from "../components/Accordion/AccordionCollapse/Collapse6"
import BtnAcordion7 from "../components/Accordion/ButtonAcordion/ButtonAcordion7"
import Collapse7 from "../components/Accordion/AccordionCollapse/Collapse7"
import BtnAcordion8 from "../components/Accordion/ButtonAcordion/ButtonAcordion8"
import Collapse8 from "../components/Accordion/AccordionCollapse/Collapse8"
import HistoryGoT from "../components/GotHistory/History/HistoryGoT"




const GOT = () => {
    return(
       <>


            <br/> <br/> <br/>
            <h1 className="card-title text-center">(As Crônicas de Gelo e Fogo)</h1>
                    <p className="card-text text-center"> 
                        A Song of Ice and Fire (Brasil: As Crônicas de Gelo e Fogo /Portugal: 
                        As Crónicas de Gelo e Fogo) é uma série de livros de alta fantasia escrita pelo romancista
                        e roteirista norte-americano George R. R. Martin.
                    </p>


            <Grid>

                <Colum>
                    <ListGroup>
                        <a href='#Historia' class="list-group-item list-group-item-action">História</a>
                        <a href='#Personagens' class="list-group-item list-group-item-action">Personagens</a>
                        <a href='#Casas' class="list-group-item list-group-item-action">Casas</a>
                        <a href="#SerieTv" class="list-group-item list-group-item-action">Série de TV</a>
                    </ListGroup>
                    <br/>
                </Colum>
                <br/>
                <Colum>
                    <ListGroup>
                        <a href='#livros' class="list-group-item list-group-item-action">Livros</a>
                        <a href='#Cultura' class="list-group-item list-group-item-action">Cultura</a>
                        <a href='#temas' class="list-group-item list-group-item-action">Temas e inspiração</a>
                        <a href='#obras' class="list-group-item list-group-item-action">Outras obras</a>
                        
                    </ListGroup>
                    <br/>
                </Colum>


                
            </Grid>
            <hr/>
            <Accordion>
                <div id='Historia' className='TitleAccordion'>
                    <BtnAcordion1>História</BtnAcordion1>
                    <Collapse1>
                            <HistoryGoT></HistoryGoT>
                    </Collapse1>
                </div>
                <div id='Personagens'className='TitleAccordion'>
                    <BtnAcordion2>Principais Personagens</BtnAcordion2>
                    <Collapse2></Collapse2>
                </div>
                <div id='Casas'className='TitleAccordion'>
                    <BtnAcordion3>As prinncipais casas</BtnAcordion3>
                    <Collapse3></Collapse3>
                </div>
                <div id='SerieTv'className='TitleAccordion'>
                    <BtnAcordion4>Série de TV</BtnAcordion4>
                    <Collapse4></Collapse4>
                </div>
                <div id='livros'className='TitleAccordion'>
                    <BtnAcordion5>Obras literárias</BtnAcordion5>
                    <Collapse5></Collapse5>
                </div>
                <div id='Cultura'className='TitleAccordion'>
                    <BtnAcordion6>As Cronicas de Gelo e Fog na cultura popular</BtnAcordion6>
                    <Collapse6></Collapse6>
                </div>
                <div id='temas'className='TitleAccordion'>
                    <BtnAcordion7>Principais Temas e inspiração</BtnAcordion7>
                    <Collapse7></Collapse7>
                </div>
                <div id='obras'className='TitleAccordion'>
                    <BtnAcordion8>Outras obras derivadas</BtnAcordion8>
                    <Collapse8></Collapse8>
                </div>
                
                
                
            </Accordion>
            
            
        







       </>
        


    )
}

export default GOT