import './App.css'
import ConfidentlyShape from './layouts/ConfidentlyShape'
import ElevateFinancial from './layouts/ElevateFinancial'
import GrowthNumbers from './layouts/GrowthNumbers'
import Hero from './layouts/Hero'
import IntroducingCards from './layouts/IntroducingCards'
import NavBar from './layouts/NavBar'
import SmartInvestments from './layouts/SmartInvestments'
import YourFinancialFreedon from './layouts/YourFinancialFreedon'

function App() {

  return (
    <div>
      <NavBar />
      <Hero />
      <ElevateFinancial />
      <YourFinancialFreedon />
      <SmartInvestments />
      <ConfidentlyShape />
      <GrowthNumbers />
      <IntroducingCards />
    </div>
  )
}

export default App
