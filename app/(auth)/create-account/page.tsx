"use client"
import { EnvelopIcon, PasswordIcon } from "@/components/common/svgs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/utils/supabase/client";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Page() {

    const [formError, setFormError] = useState({
        email: null,
        password: null
    })

    async function signup(formData: FormData) {
        const supabase = createClient()

        // type-casting here for convenience
        // in practice, you should validate your inputs
        const data = {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
            confirmPassword: formData.get('confirmPassword') as string,
        }

        if(data.password || data.confirmPassword){
            return 
        }

        const response = await supabase.auth.signUp(data)
        console.log(response)

        if (response.error) {
            redirect('/error')
        }

        revalidatePath('/', 'layout')
        redirect('/')
    }

    return (
        <main className="min-h-screen bg-white md:bg-whitesmoke grid place-items-center py-10">
            <div className="w-full max-w-[476px]">
                <header className="grid pl-[32px] md:pl-0 md:place-items-center mb-[50px]">
                    <Image
                        src="/images/devlinks-logo.svg"
                        alt="Devlinks"
                        width={182.5}
                        height={40}
                        className="w-[142px] h-[32px] md:w-[182px] md:h-[40px]"
                    />
                </header>
                <div className="bg-white rounded-[12px] p-[32px] md:p-[40px]">
                    <div className="mb-[40px]">
                        <h1 className="font-bold text-[24px] md:text-[32px] mb-[8px]">Create account</h1>
                        <p className="text-gray-alt">Let's get you started sharing your links!</p>
                    </div>
                    <form className="flex flex-col gap-[24px]">
                        <fieldset>
                            <label htmlFor="email" className="text-[12px] text-gray mb-[4px] inline-block leading-[18px]">Email Address</label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                leading={<EnvelopIcon />}
                                placeholder="e.g. alex@email.com"
                            />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="password" className="text-[12px] text-gray mb-[4px] inline-block leading-[18px]">Password</label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
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
                        <Button
                            formAction={signup}
                            type="submit"
                        >
                            Create new account
                        </Button>
                        <div className="text-center">Already an account? <br className="md:hidden" /> <span className="text-primary hover:underline"><Link href="/login">Login</Link></span></div>
                    </form>
                </div>
            </div>
        </main>
    )
}