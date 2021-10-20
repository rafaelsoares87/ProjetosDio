import Accordion from "../../Accordion";

const HouseTyrell = () =>{
    return(

        <Accordion>

            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headinTwenty-two">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwenty-two" aria-expanded="false" aria-controls="flush-collapseTwenty-two">
                                        Casa Tyrell
                    </button>
                </h2>
                                

            </div>
            <div id="flush-collapseTwenty-two" class="accordion-collapse collapse" aria-labelledby="flush-headingTwenty-two" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                        <strong>Casa Tyrell de Jardim de Cima </strong> 
                        é uma das Grandes Casas dos Sete Reinos, senhores supremos da Campina.
                        Uma grande e rica casa, sua riqueza é apenas superada entre as Grandes Casas
                        pela Casa Lannister, os Tyrell porém possuem a maior força militar. Adicionalmente,
                        as frotas de seus vassalos da Casa Redwyne, dos senhores das Ilhas Escudo e dos senhores
                        costeiros, caso convocadas, formam uma armada que se equaliza caso não ultrapasse à
                        Frota Real.
                        <br/>
                        <br/> 
                        
                        Jardim de Cima é uma antiga sede de governo e coração da cavalaria nos
                        Sete Reinos; os Tyrell chamam a si mesmo 'Defensores das Marcas' e 'Supremos Marechais
                        da Campina', e possuem tradicionalmente o título de Protetor do Sul. Seu brasão ostenta 
                        uma rosa dourada em campo verde-relva, e suas palavras são "Crescendo Fortes".
                        Membros da família tendem a apresentar cabelos encaracolados castanhos e olhos castanhos ou dourados.
                        
                      




                </div>
            </div>
        
        </Accordion>
    )
        
    
}
export default HouseTyrell