import React, { Component } from 'react';

import MovieTitle from '../components/MovieTitle';
import TVShowTitle from '../components/TVShowTitle';
import { HomePageContext } from '../components/Home';
import { imageUrlGenerator } from '../utils/imageUrlGenerator';
import { getImdbUrl, youtubeSearchQueryGenerator } from '../utils/utilityGenerator';

class ItemCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: props.info,
			imdbUrl: '',
			youtubeUrl: ''
		};
	}
	makeImdbUrl = async () => {
		const imdbUrl = await getImdbUrl(
			this.state.info.id,
			this.state.info.media_type
		);
		this.setState({
			imdbUrl: imdbUrl
		});
	};

	makeYoutubeTrailer = () => {
		const youtubeUrl = youtubeSearchQueryGenerator(
			this.state.info.title || this.state.info.name
		);
		this.setState({
			youtubeUrl: youtubeUrl
		});
	};

	componentDidMount() {
		this.makeImdbUrl();
		this.makeYoutubeTrailer();
	}
	render() {
		return (
			<HomePageContext.Consumer>
				{genre => {
					const filteredGenres = genre.filter(genreList =>
						this.state.info.genre_ids.includes(genreList.id)
					);
					const filteredGenreNames = filteredGenres.map(genres => genres.name);
					return (
						<div className="card">
							<a
								href={this.state.imdbUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={imageUrlGenerator(this.state.info.poster_path)}
									alt="shows of thumbnails"
									className="thumbnail"
								/>
							</a>
							<div className="media-body">
								<div className="vote">
									{this.state.info.vote_average}
									<span className="out-of-10">/10</span>
								</div>
								<div className="media-title">
									{this.state.info.media_type === 'movie' ? (
										<MovieTitle info={this.state.info} />
									) : (
										<TVShowTitle info={this.state.info} />
									)}
								</div>
								<div>
									{filteredGenreNames.map((genre, index) => (
										<li className="genre-list" key={index}>
											{genre}
										</li>
									))}
								</div>
								<article className="movie-overview">
									{this.state.info.overview.substring(0, 200)}
									<a
										href={this.state.imdbUrl}
										rel="noopener noreferrer"
										className="read-more"
										target="_blank"
									>
										...
									</a>
								</article>
								<div className="watch-trailer">
									<a
										href={this.state.youtubeUrl}
										rel="noopener noreferrer"
										target="_blank"
									>
										Watch Trailer
									</a>
								</div>
							</div>
						</div>
					);
				}}
			</HomePageContext.Consumer>
		);
	}
}

export default ItemCard;
