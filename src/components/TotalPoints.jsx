import React, { useState } from "react"


function TotalPoints() {

  const [pointsValue, setPointsValue] = useState(500)


  const handleChange = (event) => {
		setPointsValue(event.target.value)
	}

    return(
      <>
      <label htmlFor="totalPoints">Choose total game points: </label>
      <input type="number" id="totalPoints" min="500" max="1000" value={pointsValue} onChange={handleChange}></input>
      </>
    )
  }
  
  export default TotalPoints