"use client"
import { EnvelopIcon, PasswordIcon } from "@/components/common/svgs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { login } from "../action";
import { error } from "@/components/common/toast";
import validator from 'validator';
import { useMutation } from "@tanstack/react-query";

export interface LoginFormDataProps {
    email: string | null;
    password: string | null;
}

export default function Page() {

    const [formError, setFormError] = useState<LoginFormDataProps>({
        email: null,
        password: null,
    })

    const { mutateAsync, isPending } = useMutation({
        mutationFn: (payload: LoginFormDataProps) => login(payload),
        onSuccess: (response) => {
            if(response?.error){
                error(response.error)
            }
        },
    });

    async function submit(formData: FormData) {

        const data = {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        }

        if (!data.email.trim()) {
            return setFormError({
                password: null,
                email: "Can't be empty"
            })
        }

        if (!validator.isEmail(data.email)) {
            return setFormError({
                password: null,
                email: "Enter a valid email"
            })
        }

        if (!data.password.trim()) {
            return setFormError({
                email: null,
                password: "Can't be empty",
            });
        }

        mutateAsync(data)
    }

    return (
        <main className="min-h-screen bg-whitesmoke grid place-items-center py-10">
            <div className="w-full max-w-[476px]">
                <header className="grid place-items-center mb-[50px]">
                    <Image
                        src="/images/devlinks-logo.svg"
                        alt="Devlinks"
                        width={182.5}
                        height={40}
                        className="w-[142px] h-[32px] md:w-[182px] md:h-[40px]"
                    />
                </header>
                <div className="bg-white rounded-[12px] p-[40px]">
                    <div className="mb-[40px]">
                        <h1 className="font-bold text-[24px] md:text-[32px] mb-[8px]">Login</h1>
                        <p className="text-gray-alt">Add your details below to get back into the app</p>
                    </div>
                    <form className="flex flex-col gap-[24px]">
                        <fieldset>
                            <label className="text-[12px] text-gray mb-[4px] inline-block leading-[18px]">Email Address</label>
                            <Input
                                leading={<EnvelopIcon />}
                                name="email"
                                type="email"
                                placeholder="e.g. alex@email.com"
                                error={formError.email}
                            />
                        </fieldset>
                        <fieldset>
                            <label className="text-[12px] text-gray mb-[4px] inline-block leading-[18px]">Password</label>
                            <Input
                                leading={<PasswordIcon />}
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                error={formError.password}
                            />
                        </fieldset>
                        <Button
                            formAction={submit}
                            isLoading={isPending}
                        >
                            Login
                        </Button>
                        <div className="text-center">Don't have an account? <br className="md:hidden" /><span className="text-primary hover:underline"><Link href="/create-account">Create account</Link></span></div>
                    </form>
                </div>
            </div>
        </main>
    )
}