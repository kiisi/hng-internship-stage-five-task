import Navbar from "@/components/common/navbar";
import { useLinkContext } from "@/contexts/links";
import { useUserContext } from "@/contexts/user";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode}) {

    const {} = useUserContext()

    const {} = useLinkContext()

    return (
        <div className="min-h-screen bg-whitesmoke p-[24px]">
            <div className="mb-[24px]">
                <Navbar />
            </div>
            <div className="grid lg:grid-cols-[0.75fr_1fr] gap-[24px]">
                <div className="hidden lg:grid bg-white p-[16px] rounded-[12px] place-items-center py-[101px]">
                    <div className="relative w-[308px] h-[632px] border-[1px] border-gray-alt rounded-[55px] p-[11px]">
                        <div className="relative w-full h-full">
                            <img src='/images/device-inner-frame.svg' alt="Device frame" className="w-full h-full absolute z-2" />
                            <div className="px-2 pt-14 relative w-full h-full z-10 overflow-y-auto devlinks-scroll-bar">
                                <header className="grid place-items-center mb-[56px]">
                                    <div className="w-[96px] h-[96px] rounded-full bg-[#eeeeee] mb-[24px]">
                                    </div>
                                    <div className="w-[160px] h-[16px] bg-[#eeeeee] rounded-[10px] mb-[13px]"></div>
                                    <div className="w-[72px] h-[8px] bg-[#eeeeee] rounded-[10px]"></div>
                                </header>
                                <div className="flex flex-col gap-[20px] w-full max-w-[237px] mx-auto">
                                    <div className="w-full bg-[#eeeeee] rounded-[8px] h-[44px]"></div>
                                    <div className="w-full bg-[#eeeeee] rounded-[8px] h-[44px]"></div>
                                    <div className="w-full bg-[#eeeeee] rounded-[8px] h-[44px]"></div>
                                    <div className="w-full bg-[#eeeeee] rounded-[8px] h-[44px]"></div>
                                    <div className="w-full bg-[#eeeeee] rounded-[8px] h-[44px]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-[12px]">
                    {children}
                </div>
            </div>
        </div>
    )
}