import { useState } from "react"

function Faction({selectedFaction, setSelectedFaction}) {
	const factionOptions = [
		"Orc Tribes",
		"The Elves",
		"The Dwarves",
		"Human Kingdoms",
		"Kaelanites - The Dead",
	]

	const handleChange = (e) => {
		setSelectedFaction(e.target.value)
	}

	return (
		<div>
			<label htmlFor='factionSelect'>Faction: </label>
			<select id='factionSelect' value={selectedFaction} onChange={handleChange}>
				<option value='' disabled hidden defaultValue>
					Please Choose
				</option>
				{factionOptions.map((option) => (
					<option key={option} >
						{option}
					</option>
				))}
			</select>
		</div>
	)
}

export default Faction
