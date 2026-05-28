"use server";

import { z } from "zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { loginUserService } from "@/lib/strapi";
import { SigninFormSchema, type FormState } from "@/validations/auth";

const cookieConfig = {
  maxAge: 60 * 60 * 24 * 7,
  path: "/",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

export async function loginUserAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const fields = {
    identifier: formData.get("identifier") as string,
    password: formData.get("password") as string,
  };

  const validated = SigninFormSchema.safeParse(fields);

  if (!validated.success) {
    const flattened = z.flattenError(validated.error);

    return {
      success: false,
      message: "Validation error",
      zodErrors: flattened.fieldErrors,
      strapiErrors: null,
      data: fields,
    };
  }

  const response = await loginUserService(validated.data);

  if (!response || response.error) {
    return {
      success: false,
      message: "Login error",
      strapiErrors: response?.error,
      zodErrors: null,
      data: fields,
    };
  }

  const cookieStore = await cookies();
  cookieStore.set("jwt", response.jwt, cookieConfig);

  redirect("/dashboard");
}
