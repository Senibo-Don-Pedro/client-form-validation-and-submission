"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {z} from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { submitFormAction } from "@/actions/submit-form"
import { formSchema } from "@/actions/form-schemas" 
import { useActionState, useRef } from "react"




export function ProfileForm() {

  const [state, Action] = useActionState(submitFormAction, {
    message: "",
  })
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      ...(state.fields ?? {})
    },
  })
  

  const {isSubmitting} = form.formState

  const formRef = useRef<HTMLFormElement>(null);

  return (
      <div className="flex justify-center items-center">
        <Form {...form}>
            <form
              ref={formRef} 
              action={Action} 
              onSubmit={form.handleSubmit(() => formRef.current?.submit())} 
              className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg space-y-6"
            >
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="This is your public display name." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Input your password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ?
                    <div className="flex justify-center items-center gap-2">
                      <Loader2 className="animate-spin" />
                      Please wait
                    </div>
                  : "Submit"}
                </Button>

                {
                  state?.message !== "" && (
                    <div className="text-red-500">{state.message}</div>
                  )
                }
            </form>
        </Form>
      </div>
  )
}