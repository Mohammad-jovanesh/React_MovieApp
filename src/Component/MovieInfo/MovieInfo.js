import React, { useEffect,useState } from 'react'
import "./MovieInfo.css"
import play from "../../Image/react-logo.png"
import {GetMovieDetails,GetCredits,GetVideo,GetSimilarMovies} from "../AxiosApi/AxoisApi"
import {Modal,Button,Card} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faPlay} from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { LazyLoadImage } from 'react-lazy-load-image-component';
export const MovieInfo=()=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const {id}=useParams()
    const [details,setDetails]=useState(null)
    const [key_video,setKey_Video]=useState("")
    const [Costs,setCosts]=useState(null)
    const [similar,SetSimilar]=useState(null)

    useEffect(async()=>{
      window.scrollTo(0, 0);
        
        const Res_Similar=await GetSimilarMovies(id)
       
        SetSimilar(Res_Similar.slice(0,4))
        const {results}=await GetVideo(id)
        if(results[0].key!==null){
            setKey_Video(results[0].key)
        }
       
        
        setDetails(await GetMovieDetails(id))
       
       
        setCosts( await GetCredits(id))
    }
    ,[id])

    return (
       <div className="container pt-4">
            
           <div className="Movie_Image w-100  position-relative" onClick={()=>setShow(true)}>
               <div className="overlayer"></div>
               <LazyLoadImage
      alt={"sorry no image"}
      height={"100%"}
      src={details&&details.backdrop} 
      width={"100%"} />
               
               <FontAwesomeIcon icon={faPlay} className="Play_icon"/>
               
           </div>
           <div className="NameMovie mt-5 ml-0 ">
            <h2 className="NameOfMovie">{details&&details.nameOf_Movie}</h2>
            </div> 
           <div className="GenreList
            d-flex 
            flex-sm-row
            flex-column
            align-items-cnter 
            justify-content-center
            justify-content-sm-start">
              {details&&details.genres.map((m,index)=>{return <Button variant="outline-secondary" className="ms-3 mb-3 mb-sm-0 " key={index}>{m.name}</Button>})}
           </div> 
              <div className="OverviewSection mt-4 ms-4 mt-sm-5 ">
                 <p className=" text-start px-5 px-sm-0 "><strong className="me-2 h3">Overview : </strong>
                <span className="lead">{details&&details.overview}</span></p>
               </div>
                <div className="row">
                      {Costs&&Costs.slice(0,4).map((cast,index)=>{return <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}> <Card  className="CardCast" >
                         <Card.Body>
                         <LazyLoadImage
      alt={"sorry no image"}
      height={"auto"}
      src={cast.Image} 
      width={"100%"} />
                           
                            <Card.Text className="mt-4 h5">
                             {cast.Name}
                            </Card.Text>
                         </Card.Body> </Card></div>
                           })}
                 </div>   
                  <div className="Similar_Movies mt-5 pt-5">
                      <h1 className="mt-5 mb-5">SimilarMovies</h1>
                      <div className="row">
                      {similar&&similar.map((movie,index)=>{return <div className="col-12 col-lg-3 col-md-4 col-sm-6" key={index}><Link to={`/movieinfo/${movie.id}`} style={{textDecoration:"none"}}><Card style={{ width: '100%', margin:"1rem auto"}}>
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

           <Modal show={show} onHide={handleClose} className="modal_movie" >
                    
                     <Modal.Body>
                       <ReactPlayer  
                       className="w-100 h-100"
                       url={`https://www.youtube.com/watch?v=${key_video}`}
                       controls/>
                     </Modal.Body>

                    
                   </Modal>

           </div> 
    )
}