import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
	const location = useLocation()

	const path = location.pathname

	return (
		<header>
			<h1>Movies</h1>

			{ path !== '/' && (
				<Link to='/'>
					<button>Back</button>
				</Link>
			) }
		</header>
	)
}

export default Header
