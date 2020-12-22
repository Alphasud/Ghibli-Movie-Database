
import React from 'react'

function OneMovie({ oneMovie }) {
	return (
		<div className="oneMovie">
			<h1>{oneMovie.title}</h1>
            <h3>{oneMovie.director}, {oneMovie.release_date}</h3>
            <p>"{oneMovie.description}"</p>
		</div>
	)
}

export default OneMovie