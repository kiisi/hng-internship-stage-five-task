"use client"
import LineLoader from "@/components/common/line-loader";
import { CodepenIcon, CodeWarsAltIcon, CodeWarsIcon, DevToAltIcon, DevToIcon, FacebookIcon, FreeCodeCampAltIcon, FreeCodeCampIcon, FrontendMentorIcon, GithubIcon, GitlabIcon, HashnodeIcon, LinkedinIcon, LinkIcon, MenuIcon, ProfileIcon, StackoverflowIcon, TwitchIcon, TwitterAltIcon, TwitterIcon, YoutubeIcon } from "@/components/common/svgs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, useLinkContext } from "@/contexts/links";
import { useUserContext } from "@/contexts/user";
import AppLayout from "@/layouts/app-layout";
import { nanoid } from "nanoid";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";


interface OuterObject {
  [key: string]: Link;
}

export default function Page() {

  const { linkState, setLink, save, removeLink } = useLinkContext()

  const { user } = useUserContext()

  const links = linkState.links

  const loading = linkState.loading

  const newLinkHandler = () => {
    setLink({
      title: '',
      url: '',
      id: nanoid(),
      user_id: user?.id ?? ''
    })
  }

  const removeLinkHandler = (data: Link) => removeLink(data)

  const formDataHandler = (e: ChangeEvent<HTMLInputElement>, id: string) => {

    const index = links.findIndex(item => item.id === id);

    const payload: Link = {
      ...links[index],
      [e.target.name]: e.target.value,
    }
    setLink(payload);
  }

  const onSelect = (id: string, value: string) => {
    const index = links.findIndex(item => item.id === id);

    const payload: Link = {
      ...links[index],
      title: value,
    }
    setLink(payload);
  }

  const submit = () => save(links)

  return (
    <AppLayout>
      <div className="flex flex-col h-full">
        <div className="p-[16px] md:p-[40px]">
          <header className="mb-[40px]">
            <h1 className="text-gray font-bold text-[24px] lg:text-[32px] mb-[8px]">Customize your links</h1>
            <p className="text-gray-alt">Add/edit/remove links below and then share all your profiles with the world!</p>
          </header>
          <div className="mb-[24px]">
            <Button onClick={newLinkHandler} variant="secondary" className="w-full">
              + Add new link
            </Button>
          </div>
          {
            loading ? (
              <LineLoader />
            ) : (
              <div className="flex flex-col gap-[24px]">
                {
                  links.length > 0 ? (
                    links.map((link, index) => (
                      <div key={link.id} className="bg-whitesmoke rounded-[12px] p-[20px]">
                        <header className="flex items-center justify-between mb-[12px]">
                          <div className="flex items-center gap-[8px]">
                            <MenuIcon />
                            <h2 className="font-bold text-[#888888]">Link #{links.length - index}</h2>
                          </div>
                          <span onClick={() => removeLinkHandler(link)} className="text-gray-alt cursor-pointer">Remove</span>
                        </header>
                        <div>
                          <div className="mb-[12px]">
                            <span className="inline-block text-gray text-[12px] mb-[4px]">Platform</span>
                            <Select value={link.title} onValueChange={(value) => onSelect(link.id, value)}>
                              <SelectTrigger icon={<LinkIcon className="h-[16px] w-[16px]" />} className="w-full">
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                              <SelectContent className="max-h-[260px] overflow-y-auto devlinks-scroll-bar-min">
                                <SelectItem icon={<GithubIcon />} value="github">Github</SelectItem>
                                <SelectSeparator />
                                <SelectItem icon={<YoutubeIcon />} value="youtube">Youtube</SelectItem>
                                <SelectSeparator />
                                <SelectItem icon={<LinkedinIcon />} value="linkedin">Linkedin</SelectItem>
                                <SelectSeparator />
                                <SelectItem icon={<GitlabIcon />} value="gitlab">Gitlab</SelectItem>
                                <SelectSeparator />
                                <SelectItem icon={<HashnodeIcon />} value="hashnode">Hashnode</SelectItem>
                                <SelectSeparator />
                                <SelectItem icon={<CodepenIcon />} value="codepen">Codepen</SelectItem>
                                <SelectSeparator />
                                <SelectItem icon={<FrontendMentorIcon />} value="frontend mentor">Frontend Mentor</SelectItem>
                                <SelectSeparator />
                                <SelectItem icon={<TwitterIcon />} value="twitter">Twitter</SelectItem>
                                <SelectSeparator />
                                <SelectItem icon={<FacebookIcon />} value="facebook">Facebook</SelectItem>
                                <SelectSeparator />
                                <SelectItem icon={<TwitchIcon />} value="twitch">Twitch</SelectItem>
                                <SelectSeparator />
                                <SelectItem icon={<DevToIcon />} value="dev.to">Dev.to</SelectItem>
                                <SelectSeparator />
                                <SelectItem icon={<CodeWarsIcon />} value="codewars">Codewars</SelectItem>
                                <SelectSeparator />
                                <SelectItem icon={<FreeCodeCampIcon />} value="freecodecamp">FreeCodeCamp</SelectItem>
                                <SelectSeparator />
                                <SelectItem icon={<StackoverflowIcon />} value="stack overflow">Stack Overflow</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label htmlFor={link.id} className="inline-block text-gray text-[12px] mb-[4px]">Link</label>
                            <Input
                              id={link.id}
                              type="url"
                              name="url"
                              leading={<LinkIcon className="h-[16px] w-[16px]" />}
                              placeholder="e.g. https://www.github.com/johnappleseed"
                              value={link.url}
                              onChange={(e) => formDataHandler(e, link.id)}
                            />
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="bg-whitesmoke rounded-[12px] py-[62.5px] px-[20px] grid place-items-center text-center">
                      <Image
                        src="/images/get-started.svg"
                        alt="Get Started"
                        width={249}
                        height={160}
                        className="mb-[40px]"
                      />
                      <h1 className="text-[24px] md:text-[32px] text-gray mb-[24px] font-bold">Let's get you started</h1>
                      <p className="max-w-[488px] mx-auto text-center text-gray-alt">Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We're here to help you share your profiles with everyone!</p>
                    </div>
                  )
                }
              </div>
            )
          }
        </div>
        <div className="mt-auto">
          <div className="border-t-[1px] px-[16px] md:px-[40px] border-t-[#D9D9D9] flex justify-end py-[20px]">
            <Button onClick={submit} className="w-full md:w-max">
              Save
            </Button>
          </div>
        </div>
      </div>
    </AppLayout >
  );
}

