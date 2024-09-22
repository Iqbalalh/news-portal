import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup } from "flowbite-react";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook, IoLogoYoutube } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";

export default function CustomFooter() {
    return (
        <Footer className="flex flex-col justify-between bg-gray-100">
            <div className="w-full bg-blue-900 px-4 lg:px-36 py-6 mt-2 overflow-x-auto justify-end">
                <div className="flex flex-col sm:flex-row justify-between">
                    <FooterCopyright
                        className="text-white text-sm md:visible lg:text-lg mb-4 sm:mb-0"
                        href=""
                        by="Iqbal Al Hafidzu Rahman"
                        year={2024}
                    />
                    <div className="flex flex-col mb-4 sm:mb-0 sm:flex-row sm:space-x list-none">
                        <FooterLink
                            className="text-white text-sm md:visible lg:text-lg"
                            href=""
                        >
                            Tentang Kami
                        </FooterLink>
                        <FooterLink
                            className="text-white text-sm md:visible lg:text-lg"
                            href=""
                        >
                            Redaksi
                        </FooterLink>
                        <FooterLink
                            className="text-white text-sm md:visible lg:text-lg"
                            href=""
                        >
                            Pedoman Media Siber
                        </FooterLink>
                        <FooterLink
                            className="text-white text-sm md:visible lg:text-lg"
                            href=""
                        >
                            Kontak Kami
                        </FooterLink>
                    </div>

                    <div className="flex items-center space-x-5">
                        <FooterIcon
                            className="text-white"
                            href="/"
                            icon={IoLogoFacebook}
                        />
                        <FooterIcon
                            className="text-white"
                            href="/"
                            icon={AiFillInstagram}
                        />
                        <FooterIcon
                            className="text-white"
                            href="/"
                            icon={IoLogoTiktok}
                        />
                        <FooterIcon
                            className="text-white"
                            href="/"
                            icon={IoLogoYoutube}
                        />
                    </div>
                </div>
            </div>
        </Footer>
    );
}
