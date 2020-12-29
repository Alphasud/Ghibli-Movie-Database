import React from 'react'

import OneVehicle from './OneVehicle'

function ResultsVehicle ({ vehicle }) {
    return (
		<section className="results">
			{vehicle.map(oneVehicle => (
                <OneVehicle oneVehicle={oneVehicle} key={oneVehicle.id} />
			))}   
        </section>
        
	)
}

export default ResultsVehicle