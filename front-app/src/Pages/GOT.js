

import Grid from "../components/Grid/Grid"
import Colum from "../components/Grid/Colum"
import ListGroup from "../components/ListGroup"
import DefaultTemplateHouses from "../components/GotHistory/Houses/2Greyjoy"
import HouseTyrell from "../components/GotHistory/Houses/1HouseTyrell"
import Greyjoy from "../components/GotHistory/Houses/2Greyjoy"


const GOT = () => {
    return(
       <>


            <br/> <br/> <br/>
            <h1 className="card-title text-center">Universo Game Oh Thrones (As Crônicas de Gelo e Fogo)</h1>
            <h5 className="card-text text-center"> A Song of Ice and Fire) é uma série de livros de fantasia épica escrita pelo romancista e roteirista norte-americano <br/> <br/>
            </h5>


            <Grid>

                <Colum>
                    <ListGroup>
                        <a href="#HistoriaTerraMedia" class="list-group-item list-group-item-action">História</a>
                        <a href="#PovosDaTerraMedia" class="list-group-item list-group-item-action">Personagens</a>
                        <a href="#Linguas" class="list-group-item list-group-item-action">Casas</a>
                        <a href="#OSilmarillion" class="list-group-item list-group-item-action">Série de TV</a>
                    </ListGroup>
                    <br/>
                </Colum>
                <br/>
                <Colum>
                    <ListGroup>
                        <a href="#MagosAzuis" class="list-group-item list-group-item-action">Livros</a>
                        <a href="#Elfos" class="list-group-item list-group-item-action">Cultura</a>
                        <a href="#FilhosDeIluvatar" class="list-group-item list-group-item-action">Temas e inspiração</a>
                        <a href="#Numenor" class="list-group-item list-group-item-action">Outras obras</a>
                        
                    </ListGroup>
                    <br/>
                </Colum>


                
            </Grid>
            
        







       </>
        


    )
}

export default GOT