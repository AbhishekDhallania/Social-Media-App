import LeftSidebar from "@/components/LeftSidebar"
import Mainbar from "@/components/Mainbar";
import RightSidebar from "@/components/RightSidebar";
import Profile from "./Profile";

function Home() {
    return (
        <div className="flex m-auto max-w-7xl min-h-screen">
            <LeftSidebar/>
            <Mainbar/>
            <Profile/>
            <RightSidebar/>
        </div>
    );
}

export default Home