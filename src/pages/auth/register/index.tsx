/* eslint-disable react/no-unescaped-entities */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import coverimg from "/public/images/login/login-cover.webp";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { RegisterValidation } from "@/validations";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Head from "next/head";

const Register = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof RegisterValidation>>({
    resolver: zodResolver(RegisterValidation),

    defaultValues: {
      name: "",
      email: "",
      password: "",
      isSeller: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof RegisterValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    console.log(form.formState.errors);
  }
  return (
    <>
      <Head>
        <title>Register - Dream Home</title>
      </Head>
      <Form {...form}>
        <div className=" grid grid-cols-2">
          <div className="h-[600px] order-last rounded-r-2xl overflow-hidden">
            <Image src={coverimg} className="w-full" alt="login-image" />
          </div>
          <div className=" w-full rounded-l-2xl flex justify-center items-center bg-primary-2 mx-auto">
            <div className="w-1/2">
              <div>
                <h2 className="h3-semibold pb-4">Register</h2>
              </div>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-1  w-full"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Write Down Your Full Name"
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Write Down Your Email" {...field} />
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
                        <Input
                          type="password"
                          placeholder="Type your Password"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex py-4 items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Register as a Seller</Label>
                </div>

                <Button
                  className={buttonVariants({ size: "sm" })}
                  type="submit"
                >
                  Register
                </Button>
              </form>
              <Separator />
              <p className="base-light">
                Already Have an Account{" "}
                <span className="hover:underline ">
                  <Link href={"/auth/login"}>Login</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Register;
