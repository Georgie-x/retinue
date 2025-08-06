import { useState } from "react"
import {TotalPoints, Faction} from "./index"

function ContentControl() {
	const [selectedPoints, setSelectedPoints] = useState(500)
	const [selectedFaction, setSelectedFaction] = useState("Orcs")


	return (
		<main className='content-container'>
			<TotalPoints selectedPoints={selectedPoints} setSelectedPoints={setSelectedPoints}/>
			<Faction selectedFaction={selectedFaction} setSelectedFaction={setSelectedFaction}/>
		</main>
	)
}

export default ContentControl
