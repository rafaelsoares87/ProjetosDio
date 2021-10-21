import Grid from "../Grid/Grid"
import Colum from "../Grid/Colum"






const Linguas = ()=>{
    return( 
        <>

            <Grid>
                <h2 className="card-title  text-center">Linguas</h2>
                
                <Colum>
                    <div className="card-group">
                        <div className="card">
                            <div className="card-body">
                                <p className='card-text TextBody'>
                                    Originalmente, Tolkien começou a escrever O Silmarillion como uma derivação dos seus
                                    projectos de construção de linguagens. Delineou duas línguas élficas principais,
                                    que mais tarde ficariam conhecidas por Quenya, falada pelos Vanyar, pelos Noldor e
                                    alguns Teleri, e o Sindarin, falada pelos Elfos que permaneceram em Beleriand
                                    (ver abaixo). Estas línguas estavam relacionadas, e considera-se que sejam um
                                    postulado da forma ancestral de ambas, o eldarin comum.
                                <br/>
                                <br/>
                                    Outros idiomas do mundo incluem:
                                <br/>
                                
                                    <ul>
                                        <li>Adûnaico - falada pelos numenorianos.</li>
                                        <li>Língua Negra - concebida por Sauron para seus escravos.</li>
                                        <li>Khuzdul - falada pelos Anões.</li>
                                        <li>Rohirric - falado pelos Rohirrim - representado n'O Senhor dos Anéis pelo inglês antigo.</li>
                                        <li>Westron - o 'Idioma Comum' - representado pela língua inglesa.</li>
                                        <li>Valarin - a linguagem dos Ainur.</li>
                                        <li>Entês - falada pelos ents.</li>
                                        <li>Orkish - a língua proíbida de Mordor</li>
                                    </ul>

                                </p>
                                
                                <blockquote class="blockquote mb-0">
                                    <p>Fontes e Referências</p>
                                    <footer class="blockquote-footer">Fonte: <cite title="Source Title">Wikipedia</cite></footer>
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
export default Linguas