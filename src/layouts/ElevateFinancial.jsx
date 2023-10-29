import ElevateCards1 from "../components/ui/ElevateCards1"
import ElevateCards2 from "../components/ui/ElevateCards2"


const ElevateFinancial = () => {
    return (
        <div className="mt-16 mb-24">
            <div className="mx-auto my-16 text-center max-w-2xl">
                <div>
                    <h2 className="text-white tracking-wide text-5xl">
                        Elevate Your Financial {<br />}
                        Journey With RAFT
                    </h2></div>
                <div className="m-auto my-4 max-w-lg">
                    <p className="text-custom-offwhite text-sm">
                        RAFT offers a world of financial possibilities.
                        From investments to payments, we've got you covered.
                        Join us and unlock your financial potential today.
                    </p>
                </div>
            </div>

            <div>
                <ElevateCards1 />
                <ElevateCards2 />
            </div>
        </div>
    )
}

export default ElevateFinancial