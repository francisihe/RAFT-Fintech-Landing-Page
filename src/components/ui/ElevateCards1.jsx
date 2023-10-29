import seamlessPayments from '../../assets/images/seamless-payments.svg'
import smartInvesting from '../../assets/images/smart-investing.svg'

const ElevateCards1 = () => {
    return (
        <div>
            <div className='flex gap-4 mb-4 justify-center md:h-80 lg:h-full max-w-screen-lg mx-auto'>
                <img src={seamlessPayments} alt='Seamless Payments'/>
                <img src={smartInvesting} alt='Smart Investing' />
            </div>
        </div>
    )
}

export default ElevateCards1