import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
function App() {
  const [userInputValues, setUserInputValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 1000,
    duration: 10,
  })
  function onChangeInput(inputKey, value) {
    setUserInputValues(previousState => {
      return {
        ...previousState,
        [inputKey]: value,
      }
    })
  }
  return (
    <>
      <Header />
      <UserInput onChangeInput={onChangeInput} userInputValues={userInputValues} />
      <Results inputValues={userInputValues} />
    </>

  )
}

export default App
