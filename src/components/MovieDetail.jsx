import React from 'react'
import { Fade } from 'react-reveal'

const MovieDetail = ({ movie }) => {
	return (
		<Fade top>
			<div className='movie-detail'>
				<img
					src={'https://image.tmdb.org/t/p/original' + movie.backdrop_path}
				/>

				<div className='text'>
					<h1>{movie.original_title}</h1>

					<p className='overview'>{movie.overview}</p>

					<div className='infos'>
						<p>
							<span>- Release date: </span>
							{movie.release_date}
						</p>

						<p>
							<span>- Budget 💰: </span>
							{movie.budget}$
						</p>

						<p>
							<span>- Rating ⭐: </span>
							{movie.vote_average} / by {movie.vote_count} person
						</p>

						<p>
							<span>- Duration ⏳: </span>
							{movie.runtime}min
						</p>
					</div>
				</div>
			</div>
		</Fade>
	)
}

export default MovieDetail
