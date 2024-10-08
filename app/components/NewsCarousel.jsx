import { Carousel } from 'flowbite-react';
import DateText from './DateText';
import Link from 'next/link';

export default function NewsCarousel({ props }) {
    return (
        <div className="px-4 h-48 md:h-64 lg:h-full img-carousel mb-4 overflow-hidden relative">
            <Carousel indicators={false}>
                {props?.slice(0, 5).map((item, index) => (
                        <div className="item bg-cover relative" key={index} style={{ backgroundImage: `url(${item.urlToImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                                <Link href={`/`} onClick={() => localStorage.setItem('props', props[index])}>
                                    <h2 className='lg:text-2xl hover:underline text-md pb-1 line-clamp-2'>{item.title}</h2>
                                    <DateText date={item.publishedAt} textColor="text-white" textSize="lg:text-md text-xs"/>
                                </Link>
                            </div>
                        </div>
                ))}
            </Carousel>
        </div>
    )
}
