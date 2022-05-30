import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Movie from './components/Movie'

const Search = () => {
	const params = useParams()
	const [results, setResults] = useState({ data: [], loading: true })

	const apiKey = '9d8fba2417b4ff67bf0a8b69b66249fd'

	const getData = () => {
		fetch(
			'https://api.themoviedb.org/3/search/movie/' +
			'?api_key=' +
			apiKey +
			'&query=' +
			params.query
		).then(
			res => res.json()
		).then(data => {
			setResults({ data: data.results, loading: false })
		})
	}

	useEffect(() => {
		getData()
	}, [params])

	return (
		<div className='movies'>
			{ results.data.map(res => (
				<Movie movie={ res } />
			)) }
		</div>
	)
}

export default Search
