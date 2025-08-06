import React, { useState } from "react"

function Experience({selectedExperience, setSelectedExperience}) {

	const expOptions = [
		"Veteran",
		"Regular",
		"Irregular",
		"Green"
	]

	const handleChange = (e) => {
		setSelectedExperience(e.target.value)
	}

	return (
		<div>
			<label htmlFor='expSelect'>Experience: </label>
			<select id='expSelect' onChange={handleChange}>
				<option value='' disabled hidden defaultValue>
					Please Choose
				</option>
				{expOptions.map((option) => (
					<option key={option} value={selectedExperience}>
						{option}
					</option>
				))}
			</select>
		</div>
	)
}

export default Experience
