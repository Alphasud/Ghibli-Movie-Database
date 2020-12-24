
import React from 'react'

import OneMovie from './OneMovie'

function Results ({ movie }) {
	return (
		<section className="results">
			{movie.map(oneMovie => (
				<OneMovie oneMovie={oneMovie} key={oneMovie.id} />
			))}
		</section>
	)
}

export default Results