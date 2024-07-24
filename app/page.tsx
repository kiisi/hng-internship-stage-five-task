"use client"
import Navbar from "@/components/common/navbar";
import { GithubIcon, LinkedinIcon, LinkIcon, MenuIcon, ProfileIcon, YoutubeIcon } from "@/components/common/svgs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/select";
import AppLayout from "@/layouts/app-layout";
import Image from "next/image";

export default function Page() {

  return (
    <AppLayout>
      <div className="flex flex-col h-full">
        <div className="p-[40px]">
          <header className="mb-[40px]">
            <h1 className="text-gray font-bold text-[32px] mb-[8px]">Customize your links</h1>
            <p className="text-gray-alt">Add/edit/remove links below and then share all your profiles with the world!</p>
          </header>
          <div className="mb-[24px]">
            <Button variant="secondary" className="w-full">
              + Add new link
            </Button>
          </div>
          {/* <div className="flex flex-col gap-[24px]">
          <div className="bg-whitesmoke rounded-[12px] p-[20px]">
            <header className="flex items-center justify-between mb-[12px]">
              <div className="flex items-center gap-[8px]">
                <MenuIcon />
                <h2 className="font-bold text-[#888888]">Link #1</h2>
              </div>
              <span className="text-gray-alt">Remove</span>
            </header>
            <div>
              <div className="mb-[12px]">
                <span className="inline-block text-gray text-[12px] mb-[4px]">Platform</span>
                <Select>
                  <SelectTrigger icon={<LinkIcon className="h-[16px] w-[16px]" />} className="w-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem icon={<GithubIcon />} value="github">Github</SelectItem>
                    <SelectSeparator />
                    <SelectItem icon={<YoutubeIcon />} value="youtube">Youtube</SelectItem>
                    <SelectSeparator />
                    <SelectItem icon={<LinkedinIcon />} value="linkedin">Linkedin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="link-1" className="inline-block text-gray text-[12px] mb-[4px]">Link</label>
                <Input
                  id="link-1"
                  type="url"
                  name="link-1"
                  leading={<LinkIcon className="h-[16px] w-[16px]" />}
                  placeholder="e.g. https://www.github.com/johnappleseed"
                />
              </div>
            </div>
          </div>
        </div> */}
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
        </div>
        <div className="mt-auto">
          <div className="border-t-[1px] pr-[40px] border-t-[#D9D9D9] flex justify-end py-[20px]">
            <Button disabled={true}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

