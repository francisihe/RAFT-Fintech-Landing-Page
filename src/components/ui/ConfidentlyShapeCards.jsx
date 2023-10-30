import spendBetter from '../../assets/images/spend-better.svg'
import investBetter from '../../assets/images/invest-better.svg'

const ConfidentlyShapeCards = () => {
    return (
        <div className='flex gap-4'>
            <div className='w-1/2'><img src={spendBetter} alt='Spend Better' className="max-w-full h-auto"/></div>
            <div className='w-1/2'><img src={investBetter} alt='Invest Better' className="max-w-full h-auto" /></div>
        </div>
    )
}

export default ConfidentlyShapeCards