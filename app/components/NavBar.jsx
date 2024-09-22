import { TextInput, Button } from "flowbite-react";
import Link from "next/link";

export default function NavBar({ props }) {
    console.log(props)
    return (
        <>
            <header className="block navbar">
                <div className="flex justify-between items-center px-4 my-3 extend-bg">
                    
                    <Link href="/" className="flex items-center">
                        <img className="max-h-8" src="/assets/svg/logo-no-background.svg" alt="" />
                        <h1 className="ml-4 font-bold text-blue-900 text-4xl">NUIS NEWS</h1>
                    </Link>
                    <div className="flex items-center space-x-2">
                        <TextInput
                            // rightIcon={IoIosSearch}
                            type="text"
                            className="visible ml-2 md:visible"
                            placeholder="search"
                        />
                        <div className="hidden md:flex items-center space-x-2">
                            <Link href="">
                                <img src="/assets/x.png" height={25} width={25} alt="" />
                            </Link>
                            <Link href="">
                                <img src="/assets/instagram.png" alt="" />
                            </Link>
                            <Link href="">
                                <img src="/assets/facebook.png" alt="" />
                            </Link>
                            <Link href="">
                                <img src="/assets/youtube.png" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center py-1 overflow-x-auto mt-2 mb-1 bg-blue-900 px-4 extend-bg whitespace-nowrap">
                    <div className="category flex space-x-5">
                        <Link className="text-white" href="/category/business">
                            Bisnis
                        </Link>
                        <Link className="text-white" href="/category/science">
                            Sains
                        </Link>
                        <Link className="text-white" href="/category/technology">
                            Teknologi
                        </Link>
                        <Link className="text-white" href="/category/health">
                            Kesehatan
                        </Link>
                        <Link className="text-white" href="/category/sports">
                            Olahraga
                        </Link>
                    </div>

                    <div className="flex pl-5 items-center space-x-5">
                        <Link className="text-white" href="">
                            Profil
                        </Link>
                        <Link className="text-white" href="">
                            Visi Misi
                        </Link>
                        <Link className="bg-white text-blue-900 rounded-full py-1 px-2 hover:cursor-pointer" href="">
                            Sign In
                        </Link>
                    </div>
                </div>

                <div className="marquee px-4 py-1 mb-1 flex items-center overflow-hidden extend-bg whitespace-nowrap">
                    <span className="inline-block mr-2">Breaking News : </span>
                    <div className="marquee-scroll">
                        <marquee className="pl-2 flex space-x-10">
                            {props?.slice(0, 5).map((item) => (
                                <Link className="hover:underline" key={item.url} href={`/read`}>
                                    {item.title}
                                </Link>
                            ))}
                        </marquee>
                    </div>
                </div>
            </header>
        </>
    );
}
