"use client";

import { actions } from "@/actions";

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
import { useActionState } from "react";
import { type FormState } from "@/validations/auth";
import { FormError } from "./form-error";

const styles = {
  container: "w-full max-w-md",
  header: "space-y-1",
  title: "text-3xl font-bold text-red-500",
  content: "space-y-4",
  fieldGroup: "space-y-2",
  footer: "flex flex-col",
  prompt: "mt-4 text-center text-sm",
};

const INITIAL_STATE: FormState = {
  success: false,
  message: undefined,
  strapiErrors: null,
  zodErrors: null,
  data: {
    username: '',
    password: '',
    email: ''
  }
}

export function SignupForm() {
  const [formState, formAction] = useActionState(actions.auth.registerUserAction, INITIAL_STATE)

  console.log(formState)

  return (
    <div className={styles.container}>
      <form action={formAction}>
        <Card>
          <CardHeader className={styles.header}>
            <CardTitle className={styles.title}>Sign Up</CardTitle>
            <CardDescription>
              Enter your details to create a new account
            </CardDescription>
          </CardHeader>
          <CardContent className={styles.content}>
            <div className={styles.fieldGroup}>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="username"
                defaultValue={formState.data?.username ?? ''}
              />
              <FormError error={formState.zodErrors?.username} />
            </div>
            <div className={styles.fieldGroup}>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                defaultValue={formState.data?.email ?? ''}
              />
              <FormError error={formState.zodErrors?.email} />
            </div>
            <div className={styles.fieldGroup}>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                defaultValue={formState.data?.password ?? ''}
              />
              <FormError error={formState.zodErrors?.password} />
            </div>
          </CardContent>
          <CardFooter className={styles.footer}>
            <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mx-1 overflow-hidden text-sm font-medium text-heading rounded-2xl group bg-linear-to-br from-red-500 from-5% to-gray-800">
              <span className="relative px-4 py-2.5 hover:text-black cursor-pointer">
                Sign In
              </span>
            </button>
            {formState.strapiErrors &&
              <p className="text-pink-500 text-xs italic mt-1 py-2">{formState.strapiErrors.message}</p>
            }
          </CardFooter>
        </Card>
        <div className={styles.prompt}>
          Have an account?
          <button className="relative inline-flex items-center justify-center p-0.5 mx-2 overflow-hidden text-sm font-medium text-heading rounded-2xl group bg-linear-to-br from-red-500 from-5% to-gray-800">
            <span className="relative px-4 py-2.5 cursor-pointer hover:text-black">
              <a href="signin">Sign In</a>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}