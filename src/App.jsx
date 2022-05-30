import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SearchForm from './components/SearchForm'
import Popular from './components/Popular'
import Header from './components/Header'
import Search from './Search'
import About from './About'

function App() {
	const apiKey = "9d8fba2417b4ff67bf0a8b69b66249fd"
	const [movies, setMovies] = useState({ data: [], loading: true })
	const [filtred, setFiltred] = useState([])
	const [cat, setCat] = useState(0)

	const getData = () => {
		fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey)
			.then((res) => res.json())
			.then((data) => {
				setMovies({ data: data.results, loading: false })
				setFiltred(data.results)
			})
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<Router>
			<Header />

			<div className="app">
				<SearchForm />

				<Routes>
					<Route path="/" element={ <Popular movies={ movies.data } filtred={ filtred } setFiltred={ setFiltred } cat={ cat } setCat={ setCat } /> } />

					<Route path="/about/:id" element={ <About /> } />

					<Route path="/search/:query" element={ <Search /> } />
				</Routes>
			</div>
		</Router>
	)
}

export default App
