import React, { useState } from "react"

function Faction() {
	const factionOptions = [
		"Orc Tribes",
		"The Elves",
		"The Dwarves",
		"Human Kingdoms",
		"Kaelanites - The Dead",
	]

	const [selectedFaction, setSelectedFaction] = useState("")

	const handleChange = (event) => {
		setSelectedFaction(event.target.value)
	}

	return (
		<div>
			<label htmlFor='factionSelect'>Choose your faction: </label>
			<select id='factionSelect' value={selectedFaction} onChange={handleChange}>
				<option value='' disabled hidden defaultValue>
					Please Choose
				</option>
				{factionOptions.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	)
}

export default Faction
