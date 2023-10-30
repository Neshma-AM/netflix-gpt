import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useGetMovieVideos = (movieId) => {
    //fetching the trailer video and updating the store
    const dispatch = useDispatch();
    useEffect(() => {
        const getMovieVideos = async () => {
         const data= await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_OPTIONS);
         const json = await data.json()
         const filterData = json.results.filter((x) => x.type === "Trailer" )
         const trailer = filterData.length ? filterData[0] : json.results[0];   //this could be a posibility where the filterData could be empty, so ternary operator is used here to return 1st eleme of json.result in case the filterdata is emoty
          dispatch(addTrailerVideo(trailer))
        }
        try{
            getMovieVideos()
        }
        catch(error) {
         console.log(error)
        }
      }, [])
} 

export default useGetMovieVideos;
