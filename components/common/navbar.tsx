"use client"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cloneElement, ReactElement } from "react"
import { Button } from "../ui/button"
import { EyeIcon, LinkIcon, ProfileIcon } from "./svgs"
import { useUserContext } from "@/contexts/user"

export default function Navbar() {

    const pathname = usePathname()

    const { user } = useUserContext()

    const userId = user?.id

    return (
        <nav className="flex items-center justify-between p-[16px] bg-white rounded-[12px]">
            <figure className="shrink-0">
                <div className="hidden md:block">
                    <Image
                        src="/images/devlinks-logo.svg"
                        alt="Devlinks"
                        width={182.5}
                        height={40}
                        className="w-[142px] h-[32px] lg:w-[182px] lg:h-[40px] shrink-0"
                    />
                </div>
                <div className="block md:hidden">
                    <Image
                        src="/devlinks.svg"
                        alt="Devlinks"
                        width={32}
                        height={32}
                        className="shrink-0"
                    />
                </div>
            </figure>
            <div>
                <div className="flex gap-[8px] md:gap-[16px] items-center">
                    <Link href="/">
                        <TabButton
                            title="Links"
                            leading={<LinkIcon />}
                            isActive={pathname === '/'}
                        />
                    </Link>
                    <Link href="/profile">
                        <TabButton
                            title="Profile Details"
                            leading={<ProfileIcon />}
                            isActive={pathname === '/profile'}
                        />
                    </Link>
                </div>
            </div>
            <div>
                <Link href={`/preview/${userId}`}>
                    <Button variant="secondary" className="px-[16px] md:px-[27px]">
                        <div className="hidden md:block">Preview</div>
                        <EyeIcon className="md:hidden" />
                    </Button>
                </Link>
            </div>
        </nav>
    )
}

interface TabButtonProps {
    isActive?: boolean;
    className?: string;
    leading: ReactElement
    title: string;
}

const TabButton = ({ isActive, title, className, leading }: TabButtonProps) => {

    const iconStyle = `${isActive ? 'fill-primary' : 'fill-gray-alt'} group-hover:fill-primary shrink-0`

    const icon = cloneElement(leading, {
        className: iconStyle
    })

    return (
        <button className={cn("group text-gray-alt hover:text-primary font-semibold px-[16px] md:px-[27px] h-[46px] py-[11px] rounded-[8px] flex items-center gap-[8px]", isActive && "bg-primary-light text-primary", className)}>
            {icon}
            <span className="hidden md:block">{title}</span>
        </button>
    )
}
