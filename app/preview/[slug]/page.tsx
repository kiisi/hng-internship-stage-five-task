"use client"
import CompanyCard from "@/components/common/company-card";
import { clipboardToast } from "@/components/common/toast";
import { Button } from "@/components/ui/button";
import { UserLink } from "@/contexts/links";
import { User, useUserContext } from "@/contexts/user";
import { CompanyTypes } from "@/lib/utils";
import { createClient } from "@/lib/utils/supabase/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const fetchProfile = async (userId: string): Promise<User> => {

    const supabase = createClient()

    const { data, error } = await supabase
        .from<"profile", User>('profile')  // Specify the type for the table
        .select('*')
        .eq('user_id', userId)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data as User;  // Ensure data is cast to Profile
};

const fetchUserLinks = async (userId: string): Promise<UserLink[]> => {

    const supabase = createClient()

    const { data, error } = await supabase
        .from<"url", UserLink[]>('url')
        .select('*')
        .eq('user_id', userId)

    if (error) {
        throw new Error(error.message);
    }

    return data as UserLink[];  // Ensure data is cast to UserLink[]
};

export default function Page() {

    const { slug } = useParams();

    const { user } = useUserContext()

    const userId = user?.id

    const { isLoading, data } = useQuery({
        queryKey: [`preview-${userId}`],
        queryFn: async () => fetchProfile(`${slug}`)
    })

    const UserProfilePreviewData = data

    const { isLoading: isLoadingLinks, data: dataLinks } = useQuery({
        queryKey: [`preview-links-${userId}`],
        queryFn: () => fetchUserLinks(`${UserProfilePreviewData?.user_id}`),
        enabled: !!UserProfilePreviewData?.user_id,
    })

    const allLoadingCompleted = !isLoading && !isLoadingLinks

    const UserLinksPreviewData = dataLinks

    const copyToClipboard = () => {
        const url = `https://hng-internship-stage-five-task.vercel.app/preview/${userId ?? slug}`

        navigator.clipboard.writeText(url).then(
            () => {
                clipboardToast("The link has been copied to your clipboard!")
            },
            (err) => {
                // Error feedback
                console.error('Failed to copy text: ', err);
            }
        );
    }

    return (
        <div>
            <div className="md:p-[24px] bg-primary md:h-[357px] rounded-b-[32px]">
                <nav className="flex items-center bg-white justify-between p-[16px] bg-white md:rounded-[12px]">
                    <div>
                        {
                            slug !== userId ? (
                                <div>&nbsp;</div>
                            ) : (
                                <Link href="/">
                                    <Button variant="secondary" className="px-[16px] md:px-[27px]">
                                        Back to Editor
                                    </Button>
                                </Link>
                            )
                        }
                    </div>
                    <div>
                        <Button onClick={copyToClipboard} className="px-[16px] md:px-[27px]">
                            Share Link
                        </Button>
                    </div>
                </nav>
            </div >
            <div className="w-full pb-[207px]">
                <div className="md:mt-[-149px] md:shadow-[0px_0px_32px_0px_#0000001A] max-w-[349px] w-full mx-auto rounded-[24px] min-h-[569px] bg-white py-[48px] px-[24px] md:px-[56px]">
                    <header className="grid place-items-center mb-[42px]">
                        {
                            allLoadingCompleted && UserProfilePreviewData?.profile_picture ? (
                                <div className="mb-[24px]">
                                    <div className="mb-[24px] relative w-[96px] h-[96px]">
                                        <Image
                                            src={UserProfilePreviewData.profile_picture}
                                            alt="Picture of the author"
                                            quality={100}
                                            fill={true}
                                            loading="lazy"
                                            className="rounded-full object-cover border-[4px] border-primary overflow-hidden"
                                            unoptimized
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="w-[96px] h-[96px] rounded-full bg-[#eeeeee] mb-[24px]">
                                </div>
                            )
                        }
                        {
                            allLoadingCompleted && (UserProfilePreviewData?.first_name || UserProfilePreviewData?.last_name) ? (
                                <h2 className="text-[18px] leading-[27px] font-semibold text-gray mb-[4px]">{UserProfilePreviewData.first_name} {UserProfilePreviewData.last_name}</h2>
                            ) : (
                                <div className="w-[160px] h-[16px] bg-[#eeeeee] rounded-[10px] mb-[4px]"></div>
                            )
                        }
                        {
                            allLoadingCompleted && UserProfilePreviewData?.email ? (
                                <a href={`mailto:${UserProfilePreviewData?.email}`} className="text-[14px] leading-[21px] text-gray-alt">{UserProfilePreviewData?.email}</a>
                            ) : (
                                <div className="w-[72px] h-[8px] bg-[#eeeeee] rounded-[10px]"></div>
                            )
                        }
                    </header>
                    <div className="flex flex-col gap-[16px] w-full max-w-[237px] mx-auto">
                        {
                            allLoadingCompleted && UserLinksPreviewData?.map(link => (
                                <CompanyCard
                                    id={link.id}
                                    key={link.id}
                                    title={link.title as CompanyTypes}
                                    url={link.url}
                                    user_id={link.user_id}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}