import SideTitle from "./SideTitle"
import DateText from "./DateText"
import Link from "next/link"

export default function ContentNewsCard({ image, title, date, props }) {
    return (
        <Link href={`/`} onClick={() => localStorage.setItem('props', props)}>
            <div className="flex px-4">
                <div className="w-1/3">
                    <img src={image} alt="Side Image" className="h-20 w-full object-cover" />
                </div>
                <div className="w-2/3 text-left pl-4">
                    <SideTitle title={title} className="font-extrabold"/>
                    <DateText date={date} textColor="text-gray-600" textSize="text-xs" />
                </div>
            </div>
        </Link>
    )
}
