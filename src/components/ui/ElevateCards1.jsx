import seamlessPayments from '../../assets/images/seamless-payments.svg'
import smartInvesting from '../../assets/images/smart-investing.svg'

const ElevateCards1 = () => {
    return (
        <div className='mb-4'>
            <div className='flex gap-4 justify-center md:h-80 md:w-auto lg:m-auto lg:h-full'>
                <div><img src={seamlessPayments} alt='Seamless Payments' className="max-w-full h-auto"/></div>
                <div><img src={smartInvesting} alt='Smart Investing' className="max-w-full h-auto"/></div>
            </div>
        </div>
    )
}

export default ElevateCards1