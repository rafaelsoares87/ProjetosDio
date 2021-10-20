import Accordion from "../../Accordion";

const Greyjoy = () =>{
    return(

        <Accordion>

            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                             Casa Greyjoy
                    </button>
                </h2>
                                

            </div>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>A Casa Greyjoy de Pyke. </strong> 

                        é uma das Grandes Casas de Westeros. Governa sobre as Ilhas de Ferro,
                        uma coletânea pedregosa e sombria de ilhas na costa oeste de Westeros,
                        do castelo e ilha de Pyke. Seu símbolo é uma lula gigante dourada em um campo negro,
                        e o lema da casa é "Nós Não Semeamos".
                        Membros da família tendem a ser atraentes e bem-constituídos, com cabelo negro.


                     
                </div>
            </div>
        
        </Accordion>
    )
        
    
}
export default Greyjoy