import React from 'react'

function OnePeople({ onePeople }) {
	return (
        <div className="oneMovie">
			<h1>{onePeople.name}</h1>
            <h3>{onePeople.gender}, {onePeople.age}<br></br>
                Eye color : {onePeople.eye_color}<br></br>
                Hair color : {onePeople.hair_color}
            </h3>
		</div>
	)
}

export default OnePeople