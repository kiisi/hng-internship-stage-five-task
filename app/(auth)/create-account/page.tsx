import { EnvelopIcon, PasswordIcon } from "@/components/svgs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Page() {

    return (
        <main className="min-h-screen bg-white md:bg-whitesmoke grid place-items-center py-10">
            <div className="w-full max-w-[476px]">
                <header className="grid pl-[32px] md:pl-0 md:place-items-center mb-[50px]">
                    <Image src="/images/devlinks-logo.svg" alt="Devlinks" width={182.5} height={40} />
                </header>
                <div className="bg-white rounded-[12px] p-[32px] md:p-[40px]">
                    <div className="mb-[40px]">
                        <h1 className="font-bold text-[24px] md:text-[32px] mb-[8px]">Create account</h1>
                        <p className="text-gray-alt">Let's get you started sharing your links!</p>
                    </div>
                    <form className="flex flex-col gap-[24px]">
                        <fieldset>
                            <label className="text-[12px] text-gray mb-[4px] inline-block leading-[18px]">Email Address</label>
                            <Input
                                leading={<EnvelopIcon />}
                                placeholder="e.g. alex@email.com"
                            />
                        </fieldset>
                        <fieldset>
                            <label className="text-[12px] text-gray mb-[4px] inline-block leading-[18px]">Password</label>
                            <Input
                                leading={<PasswordIcon />}
                                placeholder="At least 8 characters"
                            />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="confirmPassword" className="text-[12px] text-gray mb-[4px] inline-block leading-[18px]">Confirm Password</label>
                            <Input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                leading={<PasswordIcon />}
                                placeholder="At least 8 characters"
                            />
                        </fieldset>
                        <p className="text-[12px] text-gray-alt">Password must contain at least 8 characters</p>
                        <Button>Create new account</Button>
                        <div className="text-center">Already an account? <br className="md:hidden" /> <span className="text-primary hover:underline"><Link href="/login">Login</Link></span></div>
                    </form>
                </div>
            </div>
        </main>
    )
}