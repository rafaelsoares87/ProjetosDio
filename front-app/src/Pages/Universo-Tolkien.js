import Grid from "../components/Grid/Grid"
import Colum from "../components/Grid/Colum"

import Image from "../Image/IdadeMedia/Feanor.jpg"

import AcordionTolkien from "../components/TolkienHistory/AcordionTolkien"





const Tolkien = () => {
    return(
        <>
            
            <br/>
            <h1 className="card-title text-center">Terra Média - Universo de Tolkien</h1>
            <h5 className="card-text text-center"> Terra Média é a terra antiga e fictícia de J. R. R. Tolkien,<br/>
             onde a maioria dos contos do seu imaginário ocorrem. <br/> <br/>
            </h5>

                <AcordionTolkien/>

            <h2 class="card-title  text-center">Principais Personagens da idade Média em Senhor dos Anéis</h2>
            <br/>
            <br/>
            <Grid>
       <Colum>
                <div  className="card-group">
                       <div className="card">
                      
                        <div className="card-body">
                            <h5 className="card-title">Fëanor</h5>
                            
                            <p className="card-text">Fëanor é um personagem fictício do legendário de J. R. R. Tolkien que desempenha um papel importante em O Silmarillion como o criador das três Silmarils, as joias habilmente forjadas que dão ao livro seu nome e tema. Ele era o filho mais velho de Finwë, o Rei dos Noldor, e sua primeira esposa, Míriel Serindë.</p>

                        </div>
                        <img src={Image} class="card-img-top" alt="..."/>

                       </div>

                   </div>
                    
                </Colum>
                <Colum>
                   <div  className="card-group">
                       <div className="card">
                       <img src="https://cdna.artstation.com/p/assets/images/images/017/615/798/large/sara-morello-under-the-same-moon-maglor.jpg?1556706720" class="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Maglor</h5>
                            <p className="card-text">Maglor era o segundo filho de Fëanor e Nerdanel. Ele era o maior poeta e menestrel dos Noldor e possuía um temperamento gentil e calmo. Entre os sete irmãos somente Maglor, Caranthir e Curufin vieram a se casar, embora nenhuma informação sobre suas esposas foi dada.</p>

                        </div>

                       </div>

                   </div>
                    
                </Colum>
                <Colum>
                    
                <div  className="card-group">
                       <div className="card">
                       
                        <div className="card-body">
                            <h5 className="card-title">Lúthien e Beren </h5>
                            <p className="card-text"> Lúthien e Beren são personagens do mundo de fantasia da Terra-média, narrados pelo autor inglês J. R. R. Tolkien. Lúthien é uma elfa, filha de Thingol e Melian. Beren é um homem mortal. </p>

                        </div>
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0df9c88c-31ea-4a90-80a3-ff05e799d307/dcz8h4k-a08df98b-3817-4335-9f51-c07c7de00328.jpg/v1/fill/w_1024,h_1590,q_75,strp/thingol_and_melian_by_samo_art_dcz8h4k-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTU5MCIsInBhdGgiOiJcL2ZcLzBkZjljODhjLTMxZWEtNGE5MC04MGEzLWZmMDVlNzk5ZDMwN1wvZGN6OGg0ay1hMDhkZjk4Yi0zODE3LTQzMzUtOWY1MS1jMDdjN2RlMDAzMjguanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Yi9ldRVcx14GafmkcGxvNvkoFbmXsm9X3X0c6HoQbGU" class="card-img-top" alt="..."/>

                       </div>

                   </div>

                </Colum>
            </Grid>


        </>
    )
}

export default Tolkien