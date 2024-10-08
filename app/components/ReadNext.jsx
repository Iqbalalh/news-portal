import Link from "next/link";

export default function ReadNext({ title, image, id }) {
    return (
        <div className="grid lg:grid-cols-6 grid-cols-1 pt-10 border-t border-gray-300 mt-10">
            <Link className="lg:col-span-5 text-right mr-5" href={`/read`}>
                <Link className="p-1 bg-gray-200 text-right max-w-fit rounded-sm">Read Next</Link>
                <h1 className="text-cyan-800 hover:text-cyan-600 text-right lg:text-3xl text-2xl mt-3">{title}</h1>
            </Link>
            <div className="lg:col-span-1">
                <Link href={`/`} onClick={() => localStorage.setItem('props', props)}>
                    <img src={image} className="lg:w-full lg:h-48 hidden md:block lg:block" alt="img" />
                </Link>
            </div>
        </div>
    )
}
