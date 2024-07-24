"use client"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cloneElement, ReactElement } from "react"
import { Button } from "../ui/button"
import { LinkIcon, ProfileIcon } from "./svgs"

export default function Navbar() {

    const pathname = usePathname()

    return (
        <nav className="flex items-center justify-between p-[16px] bg-white rounded-[12px]">
            <figure>
                <Image
                    src="/images/devlinks-logo.svg"
                    alt="Devlinks"
                    width={182.5}
                    height={40}
                    className="w-[142px] h-[32px] md:w-[182px] md:h-[40px]"
                />
            </figure>
            <div>
                <div className="flex gap-[16px] items-center">
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
                <Button variant="secondary">Preview</Button>
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

    const iconStyle = `${isActive ? 'fill-primary' : 'fill-gray-alt'} group-hover:fill-primary`

    const icon = cloneElement(leading, {
        className: iconStyle
    })

    return (
        <button className={cn("group text-gray-alt hover:text-primary font-semibold px-[27px] h-[46px] py-[11px] rounded-[8px] flex items-center gap-[8px]", isActive && "bg-primary-light text-primary", className)}>
            {icon}
            <span>{title}</span>
        </button>
    )
}