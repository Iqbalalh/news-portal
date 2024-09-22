import React, { useRef } from "react";
import Link from "next/link";

export default function NewsHeader({ children, tagline, category, color, props }) {
    const linkRef = useRef(null);

    return (
        <div className="w-full">
            <button
                type="button"
                className={`ml-4 px-4 font-bold text-white text-md p-2 hover:cursor-default bg-${color}`}
            >
                {tagline}
            </button>
            <Link ref={linkRef} href={`/category/${category}`} className={`float-right px-4 text-gray-500 text-sm mt-5 mb-0`}>
                lihat semua
            </Link>
            <hr className={`mx-4 px-4 mb-2 border-${color} border-t-2`} />
            {children(linkRef)}
        </div>
    );
}
