

const TestimonialCard = ({testimonial, name, img}) => {
  return (
    <div className="flex flex-col space-y-4 justify-between h-full bg-custom-green-2 text-black border-l-2 border-black p-6">
        <div className="font-normal text-lg bg-transparent">
            {testimonial} 
        </div>
        <div className="flex justify-between bg-transparent">
            <div className="my-auto bg-transparent ">
                <div className="font-bold bg-transparent">{name}</div>
                <div className="text-xs bg-transparent">Happy RAFT User</div>
            </div>
            <div className="bg-transparent px-2">
                <img src={img} className="h-16 bg-transparent"/>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard