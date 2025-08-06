import React, { useState } from "react"

function TotalPoints({selectedPoints, setSelectedPoints}) {


	const handleChange = (e) => {
		setSelectedPoints(e.target.value)
	}

	return (
		<>
			<label htmlFor='totalPoints'>Total Points: </label>
			<input
				type='number'
				id='totalPoints'
				min='500'
				max='1000'
        value={selectedPoints}
				onChange={handleChange}
			></input>
		</>
	)
}

export default TotalPoints
