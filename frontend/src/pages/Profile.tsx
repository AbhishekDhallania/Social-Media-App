import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays } from 'lucide-react';
import { Search } from "lucide-react"
function Profile() {
    return (
        <div className="flex m-auto max-w-7xl min-h-screen">
            <div className=" hidden lg:block flex-1/4 flex-col justify-between  px-2 border-r-1"></div>
            {/* mid */}

            <div className=" flex-1/2 ">
                {/* arrow rearch */}
                <div className='flex justify-between p-4'>
                    <div>
                        <ArrowLeft className='hover:bg-primary/10 hover:rounded-full ' />
                    </div>
                    <div className='flex-col w-full mx-24'>
                        <p className='mt-0 font-bold text-xl '> Abhishek Dhallania</p>
                        <div className='text-xs text-gray-500 '> 0 posts</div>
                    </div>
                    <div>
                        <Search className='hover:bg-primary/10 rounded-full ' />
                    </div>
                </div>

                <div>
                    {/* bg fill */}
                    <div className='border-2 h-50 bg-primary/10 relative'>
                        {/* profilephoto */}
                        <img className='size-37 absolute z-51 mx-6 mt-35 rounded-full border-5 border-white' src="/K_Logo.jpg" alt="" />
                    </div>
                    {/* editprfile */}
                    <div className='flex'>
                        <Button className='ml-auto mt-4 rounded-4xl bg-white text-black border-1 hover:bg-primary/10 font-bold'>Edit Profile</Button>
                    </div>

                    <div className='flex-col mt-12 mx-6'>
                        <p className='font-bold text-2xl'>Abhishek Dhallania</p>
                        <p className='text-gray-500 font-medium'>@ADhallania60239</p>
                    </div>
                </div>
                <div className='flex mx-5  mt-4 text-gray-500'>
                    <CalendarDays className=" h-4 m-1"/>
                    <p className=''>Joined July 2025</p>
                </div>
                <div className='flex mx-6 mt-4'>
                    <p className='font-bold mx-1 hover:cursor-pointer hover:underline'>2</p>
                    <p className='text-gray-500  hover:cursor-pointer hover:underline'>Following</p>
                    <p className='font-bold ml-4 hover:cursor-pointer hover:underline'>0</p>
                    <p className='mx-1 text-gray-500 hover:cursor-pointer hover:underline'>Followers</p>
                </div>

                <div className='flex justify-evenly mt-10'>
                    <Button className='bg-white text-black hover:bg-primary/10'>Posts</Button>
                    <Button className='bg-white text-black hover:bg-primary/10'>Replies</Button>
                    <Button className='bg-white text-black hover:bg-primary/10'>Highlights</Button>
                    <Button className='bg-white text-black hover:bg-primary/10'>Articles</Button>
                    <Button className='bg-white text-black hover:bg-primary/10'>Media</Button>
                    <Button className='bg-white text-black hover:bg-primary/10'>Likes</Button>
                </div>
            </div>

            {/* Right */}
            <div className="hidden md:block flex-1/4 border-l-1"></div>
        </div>
    )
}

export default Profile;