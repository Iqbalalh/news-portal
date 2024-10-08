"use client"
import NavBar from "@/app/components/NavBar";
import DateText from "@/app/components/DateText";
import { IoMdTime } from "react-icons/io";
import CustomFooter from "@/app/components/CustomFooter";
import SocialMediaContainer from "@/app/components/SocialMediaContainer";
import HTMLReactParser from "html-react-parser";

export default function NewsContent({ props }) {
  return (
    <div
      className="lg:flex lg:flex-col items-center justify-center"
      style={{ overflowX: "hidden" }}
    >
      <div className="header lg:w-full lg:fixed top-0 z-50 bg-white">
        <NavBar props={props} />
      </div>

      <div className="lg:w-10/12 lg:mt-40 px-4 mb-4">
        <div className="flex items-center">
          <span className="text-lg text-gray-500 mx-2"> / </span>
          <p className="text-lg text-gray-500 overflow-hidden whitespace-nowrap w-full leading-none overflow-ellipsis">
            {props?.title}
          </p>
        </div>
        <h1 className="lg:text-4xl text-3xl pt-5 pb-5 font-bold ">
          {props?.title}
        </h1>
        <div className="flex">
          <IoMdTime className="mr-1 text-gray-600" />
          <DateText
            className="items-center"
            date={props?.publishedAt}
            textColor="text-gray-600"
            textSize="lg:text-md text-sm"
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 pt-5">
          <div className="lg:col-span-3 md:col-span-1 justify-left items-center lg:mr-5">
            <center>
              <img
                className="min-w-full sm:max-h-48 md:max-h-56 lg:max-h-full img-content"
                src={props?.urlToImage}
                alt="Image"
              />
            </center>
            <h2 className="text-left lg:text-lg text-sm italic text-gray-500 w-full">
              {props?.name}
            </h2>
            <div className="lg:text-xl text-lg mt-5">
              {HTMLReactParser(props?.content)}
            </div>
          </div>
          <div className="lg:col-span-1 hidden md:block lg:block">
            <SocialMediaContainer
              title="Kanal Youtube"
              src="https://widget.taggbox.com/148533"
              textColor="#FF0000"
            />
          </div>
        </div>
        <h3 className="mt-5 text-lg text-gray-600">
          Author: {props?.author}
        </h3>
        {/* <ReadNext
          title={props?.headline[3].title}
          image={`/storage/${imgNext}`}
          id={props?.headline[3].id}
        /> */}
      </div>

      <div className="footer lg:w-full sm:mt-15 lg:mt-10">
        <CustomFooter />
      </div>
    </div>
  );
}
