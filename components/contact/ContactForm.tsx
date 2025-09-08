"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().optional(),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters" }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form Submitted:", values);
    // later you can send this to API
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/contact/stadium-bg.jpg')] bg-cover bg-center">
      <Card className="w-full max-w-lg bg-[#EBECF433] backdrop-blur-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-background text-3xl font-bold">
            Leave Us Your Info
          </CardTitle>
          <p className="text-center text-background text-base">
            and we will get back to you.
          </p>
        </CardHeader>
        <div className="bg-secondary h-1 w-40 mx-auto" />
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="bg-[#FFFFFF]"
                          placeholder="Full Name*"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="bg-[#FFFFFF]"
                          type="email"
                          placeholder="Email*"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="bg-[#FFFFFF]"
                        placeholder="Subject"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        className="bg-[#FFFFFF]"
                        placeholder="Message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-cyan-400 hover:bg-cyan-500"
              >
                Meet the Squad
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
