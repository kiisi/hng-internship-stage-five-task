import Navbar from "@/components/common/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AppLayout from "@/layouts/app-layout";
import { ImageIcon } from "lucide-react";

export default function Page() {

    return (
        <AppLayout>
            <div className="flex flex-col h-full">
                <div className="p-[40px]">
                    <header className="mb-[40px]">
                        <h1 className="text-gray font-bold text-[32px] mb-[8px]">Profile Details</h1>
                        <p className="text-gray-alt">Add your details to create a personal touch to your profile.</p>
                    </header>

                    <div className="flex flex-col gap-[24px]">
                        <div className="bg-whitesmoke rounded-[12px] p-[20px] flex gap-[16px] justify-between items-center">
                            <p className="max-w-[200px] w-full">Profile picture</p>
                            <div className="flex items-center gap-[24px]">
                                <div className="w-[193px] grid place-items-center shrink-0 h-[193px] rounded-[12px] bg-primary-light">
                                    <div className="grid place-items-center font-semibold text-center text-primary">
                                        <div className="mb-[8px]"><ImageIcon /></div>
                                        <p className="text-primary">+ Upload Image</p>
                                    </div>
                                </div>
                                <p className="text-[12px] text-[#888888]">Image must be below 1024x1024px. Use PNG or JPG format.</p>
                            </div>
                        </div>
                        <div className="bg-whitesmoke rounded-[12px] p-[20px]">
                            <div className="flex gap-[16px] justify-between items-center mb-[12px]">
                                <p className="max-w-[200px] w-full">First Name*</p>
                                <Input
                                    placeholder="e.g John"
                                    type="text"
                                    name="firstName"
                                    containerClassName="flex-1"
                                />
                            </div>
                            <div className="flex gap-[16px] justify-between items-center mb-[12px]">
                                <p className="max-w-[200px] w-full">Last Name*</p>
                                <Input
                                    placeholder="e.g. Appleseed"
                                    type="text"
                                    name="lastName"
                                    containerClassName="flex-1"
                                />
                            </div>
                            <div className="flex gap-[16px] justify-between items-center mb-[12px]">
                                <p className="max-w-[200px] w-full">Email*</p>
                                <Input
                                    placeholder="e.g. email@example.com"
                                    type="email"
                                    name="email"
                                    containerClassName="flex-1"
                                />
                            </div>
                        </div>
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
