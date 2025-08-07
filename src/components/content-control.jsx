import { useState } from "react"
import { TotalPoints, Faction, Army, UnitSelect } from "./index"

function ContentControl() {
	const [selectedPoints, setSelectedPoints] = useState(500)
	const [selectedFaction, setSelectedFaction] = useState("Orcs")

	return (
		<main className='content-container'>
			<TotalPoints selectedPoints={selectedPoints} setSelectedPoints={setSelectedPoints} />
			<Faction selectedFaction={selectedFaction} setSelectedFaction={setSelectedFaction} />
			<UnitSelect />
			<Army />
		</main>
	)
}

export default ContentControl
