
import React from 'react'

import OnePeople from './OnePeople'

function ResultsPeople ({ people }) {
    return (
            <section>
			{people.map(onePeople => (
				<OnePeople onePeople={onePeople} key={onePeople.id} />
            ))}
            </section>
        
	)
}

export default ResultsPeople