import wealthManagement from '../../assets/images/wealth-management.svg'
import financialPlanning from '../../assets/images/financial-planning.svg'

const ElevateCards2 = () => {
    return (
        <div>
            <div className='flex gap-4 mb-4 justify-center md:h-80 md:w-auto lg:m-auto lg:h-full'>
                <div><img src={wealthManagement} alt='Wealth Management'/></div>
                <div><img src={financialPlanning} alt='Financial Planning' /></div>
            </div>
        </div>
    )
}

export default ElevateCards2