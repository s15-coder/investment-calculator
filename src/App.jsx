import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
function App() {
  const [userInputValues, setUserInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })
  const isValidInput = userInputValues.duration > 0
  function onChangeInput(inputKey, value) {
    setUserInputValues(previousState => {
      return {
        ...previousState,
        [inputKey]: +value,
      }
    })
  }
  return (
    <>
      <Header />
      <UserInput onChangeInput={onChangeInput} userInputValues={userInputValues} />
      {!isValidInput && <p className="center">Please enter a duration greater than zero</p>}
      {isValidInput && <Results inputValues={userInputValues} />}
    </>

  )
}

export default App
