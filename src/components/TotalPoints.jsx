function TotalPoints() {
    return(
      <>
      <label htmlFor="totalPoints">Choose total game points: </label>
      <input type="number" id="totalPoints" min="0" max="1000"></input>
      </>
    )
  }
  
  export default TotalPoints