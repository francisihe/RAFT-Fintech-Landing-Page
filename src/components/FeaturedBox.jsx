import forbesLogo from '../assets/logos/forbes-logo.svg'
import cnbcLogo from '../assets/logos/cnbc-logo.svg'
import bloombergLogo from '../assets/logos/bloomberg-logo.svg'
import reutersLogo from '../assets/logos/reuters-logo.svg'
import cnnLogo from '../assets/logos/cnn-logo.svg'

const FeaturedBox = () => {
    return (
        <div className='my-16'>
            <div className="mx-auto text-custom-offwhite text-center max-w-2xl">
                FEATURED AND SEEN IN
            </div>

            <div className='flex gap-5 py-6 justify-center'>
                <img src={forbesLogo} />
                <img src={cnbcLogo} />
                <img src={bloombergLogo} />
                <img src={reutersLogo} />
                <img src={cnnLogo} />
            </div>

        </div>
    )
}

export default FeaturedBox