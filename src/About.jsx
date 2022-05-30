import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MovieDetail from './components/MovieDetail'

const About = () => {
	const params = useParams()
	const [movie, setMovie] = useState({ data: [], loading: true })

	const apiKey = '9d8fba2417b4ff67bf0a8b69b66249fd'

	const getData = () => {
		fetch(
			'https://api.themoviedb.org/3/movie/' + params.id + '?api_key=' + apiKey
		)
			.then(res => res.json())
			.then(data => {
				setMovie({ data: data, loading: false })
			})
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div className='about'>
			<MovieDetail movie={movie.data} />
		</div>
	)
}

export default About
