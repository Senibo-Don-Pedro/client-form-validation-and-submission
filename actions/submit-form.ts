'use server'

import { formSchema } from "./form-schemas";


export type FormState = {
    message: string;
}

export async function submitFormAction(data: FormData): Promise<FormState> {
    const formData = Object.fromEntries(data)

    const parsed = formSchema.safeParse(formData)

    if (!parsed.success) {
        return {
            message: "Invalid form data",
        }
    }

    console.log(parsed)

    return {message: "User registered!"}
}