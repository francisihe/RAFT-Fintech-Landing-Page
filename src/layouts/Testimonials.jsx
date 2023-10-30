import TestimonialCard from "../components/ui/TestimonialCard"
import robertImage from '../assets/images/robert.svg'
import cameronImage from '../assets/images/cameron.svg'
import estherImage from '../assets/images/esther.svg'

const Testimonials = () => {
    return (
        <div className="bg-custom-green-2 w-screen pb-20">
            <div className="bg-inherit mx-auto text-center max-w-2xl py-20">
                <div className="bg-inherit">
                    <h1 className="text-black tracking-wider text-6xl bg-inherit">
                        Join over 3 million members
                    </h1>
                </div>
            </div>

            <div className="flex bg-transparent md:w-full md:px-14 lg:mx-auto lg:max-w-screen-2xl">
                <div className="w-1/3">

                    <TestimonialCard
                        testimonial='RAFT has transformed my approach to finance. 
                    Their smart investing options have helped me grow my wealth, 
                    and their user-friendly platform makes managing my money a breeze. 
                    I&#8217;ve never felt more confident about my financial'

                        name='Robert Fox'
                        img={robertImage}
                    />
                </div>

                <div className="w-1/3">
                    <TestimonialCard
                        testimonial='I can&#8217;t express how grateful I am to RAFT. 
                    Their wealth management services have been a game-changer for my family&#8217;s financial security. 
                    The expert guidance and personalized strategies have given us peace of mind, 
                    knowing that our future is in capable hands.'

                        name='Cameron Williamson'
                        img={cameronImage}
                    />
                </div>

                <div className="w-1/3">
                    <TestimonialCard
                        testimonial='RAFT&#8217;s financial planning services have been a lifeline for me. 
                    I always struggled with managing my money, but their team crafted a tailored plan that addressed my goals and concerns. 
                    It&#8217;s been a game-changer in achieving my financial dreams'

                        name='Esther Howard'
                        img={estherImage}
                    />
                </div>
            </div>
        </div>
    )
}

export default Testimonials