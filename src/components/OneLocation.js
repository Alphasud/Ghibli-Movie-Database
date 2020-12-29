
import React from 'react'

function OneLocation({ oneLocation }) {
	return (
        <div className="oneMovie">
			<h1>{oneLocation.name}</h1>
			<h3>Climate : {oneLocation.climate}<br></br>
				Terrain : {oneLocation.terrain}
			</h3>
		</div>
	)
}

export default OneLocation