'use server'

import { formSchema } from "./form-schemas";


export type FormState = {
    message: string;
    fields?: Record<string, string>
}

export async function submitFormAction(prevState: FormState,data: FormData): Promise<FormState> {
    const formData = Object.fromEntries(data)

    const parsed = formSchema.safeParse(formData)

    if (!parsed.success) {
        const fields:Record<string,string> = {}
        for(const key of Object.keys(formData)) {
            fields[key] = formData[key].toString()
        }
        return {
            message: "Invalid form data",
            fields
        }
    }

    if (parsed.data.username.includes("a")) {
        return {
            message: "Invalid username, it contains an A",
            fields: parsed.data,
        }
    }

    console.log(parsed)

    return {message: "User registered!"}
}