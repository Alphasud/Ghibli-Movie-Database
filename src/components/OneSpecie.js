
import React from 'react'

function OneSpecie({ oneSpecie }) {
	return (
        <div className="oneMovie">
			<h1>{oneSpecie.name}</h1>
            <h3>Type : {oneSpecie.classification}<br></br>
                Eyes : {oneSpecie.eye_colors}<br></br>
                Hair : {oneSpecie.hair_colors}
            </h3>
		</div>
	)
}

export default OneSpecie