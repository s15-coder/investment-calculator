import { useState } from "react"

export default function UserInput() {

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
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial investment</label>
                <input
                    type="number"
                    required
                    value={userInputValues.initialInvestment}
                    onChange={(event) => onChangeInput('initialInvestment', event.target.value)}
                />
            </p>
            <p>
                <label>Annual investment</label>
                <input
                    type="number"
                    required
                    value={userInputValues.annualInvestment}
                    onChange={(event) => onChangeInput('annualInvestment', event.target.value)}
                />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected return</label>
                <input type="number" required
                    value={userInputValues.expectedReturn}
                    onChange={(event) => onChangeInput('expectedReturn', event.target.value)}
                />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required
                    value={userInputValues.duration}
                    onChange={(event) => onChangeInput('duration', event.target.value)}
                />
            </p>
        </div>
    </section>
}