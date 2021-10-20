

import React from 'react'
import CardHeader from '../components/Card/CardHeader/CardHeader'
import Colum from '../components/Grid/Colum'
import Grid from '../components/Grid/Grid'
import ListGroup from '../components/ListGroup'




const Home = ()=>{
    return(
        <>
            
        
            <CardHeader>Todos os universos Fictícios em só lugar</CardHeader>
            <br/>
            <br/>
            <br/>
            <Grid>
                <Colum>
                    <ListGroup>
                        <a href="/Game-of-thrones" type="button" className="btn btn-outline-dark">Game of Thrones</a> <br/>
                        <a href="/Universo-Tolkien" type="button" className="btn btn-outline-dark">Universo Tolkien</a> <br/>
                        <a href="/HarryPotter" type="button" className="btn btn-outline-dark">Harry Potter</a> <br/>
                        
                        
                       
                       
                    </ListGroup>
                    <br/>
                </Colum>
                <br/>
                <Colum>
                    <ListGroup>
                        <a href="/multiversoDc" type="button" className="btn btn-outline-dark">Multiverso DC</a> <br/>
                        <a href="multiversomarvel" type="button" className="btn btn-outline-dark">Multiverso Márvel</a> <br/>
                        <a href="/Game-of-thrones" type="button" className="btn btn-outline-dark">MUltiverso Dragon Ball </a> <br/>

                        
                        
                    </ListGroup>
                    <br/>
                </Colum>
                <Colum>
                    <ListGroup>
                        <a href="/universo-Star-Wars" type="button" className="btn btn-outline-dark">Universo Star Wars</a> <br/>
                        <a href="/Universo-Star-Trek" type="button" className="btn btn-outline-dark">Universo Star Trek</a> <br/>
                        <a href="/Omochileiro-das-galaxias" type="button" className="btn btn-outline-dark">Guia do mochileiro das Galáxias</a> <br/>

                        
                        
                    </ListGroup>
                    <br/>
                </Colum>
                
               
               
            </Grid>
            
            
            
             
            
          


            
        </>
    )
}
export default Home