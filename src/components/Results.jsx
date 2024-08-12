import { calculateInvestmentResults, formatter } from '../util/investment';
export default function Results({ inputValues }) {
    console.log(inputValues);
    const resultData = calculateInvestmentResults(inputValues)
    console.log(resultData);
    return <table id='result'>
        <thead>
            <tr>
                <td>Year</td>
                <td>Investment Value</td>
                <td>Interest (Year)</td>
                <td>Total Interest</td>
                <td>Invest Capital</td>
            </tr>
        </thead>
        <tbody>
            {resultData.map(data => {
                const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - inputValues.initialInvestment;
                const totalInvested = data.valueEndOfYear - totalInterest
                return <tr key={data.year}>
                    <td>{data.year}</td>
                    <td>{formatter.format(data.valueEndOfYear)}</td>
                    <td>{formatter.format(data.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalInvested)}</td>
                </tr>
            })}
        </tbody>
    </table>
}