import GetStartedBig from "../components/buttons/GetStartedBig"
import HeroTransparentButton from "../components/buttons/HeroTransparentButton"
import heroImage from '../assets/images/hero-image.svg'
import FeaturedBox from "../components/ui/FeaturedBox"

const Hero = () => {
    return (
        <div>
            <div className="mx-auto my-20 text-center max-w-2xl lg:max-w-4xl">
                <HeroTransparentButton />
                <div className="my-4">
                    <h1 className="text-white tracking-wider text-6xl lg:text-8xl">
                        Building the future of banking.
                    </h1>
                </div>
                <div className="m-auto my-4 max-w-sm">
                    <p className="text-custom-offwhite lg:text-lg">
                        Experience the future of banking with RAFT.
                        We're here to empower your financial journey.
                    </p>
                </div>
                <GetStartedBig />
            </div>

            <div className="m-auto px-6 h-auto">
                <img
                    src={heroImage}
                    alt='RAFT-Hero-Image'
                    className="mx-auto max-w-screen"
                />
            </div>

            <div>
                <FeaturedBox />
            </div>
        </div>
    )
}

export default Hero