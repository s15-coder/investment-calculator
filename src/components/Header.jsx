import imageLogo from '../assets/investment-calculator-logo.png'
export default function Header() {
    return <header id='header'>
        <img src={imageLogo} alt="Bag of money" />
        <h1>Investment Calculator</h1>
    </header>
}