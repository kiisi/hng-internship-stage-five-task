"use client"
import LineLoader from "@/components/common/line-loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, UserContextType, useUserContext } from "@/contexts/user";
import AppLayout from "@/layouts/app-layout";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";

export default function Page() {

    const { user, setUser, save } = useUserContext()

    return (
        <AppLayout>
            <div className="flex flex-col h-full">
                {
                    user ?
                        <ProfileInformation
                            user={user}
                            setUser={setUser}
                            save={save}
                        />
                        :
                        <div className="p-[40px]">
                            <LineLoader />
                        </div>
                }
            </div>
        </AppLayout>
    );
}

const ProfileInformation = ({ user, setUser, save }: UserContextType) => {

    const [formData, setFormData] = useState<User>({
        id: user?.id ?? '',
        email: user?.email ?? '',
        first_name: user?.first_name ?? '',
        last_name: user?.last_name ?? '',
        profile_picture: user?.profile_picture ?? '',
    })

    const formDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev: User) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const profilePicsHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        // const fileImg = e.target.files[0]
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            // Handle the file (e.g., upload it to a server or display a preview)
            try {
                const cloudinaryUrl = `https://api.cloudinary.com/v1_1/destinyfelixkiisi/image/upload`;

                // Upload image to Cloudinary
                const formData = new FormData();
                formData.append('file', file);
                formData.append("upload_preset", "personal")
                formData.append("cloud_name", "destinyfelixkiisi")
                formData.append("folder", "personal")
                const uploadResponse = await fetch(cloudinaryUrl, {
                    method: 'POST',
                    body: formData
                });
                const uploadResult = await uploadResponse.json();

                setFormData(prev => ({
                    ...prev,
                    profile_picture: uploadResult.url
                }));
            } catch (error) {
                console.error('Error resizing image:', error);
            }
        }
    }

    useEffect(() => {
        setUser(formData)
    }, [formData])

    const submit = () => {
        save(formData)
    }

    return (
        <>
            <div className="p-[16px] md:p-[40px]">
                <header className="mb-[40px]">
                    <h1 className="text-gray font-bold text-[24px] lg:text-[32px] mb-[8px]">Profile Details</h1>
                    <p className="text-gray-alt">Add your details to create a personal touch to your profile.</p>
                </header>

                <div className="flex flex-col gap-[24px]">
                    <div className="bg-whitesmoke rounded-[12px] p-[20px] flex flex-col md:flex-row gap-[16px] md:justify-between md:items-center">
                        <p className="max-w-[200px] w-full">Profile picture</p>
                        <div className="flex flex-col md:flex-row md:items-center gap-[24px]">
                            <div
                                className="rounded-[12px] overflow-hidden w-[193px] grid place-items-center shrink-0 h-[193px] rounded-[12px] bg-primary-light"
                            >
                                {
                                    formData.profile_picture && (
                                        <Image
                                            src={formData.profile_picture}
                                            alt="Picture of the author"
                                            width={193}
                                            height={193}
                                            quality={100}
                                            className="absolute rounded-[12px] bg-cover overflow-hidden"
                                            loading="lazy"
                                            unoptimized={true} 
                                        />
                                    )
                                }
                                <div className="relative grid place-items-center font-semibold text-center text-primary">
                                    <input
                                        type="file"
                                        className="w-full z-[4] h-full opacity-0 absolute top-0 left-0"
                                        onChange={profilePicsHandler}
                                    />
                                    <div className="mb-[8px]"><ImageIcon /></div>
                                    <p className="text-primary">+ Upload Image</p>
                                </div>
                            </div>
                            <p className="text-[12px] text-[#888888]">Image must be below 1024x1024px. Use PNG or JPG format.</p>
                        </div>
                    </div>
                    <div className="bg-whitesmoke rounded-[12px] p-[20px]">
                        <div className="flex flex-col md:flex-row gap-[16px] md:justify-between md:items-center mb-[12px]">
                            <p className="max-w-[200px] w-full">First Name*</p>
                            <Input
                                placeholder="e.g John"
                                type="text"
                                name="first_name"
                                containerClassName="flex-1"
                                value={formData.first_name}
                                onChange={formDataHandler}
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-[16px] md:justify-between md:items-center mb-[12px]">
                            <p className="max-w-[200px] w-full">Last Name*</p>
                            <Input
                                placeholder="e.g. Appleseed"
                                type="text"
                                name="last_name"
                                containerClassName="flex-1"
                                value={formData.last_name}
                                onChange={formDataHandler}
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-[16px] md:justify-between md:items-center mb-[12px]">
                            <p className="max-w-[200px] w-full">Email*</p>
                            <Input
                                placeholder="e.g. email@example.com"
                                type="email"
                                name="email"
                                containerClassName="flex-1"
                                value={formData.email}
                                onChange={formDataHandler}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-auto">
                <div className="border-t-[1px] px-[16px] md:px-[40px] border-t-[#D9D9D9] flex justify-end py-[20px]">
                    <Button onClick={submit} className="w-full md:w-max">
                        Save
                    </Button>
                </div>
            </div>
        </>
    )
}