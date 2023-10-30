import ConfidentlyShapeCards from "../components/ui/ConfidentlyShapeCards"

const ConfidentlyShape = () => {
    return (
        <div className="max-w-screen-lg lg:max-w-screen-2xl lg:mx-60">
            <div className="mx-14 my-16 text-left max-w-2xl">
                <div>
                    <h2 className="text-white tracking-wide text-5xl">
                    Confidently Shape Your 
                    Financial Future
                    </h2></div>
                <div className="my-4 max-w-lg">
                    <p className="text-custom-offwhite text-sm">
                    At RAFT, we empower you to confidently shape your financial future.
                    Our modern approach simplifies saving and investing, making it easier than ever.
                    </p>
                </div>
            </div>

            <div className="max-w-screen-lg lg:max-w-screen-2xl px-14 mx-auto">
                <ConfidentlyShapeCards />
            </div>

        </div>
    )
}

export default ConfidentlyShape