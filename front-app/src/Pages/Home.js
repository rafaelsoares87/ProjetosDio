

import React from 'react'
import '../css/style.css'

import CardHeader from '../components/Card/CardHeader/CardHeader'
import Colum from '../components/Grid/Colum'
import Grid from '../components/Grid/Grid'
import ListGroup from '../components/ListGroup'








const Home = ()=>{
    return(
        <div className='PageStyle'>
            
        
            <h1 className='focus-in-expand-fwd text-center TitleHome'> TODOS OS UNIVERSOS FANTÁSTICOS FICTÍCIOS </h1>
            <br/>
            <br/>
            <br/>
            <Grid>
                <Colum>
                    <ListGroup>
                        <a href="/Game-of-thrones" type="button" className="btn btn-outline-success">Game of Thrones</a> <br/>
                        <a href="/Universo-Tolkien" type="button" className="btn btn-outline-success">Universo Tolkien</a> <br/>
                        <a href="/HarryPotter" type="button" className="btn btn-outline-success">Harry Potter</a> <br/>

                    </ListGroup>
                    <br/>
                </Colum>
                <br/>
                <Colum>
                    <ListGroup>
                        <a href="/multiversoDc" type="button" className="btn btn-outline-success">Multiverso DC</a> <br/>
                        <a href="multiversomarvel" type="button" className="btn btn-outline-success">Multiverso Márvel</a> <br/>
                        <a href="/Game-of-thrones" type="button" className="btn btn-outline-success disabled">Multiverso Dragon Ball </a> <br/>


                    </ListGroup>
                    <br/>
                </Colum>
                <Colum>
                    <ListGroup>
                        <a href="/universo-Star-Wars" type="button" className="btn btn-outline-success">Universo Star Wars</a> <br/>
                        <a href="/Universo-Star-Trek" type="button" className="btn btn-outline-success">Universo Star Trek</a> <br/>
                        <a href="/Omochileiro-das-galaxias" type="button" className="btn btn-outline-success">Guia do mochileiro das Galáxias</a> <br/>

                    </ListGroup>
                    
                    <br/>
                </Colum>
                
                
               
               
            </Grid>
            <Grid>
                <Colum>
                    <ListGroup>
                            <a href="#" type="button" className="btn btn-outline-success disabled">Biografia dos Autores </a> <br/>
                            <a href="#" type="button" className="btn btn-outline-success disabled">Livros</a> <br/>
                            
                        
                    </ListGroup>
                </Colum>
                <Colum>
                    <ListGroup>
                            <a href="/Game-of-thrones" type="button" className="btn btn-outline-success disabled">Eventos de Fãs ao redor do mundo</a> <br/>
                            <a href="/Universo-Tolkien" type="button" className="btn btn-outline-success disabled">Os universos fantásticos em novas séries</a> <br/>
                            
                        
                    </ListGroup>
                </Colum>
            </Grid>            
            
            
             
            
          


            
        </div>
    )
}
export default Home