import React, {Component} from 'react';

import ItemColumn from './ItemColumn';
import * as constant from "../utils/constants";
import {getTrendingItems, getGenres} from '../services/services';

export const HomePageContext = React.createContext();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeWindow: constant.TIME_WINDOW,
      movies: [],
      shows: [],
      genres: [],
      isLoading: true
    }
  }
  fetchMovies = async() => {
    try {
      const { data } = await getTrendingItems('movie', this.state.timeWindow);
      if (data && data.results) {
        return data.results;
      }
    } catch (error) {
      console.log(error)
    }
  }

  fetchShows = async() => {
    try {
      const { data } = await getTrendingItems('tv', this.state.timeWindow);
      if (data && data.results) {
        return data.results;
      }
    } catch (error) {
      console.log(error)
    }
  }
  storeGenres = async() => {
    try {
      const {data} = await getGenres();
      if (data) {
        return data.genres;
      }
    } catch (error) {
      console.log(error)
    }
  }

  async componentDidMount() {
    try{
    const [movies, shows, genres] = await Promise.all([
      this.fetchMovies(),
      this.fetchShows(),
      this.storeGenres()
    ]);
    this.setState({movies: movies, shows: shows, genres: genres, isLoading: false});
  }catch(error){
    console.log("Home error", error)
  }
  }

  render() {
    return (
			<div className="container">
				<HomePageContext.Provider value={this.state.genres}>
					{this.state.shows && (
						<ItemColumn results={this.state.shows} title={constant.TV_SHOW} logo= {constant.POWERED_BY}/>
					)}
					{this.state.movies && (
						<ItemColumn results={this.state.movies} title={constant.TITLE_MOVIE} />
					)}
				</HomePageContext.Provider>
			</div>
		);
  }

}
export default Home;
