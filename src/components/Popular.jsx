import { motion } from 'framer-motion'
import Filter from './Filter'
import Movie from './Movie'
import React from 'react'

const Popular = ({ movies, filtred, setFiltred, cat, setCat }) => {
  return (
    <div className='popular'>
      <Filter movies={ movies } filtred={ filtred } setFiltred={ setFiltred } cat={ cat } setCat={ setCat } />
      <motion.div layout className="movies">
        { filtred.map(movie => <Movie key={ movie.id } movie={ movie } />) }
      </motion.div>
    </div>
  )
}

export default Popular
