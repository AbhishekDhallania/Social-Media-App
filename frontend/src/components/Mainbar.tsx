import { Button } from "./ui/button"

const Mainbar = () => {
    return (
        <div className=" flex-1/2 ">
            <div className="flex justify-evenly flex-1/4 h-15 p-3">
                <Button className="">For You</Button>
                <Button className="">Following</Button>
            </div>
            <div className="border h-25">
            </div>
        </div>
    )
}

export default Mainbar