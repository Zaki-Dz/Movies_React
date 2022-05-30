import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Fade } from 'react-reveal'
import React from 'react'

const Movie = ({ movie }) => {
	return (
		<Fade left>
			<Link to={ '/about/' + movie.id }>
				<motion.div layout className='movie'>
					<img src={ 'https://image.tmdb.org/t/p/w200/' + movie.poster_path } />

					<div className='desc'>
						<span className='title'>{ movie.original_title }</span>

						<span>{ movie.release_date }</span>
					</div>
				</motion.div>
			</Link>
		</Fade>
	)
}

export default Movie
