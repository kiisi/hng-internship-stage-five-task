import CompanyCard from "@/components/common/company-card";
import Navbar from "@/components/common/navbar";
import { useLinkContext } from "@/contexts/links";
import { useUserContext } from "@/contexts/user";
import { CompanyTypes, parseProfileLink } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {

    const { user } = useUserContext()

    const { linkState } = useLinkContext()

    const links = linkState.links

    return (
        <div className="min-h-screen bg-whitesmoke md:p-[24px]">
            <div className="mb-[16px] md:mb-[24px]">
                <Navbar />
            </div>
            <div className="grid lg:grid-cols-[0.75fr_1fr] gap-[24px] px-[16px] md:px-0">
                <div className="hidden lg:grid bg-white p-[16px] rounded-[12px] place-items-center py-[101px]">
                    <div className="relative w-[308px] h-[632px] border-[1px] border-gray-alt rounded-[55px] p-[11px]">
                        <div className="relative w-full h-full">
                            <img src='/images/device-inner-frame.svg' alt="Device frame" className="w-full h-full absolute z-2" />
                            <div className="px-2 pt-14 pb-6 w-full h-full relative z-10">
                                <div className="w-full h-full overflow-y-auto devlinks-scroll-bar-min">
                                    <header className="grid place-items-center mb-[42px]">
                                        {
                                            user?.profile_picture ? (
                                                <div className="mb-[24px] relative w-[96px] h-[96px]">
                                                    <Image
                                                        src={user.profile_picture}
                                                        alt="Picture of the author"
                                                        quality={100}
                                                        fill={true}
                                                        loading="lazy"
                                                        className="rounded-full object-cover border-[4px] border-primary overflow-hidden"
                                                        unoptimized
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-[96px] h-[96px] rounded-full bg-[#eeeeee] mb-[24px]">
                                                </div>
                                            )
                                        }
                                        {
                                            user?.first_name || user?.last_name ? (
                                                <h2 className="text-[18px] leading-[27px] font-semibold text-gray mb-[4px]">{user.first_name} {user.last_name}</h2>
                                            ) : (
                                                <div className="w-[160px] h-[16px] bg-[#eeeeee] rounded-[10px] mb-[4px]"></div>
                                            )
                                        }
                                        {
                                            user?.email ? (
                                                <a href={`mailto:${user?.email}`} className="text-[14px] leading-[21px] text-gray-alt">{user?.email}</a>
                                            ) : (
                                                <div className="w-[72px] h-[8px] bg-[#eeeeee] rounded-[10px]"></div>
                                            )
                                        }
                                    </header>
                                    <div className="flex flex-col gap-[16px] w-full max-w-[237px] mx-auto">
                                        {
                                            links.map(link => (
                                                <CompanyCard
                                                    id={link.id}
                                                    key={link.id}
                                                    title={link.title as CompanyTypes}
                                                    url={link.url}
                                                    user_id={link.user_id}
                                                />
                                            ))
                                        }
                                        {
                                            5 - links.length >= 0 && [...Array(5 - links.length)].map((_, index) => (
                                                <div key={index} className="w-full bg-[#eeeeee] rounded-[8px] h-[44px]"></div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-[12px]">
                    {children}
                </div>
            </div >
        </div >
    )
}