"use client"
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/contexts/user";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {

    const { slug } = useParams();

    const { user } = useUserContext()

    const userId = user?.id

    return (
        <div>
            <div className="p-[24px] bg-primary md:h-[357px] rounded-b-[32px]">
                <nav className="flex items-center bg-white justify-between p-[16px] bg-white rounded-[12px]">
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
                        <Link href={`/preview/${userId}`}>
                            <Button className="px-[16px] md:px-[27px]">
                                Share Link
                            </Button>
                        </Link>
                    </div>
                </nav>
            </div >
        </div >
    )
}