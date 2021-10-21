

import AcordionTolkien from "../components/TolkienHistory/AcordionTolkien"
import Personagens from "../components/TolkienHistory/Personagens/Personagens"





const Tolkien = () => {
    return(
        <>
            
            <br/>
            <h1 className='card-title text-center TitleAccord'>Terra Média - Universo de Tolkien</h1>
            <h5 className="card-text text-center"> Terra Média é a terra antiga e fictícia de J. R. R. Tolkien,<br/>
             onde a maioria dos contos do seu imaginário ocorrem. <br/> <br/>
            </h5>

                <AcordionTolkien/>

            
         
            <Personagens/>
           


        </>
    )
}

export default Tolkien