import React from 'react'

import OneSpecie from './OneSpecie'

function ResultsSpecie ({ specie }) {
    return (
		<section className="results">
			{specie.map(oneSpecie => (
                <OneSpecie oneSpecie={oneSpecie} key={oneSpecie.id} />
			))}   
        </section>
        
	)
}

export default ResultsSpecie