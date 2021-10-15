import React, { useEffect ,useState} from 'react'
import "./Genre.css"
import {GetAllGenre} from "../AxiosApi/AxoisApi"
import {Button,Accordion} from "react-bootstrap"
import {ListOfMoviesByGenre} from "../ListOfMovies/ListOfMovies"
export const GetGenre=()=>{

    const [genre,setGenre]=useState(null)
    const [idgenre,setIdGenre]=useState(null)
    const [page,setPage]=useState(1)


    useEffect(async()=>{
          const MyGenre=await GetAllGenre()
          console.log(MyGenre)
          setGenre(await GetAllGenre())
    },[])
    let TakeIDGenre=(e)=>{
       console.log(e.target.id)
       setPage(1)
        setIdGenre(e.target.id)
    }
    console.log(page)
    return (
        <div >
  <Accordion defaultActiveKey="0" className="Display_Accordion">
    <Accordion.Item eventKey="0" >
     <Accordion.Header>Genre</Accordion.Header>
       <Accordion.Body>
           <div className="row">
         {genre&&genre.genres.map((G,index)=>{return <div className="col-6" key={index}> <Button variant="outline-secondary" id={G.id}  
          className="mx-1 my-1 w-100"  onClick={TakeIDGenre}>{G.name}</Button></div>})}
          </div>
      </Accordion.Body>
    </Accordion.Item>
   </Accordion>
         {genre&&genre.genres.map((G,index)=>{return <Button variant="outline-secondary" id={G.id} key={index} 
          className="mx-1 my-1 Btn_Genre"  onClick={TakeIDGenre}>{G.name}</Button>})}
          <ListOfMoviesByGenre id={idgenre}  page={page}/>
          <div className="d-flex align-items-center justify-content-between w-50 mx-auto my-3">
          <button type="button" className="btn btn-outline-primary" onClick={()=>setPage(prev=>prev<0?1:prev-1)}>Prev</button>
          <button type="button" className="btn btn-outline-primary" onClick={()=>setPage(prev=>prev=prev+1)}>Next</button>
            </div>
        </div>
    )
}