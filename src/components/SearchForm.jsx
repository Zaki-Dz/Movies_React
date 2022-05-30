import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {
	const [input, setInput] = useState('')

	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()

		navigate('/search/' + input)

		setInput('')
	}

	return (
		<form onSubmit={ handleSubmit }>

			<input
				value={ input }
				onChange={ e => {
					setInput(e.target.value)
				} }
				type='text'
				placeholder='Search...'
			/>

			{ input !== '' && <button type='submit'>Search</button> }
		</form>
	)
}

export default SearchForm
