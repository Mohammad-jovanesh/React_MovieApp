import React,{useState,useEffect} from 'react'
import  {FetchMovies} from "../AxiosApi/AxoisApi"
import {Carousel}  from "react-bootstrap"
import {GetGenre} from "../GetGenre/Genre"
import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home =()=>{
    const [SliderPic,SetSliderPic]=useState(null)
    
    useEffect(async()=>{
      window.scrollTo(0, 0);
      const Data=await FetchMovies()
      console.log(await FetchMovies())
      SetSliderPic(Data.slice(0,5))
     
    },[])
    
   
    return (
       <div className="container pt-5">
       <Carousel>
       {SliderPic&&SliderPic.map((movie,index)=>{return <Carousel.Item key={index} className="Carousel_Item"><img
        className="d-block w-100 Card_Home_Image h-100"
        src={`${movie.backdrop }`}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className="Slider_Name_Movie">{movie.title}</h3>
      </Carousel.Caption></Carousel.Item>})}
      </Carousel>
      <GetGenre />
      
        </div>
    )
}