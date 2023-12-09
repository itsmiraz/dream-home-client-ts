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
import { LoginValidation } from "@/validations";
import Head from "next/head";
import { loginUser } from "@/services/authServices";
import { useState } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

const Login = () => {
  const [cookies, setCookie] = useCookies(["dreamHomeAccessToken"]);

  const router = useRouter();
  const [Error, setError] = useState<string>("");
  // 1. Define your form.
  const form = useForm<z.infer<typeof LoginValidation>>({
    resolver: zodResolver(LoginValidation),

    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof LoginValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    try {
      const result = await loginUser(values);

      if (result.status === 201) {
        // console.log(result);
        localStorage.setItem("currentUser", JSON.stringify(result.data.data));
        setCookie("dreamHomeAccessToken", result.data.token);
        router.push("/");
        setError("");
      }
    } catch (err: any) {
      if (err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Some Thing Went Wrong");
      }
      console.log(err);
      // setError(err.data.message);
    }
  }
  return (
    <>
      <Head>
        <title>Login - Dream Home</title>
      </Head>
      <Form {...form}>
        <div className=" grid grid-cols-2">
          <div className="h-[600px] w-full bg-cover bg-center bg-no-repeat bg-[url('https://res.cloudinary.com/djnlyzsmv/image/upload/v1702013426/dream-homes-images/register-cover_n6xo3f.webp')] rounded-l-2xl overflow-hidden">
            <h1>T</h1>
            {/* <Image src={coverimg} className="w-full" alt="login-image" /> */}
          </div>
          <div className=" w-full rounded-r-2xl flex justify-center items-center bg-primary-2 mx-auto">
            <div className="w-1/2">
              <div>
                <h2 className="h3-semibold pb-4">Login</h2>
              </div>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-1  w-full"
              >
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
                <p className="text-red-500 text-sm">{Error && Error}</p>

                <Button
                  className={buttonVariants({ size: "sm" })}
                  type="submit"
                >
                  Login
                </Button>
              </form>
              <Separator />
              <p className="base-light">
                Don't Have an Account{" "}
                <span className="hover:underline ">
                  <Link href={"/auth/register"}>Register</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Login;
