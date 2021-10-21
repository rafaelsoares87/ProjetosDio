import Grid from "../Grid/Grid"
import Colum from "../Grid/Colum"






const Elfos = ()=>{
    return( 
        <>

            <Grid>
                <h2 className="card-title  text-center">Elfos</h2>
                
                <Colum>
                    <div className="card-group">
                        <div className="card">
                            <div className="card-body">
                                <p className='card-text TextBody'>
                                        Nas obras de J. R. R. Tolkien, Elfos, auto-denominados Quendi, são uma das raças da Terra Média,
                                        baseados nas criaturas lendárias da Mitologia nórdica. São uma raça que, juntamente com os homens
                                        formam os "Filhos de Ilúvatar". Eles aparecem em O Hobbit e O Senhor dos Anéis, mas a sua história
                                        complexa é descrito mais detalhadamente em O Silmarillion. Tolkien estava escrevendo sobre elfos
                                        muito antes de publicar O Hobbit.
                                    <br/>
                                    <br/>
                                        Os Elfos são descritos como altos e belos, parecidos com os Valar
                                        (espécie de anjos), só que menores em estatura e poder, e são imortais, 
                                        pelos menos enquanto o Mundo, chamado Arda, existir. Não envelhecem nem
                                        adoecem, e se forem mortalmente feridos ou se sofrerem um grande desgosto
                                        seu corpo morre, mas seu espírito sobrevive sendo então enviado para as
                                        Mansões de Mandos onde permanece até poder reencarnar, em um corpo
                                        idêntico e com as mesmas lembranças. Um direito que os elfos têm é o
                                        de ir, se assim desejarem, para Valinor, no continente sagrado de Aman,
                                        destino esse vedado aos mortais.
                                    




                                </p>
                                <img src="https://i.pinimg.com/originals/43/49/cb/4349cb0d84859da39192700c0d91cde9.jpg" class="card-img-top" alt="elfos"></img> <br/> <br/>
                                <blockquote class="blockquote mb-0">
                                    <p>Fontes e Referências.</p>
                                    <footer class="blockquote-footer"><cite title="Source Title">Wikipedia Bibliografia de J. R. R. Tolkien</cite></footer>
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
export default Elfos