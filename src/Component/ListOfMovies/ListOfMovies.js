import React, { useEffect,useState } from 'react'
import "./listofMovies.css"
import {GetMoviesByGenre} from "../AxiosApi/AxoisApi"
import {Card} from "react-bootstrap"
import {Link } from 'react-router-dom'



export const ListOfMoviesByGenre=(props)=>{
    const [listGenre,SetListGenre]=useState(null)
    useEffect(async()=>{
        console.log(props.id)
          
          SetListGenre(await GetMoviesByGenre(props.id,props.page))
          
    },[props.id,props.page])
    
    return (
        <div className="container">
           
            <div className="row">
          {listGenre&&listGenre.map((movie,index)=>{return <div className="col-12 col-lg-3 col-md-4 col-sm-6" key={index}>
          <Link to={`/movieinfo/${movie.id}`} style={{textDecoration:"none"}}><Card style={{ width: '100%', margin:"1rem auto"}}>
               <Card.Img variant="top" src={movie.poster} className="Card_list_image"/>
               
                         <Card.Body>
                           <Card.Title className="NameOfMovie">{movie.title}</Card.Title>
                           <Card.Text>
     
                           </Card.Text>
   
                         </Card.Body>
             </Card>
             </Link></div>})}
</div>
        </div>
    )
}