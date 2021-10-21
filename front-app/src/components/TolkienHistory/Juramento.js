import Grid from "../Grid/Grid"
import Colum from "../Grid/Colum"






const Juramento = ()=>{
    return( 
        <>

            <Grid>
                <h2 className="card-title  text-center">A Libertação do Juramento</h2>
                
                <Colum>
                    <div className="card-group">
                        <div className="card">
                            <div className="card-body">
                                <p className='card-text TextBody'>
                                    Em o Senhor dos Áneis - O Retorno do Rei, Aragorn foi até Erech e se apresentou como Legitimo
                                    Herdeiro de Isildur, e convocou os Eredrim a cumprirem o Juramento. Assim eles ajudaram
                                    na batalha do cerco à Gondor e Aragorn os desobrigou do Juramento e os libertou da Maldição 
                                    imposta por Isildur.
                                </p>

                                <blockquote class="blockquote mb-0">
                                    <p>Fontes e Referências</p>
                                    <footer class="blockquote-footer"> <cite title="Source Title">Wikipedia Bibliografia de J. R. R. Tolkien</cite></footer>
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
export default Juramento