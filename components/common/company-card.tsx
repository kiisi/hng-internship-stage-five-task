import { LinkProps } from "@/lib/utils";
import { ArrowRightIcon, CodepenAltIcon, CodeWarsAltIcon, DevToAltIcon, FreeCodeCampAltIcon, FrontendMentorIcon, GithubAltIcon, GitlabAltIcon, HashnodeAltIcon, LinkedinAltIcon, StackoverflowAltIcon, TwitchAltIcon, TwitterAltIcon, YoutubeAltIcon } from "./svgs";
import Link from "next/link";

export default function CompanyCard(props: LinkProps) {

    const { id, title, url } = props;

    switch (title) {
        case "github": {
            return (
                <Link href={url} target="_blank" className="w-full bg-[#2E2E2E] rounded-[8px] p-[16px] flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                        <GithubAltIcon />
                        <span className="text-[12px] text-white capitalize">{title}</span>
                    </div>
                    <ArrowRightIcon />
                </Link>
            )
        }
        case "dev.to": {
            return (
                <Link href={url} target="_blank" className="w-full bg-[#2E2E2E] rounded-[8px] p-[16px] flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                        <DevToAltIcon />
                        <span className="text-[12px] text-white capitalize">{title}</span>
                    </div>
                    <ArrowRightIcon />
                </Link>
            )
        }
        case "frontend mentor": {
            return (
                <Link href={url} target="_blank" className="w-full bg-white rounded-[8px] p-[16px] flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                        <FrontendMentorIcon />
                        <span className="text-[12px] text-gray capitalize">{title}</span>
                    </div>
                    <ArrowRightIcon className="fill-gray" />
                </Link>
            )
        }
        case "codewars": {
            return (
                <Link href={url} target="_blank" className="w-full bg-white rounded-[8px] p-[16px] flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                        <CodeWarsAltIcon />
                        <span className="text-[12px] text-white capitalize">{title}</span>
                    </div>
                    <ArrowRightIcon />
                </Link>
            )
        }
        case "codewars": {
            return (
                <Link href={url} target="_blank" className="w-full bg-[#8A1A50] rounded-[8px] p-[16px] flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                        <CodeWarsAltIcon />
                        <span className="text-[12px] text-white capitalize">{title}</span>
                    </div>
                    <ArrowRightIcon />
                </Link>
            )
        }
        case "twitter": {
            return (
                <Link href={url} target="_blank" className="w-full bg-[#2D68FF] rounded-[8px] p-[16px] flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                        <TwitterAltIcon />
                        <span className="text-[12px] text-white capitalize">{title}</span>
                    </div>
                    <ArrowRightIcon />
                </Link>
            )
        }
        case "freecodecamp": {
            return (
                <Link href={url} target="_blank" className="w-full bg-[#302267] rounded-[8px] p-[16px] flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                        <FreeCodeCampAltIcon />
                        <span className="text-[12px] text-white capitalize">{title}</span>
                    </div>
                    <ArrowRightIcon />
                </Link>
            )
        }
        case "linkedin": {
            return (
                <Link href={url} target="_blank" className="w-full bg-[#2D68FF] rounded-[8px] p-[16px] flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                        <LinkedinAltIcon />
                        <span className="text-[12px] text-white capitalize">{title}</span>
                    </div>
                    <ArrowRightIcon />
                </Link>
            )
        }
        case "gitlab": {
            return (
                <Link href={url} target="_blank" className="w-full bg-[#EB4925] rounded-[8px] p-[16px] flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                        <GitlabAltIcon />
                        <span className="text-[12px] text-white capitalize">{title}</span>
                    </div>
                    <ArrowRightIcon />
                </Link>
            )
        }
        case "youtube": {
            return (
                <Link href={url} target="_blank" className="w-full bg-[#EE3939] rounded-[8px] p-[16px] flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                        <YoutubeAltIcon />
                        <span className="text-[12px] text-white capitalize">{title}</span>
                    </div>
                    <ArrowRightIcon />
                </Link>
            )
        }
        case "hashnode": {
            return (
                <Link href={url} target="_blank" className="w-full bg-[#0330D1] rounded-[8px] p-[16px] flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                        <HashnodeAltIcon />
                        <span className="text-[12px] text-white capitalize">{title}</span>
                    </div>
                    <ArrowRightIcon />
                </Link>
            )
        }
        case "facebook": {
            return (
                <Link href={url} target="_blank" className="w-full bg-[#2442AC] rounded-[8px] p-[16px] flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                        <HashnodeAltIcon />
                        <span className="text-[12px] text-white capitalize">{title}</span>
                    </div>
                    <ArrowRightIcon />
                </Link>
            )
        }
        case "stack overflow": {
            return (
                <Link href={url} target="_blank" className="w-full bg-[#EC7100] rounded-[8px] p-[16px] flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                        <StackoverflowAltIcon />
                        <span className="text-[12px] text-white capitalize">{title}</span>
                    </div>
                    <ArrowRightIcon />
                </Link>
            )
        }
        case "twitch": {
            return (
                <Link href={url} target="_blank" className="w-full bg-[#EE3FC8] rounded-[8px] p-[16px] flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                        <TwitchAltIcon />
                        <span className="text-[12px] text-white capitalize">{title}</span>
                    </div>
                    <ArrowRightIcon />
                </Link>
            )
        }
        case "codepen": {
            return (
                <Link href={url} target="_blank" className="w-full bg-[#2E2E2E] rounded-[8px] p-[16px] flex items-center justify-between">
                    <div className="flex items-center gap-[8px]">
                        <CodepenAltIcon />
                        <span className="text-[12px] text-white capitalize">{title}</span>
                    </div>
                    <ArrowRightIcon />
                </Link>
            )
        }
        default: {
            return (
                <div key={id} className="w-full bg-[#eeeeee] rounded-[8px] h-[44px]"></div>
            )
        }
    }
}