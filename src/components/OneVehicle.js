
import React from 'react'

function OneVehicle({ oneVehicle }) {
	return (
        <div className="oneMovie">
			<h1>{oneVehicle.name}</h1>
            <h3>{oneVehicle.vehicle_class}</h3>
            <p>{oneVehicle.description}</p>
		</div>
	)
}

export default OneVehicle