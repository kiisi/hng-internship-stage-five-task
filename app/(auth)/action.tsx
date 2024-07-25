'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { FormDataProps } from "./create-account/page"
import { createClient } from "@/lib/utils/supabase/server"
import { LoginFormDataProps } from "./login/page"

export async function login(formData: LoginFormDataProps) {
    const supabase = createClient()

    const payload = {
        email: formData.email!,
        password: formData.password!,
    }

    const response = await supabase.auth.signInWithPassword(payload)

    if (response.error) {
        return { error: response.error.message }
    }

    revalidatePath('/', 'layout')
    redirect('/')
}

export async function createAccount(formData: FormDataProps) {

    const payload = {
        email: formData.email!,
        password: formData.password!,
        options: {
            emailRedirectTo: 'https://hng-internship-stage-five-task.vercel.app' // you will have to make the project part dynamic in whichever way the framework you are using allows you to do this.
        }
    }

    const supabase = createClient()

    const response = await supabase.auth.signUp(payload)

    if (response.error) {
        return { error: response.error.message }
    }

    revalidatePath('/', 'layout')
    redirect('/')
}
