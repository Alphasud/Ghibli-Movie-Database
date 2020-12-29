import React from 'react'

import OneLocation from './OneLocation'

function ResultsLocation ({ place }) {
    return (
		<section className="results">
			{place.map(oneLocation => (
                <OneLocation oneLocation={oneLocation} key={oneLocation.id} />
			))}   
        </section>
        
	)
}

export default ResultsLocation