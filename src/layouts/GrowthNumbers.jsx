import growthImage from '../assets/images/section-image-3.svg'

const GrowthNumbers = () => {
    return (
        <div>
            <div className="max-w-screen-lg lg:max-w-screen-2xl lg:mx-60 px-14 ">
                <div className="flex justify-between text-white text-center py-16 max-w-full">
                    <div>
                        <div className="font-medium text-6xl mb-2">50+</div>
                        <div>CITIES</div>
                    </div>
                    <div>
                        <div className="font-medium text-6xl mb-2">50,000+</div>
                        <div>TRANSACTIONS</div>
                    </div>
                    <div>
                        <div className="font-medium text-6xl mb-2">3M+</div>
                        <div>USERS</div>
                    </div>
                    <div>
                        <div className="font-medium text-6xl mb-2">5</div>
                        <div>USER RATINGS</div>
                    </div>
                </div>
            </div>

            <div>
                <img src={growthImage} className='h-full w-full' />
            </div>
        </div>
    )
}

export default GrowthNumbers
