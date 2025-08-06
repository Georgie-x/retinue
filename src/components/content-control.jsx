import { useState } from "react"
import {TotalPoints, Faction, Experience} from "./index"

function ContentControl() {
	const [selectedPoints, setSelectedPoints] = useState(500)
	const [selectedExperience, setSelectedExperience] = useState("regular")
	const [selectedFaction, setSelectedFaction] = useState("Orcs")

	return (
		<main className='content-container'>
			<TotalPoints selectedPoints={selectedPoints} setSelectedPoints={setSelectedPoints}/>
			<Experience selectedExperience={selectedExperience} setSelectedExperience={setSelectedExperience}/>
			<Faction selectedFaction={selectedFaction} setSelectedFaction={setSelectedFaction}/>
		</main>
	)
}

export default ContentControl
