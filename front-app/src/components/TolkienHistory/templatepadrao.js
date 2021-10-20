import Grid from "../Grid/Grid"
import Colum from "../Grid/Colum"






const Templatepadrao = ()=>{
    return( 
        <>

            <Grid>
                <h2 className="card-title  text-center">História da Terra Média</h2>
                
                <Colum>
                    <div className="card-group">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text"></p>
                                <img src="#" class="card-img-top" alt="Povos"></img> <br/> <br/>
                                <blockquote class="blockquote mb-0">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                </blockquote>

                            </div>

                        </div>

                    </div>
                </Colum>
            </Grid>

        </>
       

    )
}
export default Templatepadrao