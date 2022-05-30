import React, { useEffect } from 'react'
import { Fade } from 'react-reveal'

const Filter = ({ movies, setFiltred, cat, setCat }) => {

	useEffect(() => {

		if (cat == 0) {
			setFiltred(movies)
		} else {
			const filtred = movies.filter(movie => movie.genre_ids.includes(cat))
			setFiltred(filtred)
		}


	}, [cat])

	return (
		<Fade left>
			<div className='filter'>
				<ul>
					<li onClick={ () => setCat(0) } className={ cat == 0 ? 'active' : '' } >All</li>
					<li onClick={ () => setCat(35) } className={ cat == 35 ? 'active' : '' } >Comedy</li>
					<li onClick={ () => setCat(28) } className={ cat == 28 ? 'active' : '' } >Action</li>
				</ul>
			</div>
		</Fade>
	)
}

export default Filter