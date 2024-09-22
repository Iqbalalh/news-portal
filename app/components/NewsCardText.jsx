import SideTitle from "./SideTitle"
import DateText from "./DateText"
import Link from "next/link"

export default function BreakingNews({ id, title, date, props }) {
    return (
        <div className="flex">
            <Link href={`/`} onClick={() => localStorage.setItem('props', props)}>
                <div className="w-full text-left">
                    <SideTitle title={title} />
                    <DateText date={date} textColor="text-gray-600" textSize="text-xs" />
                </div>
            </Link>
        </div>
    )
}
