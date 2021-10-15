import axios from "axios"
const initURL="https://api.themoviedb.org/3"
const ApiKey="db8305e6d2da4cbc0cc2a49536e63126"
const ImageAddress="https://image.tmdb.org/t/p/w500/"


export const FetchMovies=async()=>{
   const Mydata= await axios.get(`${initURL}/movie/now_playing`,{
       params:{
        api_key:ApiKey,
        language:"en-US",
        page:1
       }
   })
     

     return Mydata.data.results.map(movie=>{
         return{
             id:movie.id,
             title:movie.title,
             Date:movie.release_date,
             poster:ImageAddress+movie.poster_path,
             backdrop:ImageAddress+movie.backdrop_path,
         }
     })
}




export const GetAllGenre=async()=>{
    const {data}=await axios.get(`${initURL}/genre/movie/list`,{
        params:{
            api_key:ApiKey,
            language:"en-US",
            page:1
        }
    })
    return data
}



export const GetMoviesByGenre=async(id_genre,page)=>{
    console.log(page)
    const{data}=await axios.get(`${initURL}/discover/movie?`,{
        params:{
            api_key:ApiKey,
            with_genres:id_genre,
            language:"en-US",
            page:`${page}`,
            
        }
    })
    return data.results.map(movie=>{
        return{
            id:movie.id,
            title:movie.title,
            Date:movie.release_date,
            poster:ImageAddress+movie.poster_path,
            backdrop:ImageAddress+movie.backdrop_path,
        }
    })
}




export const GetVideo=async(movie_id)=>{
     const {data}=await axios.get(`${initURL}/movie/${movie_id}/videos`,{
        params:{
            api_key:ApiKey,
           
            language:"en-US",
            
            
        }
     })
     return data
}



export const GetMovieDetails=async(movie_id)=>{
     const {data}=await axios.get(`${initURL}/movie/${movie_id}`,{
         params:{
            api_key:ApiKey,
            language:"en-US"
         }
     })
     
     return {
        backdrop:ImageAddress+data.backdrop_path,
        genres:data.genres,
        nameOf_Movie:data.title,
        overview:data.overview,
        time_In_Min:data.runtime,
        movieID:data.id
     }
}

export const GetCredits=async(movie_id)=>{
        const {data}=await axios.get(`${initURL}/movie/${movie_id}/credits`,{
            params:{
                api_key:ApiKey,
            language:"en-US"
            }
        })
        
        return data.cast.map(cast=>{
            return {
                Name:cast.original_name,
                Image:ImageAddress+cast.profile_path,
                character:data.character
            }
        })
}





export const GetSimilarMovies=async(movie_id)=>{
    console.log(movie_id)
    const {data}=await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/similar`,{
        params:{
              api_key:ApiKey,
              language:"en-US",
              page:1
        
        }
    })
    console.log(data["results"])
    return data["results"].map(res=>{
        return {
            poster:ImageAddress+res.poster_path,
            title:res.title,
            id:res.id
        }
       
    
    })

}