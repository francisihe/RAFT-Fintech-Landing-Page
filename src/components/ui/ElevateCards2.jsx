import wealthManagement from '../../assets/images/wealth-management.svg'
import financialPlanning from '../../assets/images/financial-planning.svg'

const ElevateCards2 = () => {
    return (
        <div>
            <div className='flex gap-4 justify-center md:h-80 lg:h-full max-w-screen-lg mx-auto'>
                <img src={wealthManagement} alt='Wealth Management'/>
                <img src={financialPlanning} alt='Financial Planning' />
            </div>
        </div>
    )
}

export default ElevateCards2