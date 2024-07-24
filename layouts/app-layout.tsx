import Navbar from "@/components/common/navbar";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode}) {

    return (
        <div className="min-h-screen bg-whitesmoke p-[24px]">
            <div className="mb-[24px]">
                <Navbar />
            </div>
            <div className="grid grid-cols-[0.75fr_1fr] gap-[24px]">
                <div className="bg-white p-[16px] rounded-[12px] grid place-items-center py-[101px]">
                    <div className="relative w-[308px] h-[632px] border-[1px] border-gray-alt rounded-[55px] p-[11px]">
                        <div className="relative w-full h-full">
                            <img src='/images/device-inner-frame.svg' alt="Device frame" className="w-full h-full absolute" />
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