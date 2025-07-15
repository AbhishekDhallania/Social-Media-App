import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useTheme from "@/hooks/useTheme";
import { Avatar } from "@radix-ui/react-avatar";
import { Activity, Bell, Ellipsis, HomeIcon, Mail, Search, SearchIcon, SunMoon, User, Users, Zap } from "lucide-react";

const menu = [
    {
        icon: <HomeIcon size={25} />,
        text: "Home",
        link: "/home"
    },
    {
        icon: <SearchIcon size={25} />,
        text: "Explore",
        link: "/home"
    },
    {
        icon: <Bell size={25} />,
        text: "Notifications",
        link: "/home"
    },
    {
        icon: <Mail size={25} />,
        text: "Messages",
        link: "/home"
    },
    {
        icon: <Users size={25} />,
        text: "Communities",
        link: "/home"
    },
    {
        icon: <Activity size={25} />,
        text: "Activites",
        link: "/home"
    },
    {
        icon: <Zap size={25} />,
        text: "Premium",
        link: "/home"
    },
    {
        icon: <User size={25} />,
        text: "Profile",
        link: "/home"
    },
    {
        icon: <SunMoon size={25} />,
        text: "Theme",
        link: "/home"
    },
    {
        icon: <Ellipsis size={25} />,
        text: "More",
        link: "/home"
    }
]

const trends = [
    { category: "Trending in India", topic: "#ReactJS", posts: "12.3K" },
    { category: "Trending in Tech", topic: "JavaScript", posts: "9.1K" },
    { category: "Trending Worldwide", topic: "OpenAI", posts: "20.4K" },
];

const suggestions = [
    {
        name: "Abhishek",
        username: "@abhishek",
        image: "/K_Logo.jpg"
    },
    {
        name: "Kapil Kumar",
        username: "@kk",
        image: "/K_Logo.jpg",
    },
];

function Home() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className="flex m-auto max-w-7xl min-h-screen">
            <div className=" hidden lg:block flex-1/4 flex-col justify-between  px-2 border-r-1">
                {/* Logo */}
                <div className="ml-2">
                    <span className="inline-flex rounded-full justify-center p-1 bg-black hover:bg-[#292828]">
                        <img className="h-10 rounded-full" src="/Y_Logo.png" alt="y_logo" />
                    </span>
                </div>
                {/* Menu */}
                <div>
                    <div className="mt-2">
                        {menu.map((item, index) => (
                            <div id={index.toString()} className="">
                                <div className="inline-flex hover:bg-primary/10 rounded-full py-3 px-4 items-center gap-6 text-xl">
                                    {item.icon}
                                    <span>{item.text}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button onClick={toggleTheme} className="rounded-full mt-2 py-6 font-semibold w-10/12 text-lg" size="lg" >Post</Button>
                </div>
                <div className="flex mt-6 justify-between items-center gap-4 py-2 px-2 rounded-full hover:bg-primary/10">
                    <div className="flex items-center gap-4">
                        <img className="h-10 rounded-full" src="K_Logo.jpg" alt="user logo" />
                        <div>
                            <p>Kapil Kumar</p>
                            <p className="text-sm text-gray-500">@KapilKumar_1</p>
                        </div>
                    </div>
                    <Ellipsis />
                </div>
            </div>
            <div className=" flex-1/2">center</div>

            {/* rightSidebar */}

            {/* 1.Top */}
            <div className="hidden md:block flex-1/4 border-l-1 ">
                <div className="mx-8 mt-2 relative w-full max-w-md ">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                        type="text"
                        placeholder="Search"
                        className="rounded-3xl pl-10 w-96 text-xl"
                    />
                </div>
                {/* Whatshappening */}
                <div className="" >
                    <Card className="mx-8 mt-4 gap-1.5">
                        <CardContent className="px-4 space-y-3">
                            <h2 className="font-bold text-lg">What’s happening</h2>
                            {trends.map((item, idx) => (
                                <div key={idx} className="flex flex-col text-sm hover:bg-primary/10 w-full hover:cursor-pointer">
                                    <p className="text-gray-500 flex justify-between ">{item.category}
                                        <Ellipsis className="hover:bg-sky-100 rounded-full color:sky:100" />
                                    </p>
                                    <p className="font-bold">{item.topic}</p>
                                    <p className="text-gray-500 text-xs">{item.posts} Posts</p>
                                </div>
                            ))}
                            <p className="text-blue-400 hover:bg-primary/10 hover:cursor-pointer">Show more</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Who to follow */}

                <div className="mx-8 mt-2">
                    <Card>
                        <CardContent className=" space-y-3">
                            <h2 className="font-bold text-lg">Who to follow</h2>
                            <div className="hover:cursor-pointer">
                                {suggestions.map((user, idx) => (
                                    <div key={idx} className="flex items-center justify-between hover:bg-primary/10">
                                        <div className="flex items-center gap-3 ">
                                            <Avatar className="w-10 h-10">
                                                <AvatarImage src={user.image} alt={user.name} className="rounded-full" />
                                                <AvatarFallback className="hover:underline">{user.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-medium text-sm">{user.name}</p>
                                                <p className="text-gray-500 text-xs">{user.username}</p>
                                            </div>
                                        </div>
                                        <Button className="rounded-full">
                                            Follow
                                        </Button>
                                    </div>
                                ))}
                            </div>
                            <p className="text-blue-400 hover:bg-primary/10 ">Show more</p>
                        </CardContent>
                    </Card>
                </div>

                {/* footer  */}
                <div className="text-xs text-gray-500 space-x-2 mx-8 mt-4">
                    <span className="hover:underline cursor-pointer">Terms of Service    |</span>
                    <span className="hover:underline cursor-pointer">Privacy Policy    |</span>
                    <span className="hover:underline cursor-pointer">Cookie Policy    |</span>
                    <div></div>
                    <span className="hover:underline">More  ...</span>
                    <span>© 2025 Y Corp.</span>

                </div>

            </div>
        </div>
    );
}


export default Home