import Grid from "../Grid/Grid"
import Colum from "../Grid/Colum"






const Numenor = ()=>{
    return( 
        <>

            <Grid>
                <h2 className="card-title  text-center">Númenor</h2>
                
                <Colum>
                    <div className="card-group">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">
                                        Númenor é um lugar fictício das obras de J. R. R. Tolkien. Foi uma grande ilha ou
                                        continente situada nos Grandes Mares a oeste da Terra Média, o principal 
                                        cenário dos escritos do autor, e era conhecida por ser o maior reino dos Homens.
                                        No entanto, a interrupção dos serviços de Eru Ilúvatar e rebelião contra os Valar
                                        de seus habitantes levaram à queda da ilha e morte da maioria de sua população.
                                    <br/>
                                    <br/>



                                </p>
                                <img src="https://www.planoaberto.com.br/wp-content/uploads/2017/07/numenor-mapa.jpg" class="card-img-top" alt="Númenor"></img> <br/> <br/>
                                <blockquote class="blockquote mb-0">
                                    <p>Fontes e Referências</p>
                                    <footer class="blockquote-footer">Fonte: <cite title="Source Title">Wikipedia Bibliografia de J. R. R. Tolkien</cite></footer>
                                </blockquote>

                            </div>

                        </div>

                    </div>
                </Colum>
            </Grid>
            <br/>
            <br/>
            <br/>

        </>
        
       

    )
}
export default Numenor