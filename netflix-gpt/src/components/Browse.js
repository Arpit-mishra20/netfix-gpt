import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from '../hooks/usePopularMovies';


const Browse = () => {
  //fetch data from tmdb api and update store 
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/* Main Container
      -Video background
      -Video title 
      Secondary Container 
      -Movie list *n 
      -cards * n 
       */}
    </div>
  )
}

export default Browse