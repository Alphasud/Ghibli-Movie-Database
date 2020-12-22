
import React from 'react'

import OneMovie from './OneMovie'

function Results ({ movie }) {
	return (
		<section className="results">
			{movie.map(oneMovie => (
				<OneMovie oneMovie={oneMovie} />
			))}
		</section>
	)
}

export default Results