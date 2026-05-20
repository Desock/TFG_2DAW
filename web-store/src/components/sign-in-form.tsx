"use client";


import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


const styles = {
  container: "w-full max-w-md",
  header: "space-y-1",
  title: "text-3xl font-bold text-red-500",
  content: "space-y-4",
  fieldGroup: "space-y-2",
  footer: "flex flex-col",
  button: "w-full",
  prompt: "mt-4 text-center text-sm",
  link: "ml-2 text-pink-500",
};

export function SigninForm() {
  return (
    <div className={styles.container}>
      <form>
        <Card>
          <CardHeader className={styles.header}>
            <CardTitle className={styles.title}>Sign In</CardTitle>
            <CardDescription>
              Enter your details to sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent className={styles.content}>
            <div className={styles.fieldGroup}>
              <Label htmlFor="email">Email</Label>
              <Input
                id="identifier"
                name="identifier"
                type="text"
                placeholder="username or email"
              />
            </div>
            <div className={styles.fieldGroup}>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="password"
              />
            </div>
          </CardContent>
          <CardFooter className={styles.footer}>
            <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-heading rounded-2xl group bg-linear-to-br from-red-500 from-5% to-gray-800">
              <span className=" relative px-4 py-2.5 hover:text-black">
              <a href="singin">Sign In</a>
            </span>
            </button>
          </CardFooter>
        </Card>
        <div className={styles.prompt}>
          Don&apos;t have an account?
          <button className="relative inline-flex items-center justify-center p-0.5 mx-2 overflow-hidden text-sm font-medium text-heading rounded-2xl group bg-linear-to-br from-red-500 from-5% to-gray-800">
            <span className="relative px-4 py-2.5 hover:text-black">
              <a href="signup">Sign Up</a>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}