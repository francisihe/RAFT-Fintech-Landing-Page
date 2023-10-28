import GetStartedBig from "./buttons/GetStartedBig"
import HeroTransparentButton from "./buttons/HeroTransparentButton"
import heroImage from '../assets/images/hero-image.svg'

const Hero = () => {
    return (
        <div>
            <div className="mx-auto my-16 text-center max-w-2xl">
                <HeroTransparentButton />
                <div className="my-4"><h1 className="text-white tracking-wider text-6xl">Building the future of banking.</h1></div>
                <div className="m-auto my-4 max-w-sm"><p className="text-custom-offwhite">Experience the future of banking with RAFT. We're here to empower your financial journey.</p></div>
                <GetStartedBig />
            </div>

            <div className="m-auto px-6 h-auto">
                
                <img 
                src={heroImage} 
                alt='RAFT-Hero-Image'
                className="mx-auto object-cover max-w-screen"/>
            </div>
        </div>
    )
}

export default Hero