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

const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
})

export function ProfileForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        password: ""
      },
    })
   
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }

    const {isSubmitting} = form.formState

    return (
        <div className="flex justify-center items-center">
          <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg space-y-6">
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
                              <FormLabel>Username</FormLabel>
                              <FormControl>
                                  <Input placeholder="Input your password" {...field} />
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                      )}
                  />
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ?
                      <div className="flex justify-center items-center gap-2">
                        <Loader2 className="animate-spin" />
                        Please wait
                      </div>
                    : "Submit"}
                  </Button>
              </form>
          </Form>
        </div>
    )
}