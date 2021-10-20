import Grid from "../Grid/Grid"
import Colum from "../Grid/Colum"
import HistoriaTerraMedia from "../TolkienHistory/HistoriaTerraMedia"






const HistoryGoT = ()=>{
    return( 
        <>

            <Grid>
                <h2 className="card-title  text-center">História</h2>
                
                <Colum>
                    <div className="card-group">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">
                                    








                                </p>
                                <img src="#" class="card-img-top" alt="Povos"></img> <br/> <br/>
                                <blockquote class="blockquote mb-0">
                                    <p>Fontes e referecias.</p>
                                    <footer class="blockquote-footer"><cite title="Source Title">Wikipedia, Wiki Gelo e Fogo</cite></footer>
                                </blockquote>

                            </div>

                        </div>

                    </div>
                </Colum>
            </Grid>

        </>
       

    )
}
export default HistoryGoT