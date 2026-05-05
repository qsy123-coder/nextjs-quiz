"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import type { Resolver } from "react-hook-form";
import {
  Controller,
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import type { z } from "zod";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/constant/routes";

type AuthFormProps<T extends FieldValues> = {
  formType: "SIGN_IN" | "SIGN_UP";
  schema: z.ZodType<T, FieldValues>;
  defaultValues: DefaultValues<T>;
  onSubmit: (data: T) => Promise<{ success: boolean }>;
};

const getFieldLabel = (fieldName: string): string => {
  if (fieldName === "email") return "Email address";
  if (fieldName === "confirmPassword") return "Confirm password";

  return fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
};

const getFieldType = (fieldName: string): string => {
  return fieldName.toLowerCase().includes("password") ? "password" : "text";
};

export function AuthForm<T extends FieldValues>({
  formType,
  schema,
  defaultValues,
  onSubmit,
}: AuthFormProps<T>) {
  const form = useForm<T>({
    resolver: zodResolver(schema) as Resolver<T>,
    defaultValues,
  });
  const fieldNames = Object.keys(defaultValues) as Path<T>[];

  const handleSubmit: SubmitHandler<T> = async (data) => {
    await onSubmit(data);
  };

  return (
    <div className="w-full sm:max-w-md">
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(handleSubmit)}>
          <FieldGroup>
            {fieldNames.map((fieldName) => (
              <Controller
                key={fieldName}
                name={fieldName}
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={`form-rhf-demo-${fieldName}`}>
                      {getFieldLabel(fieldName)}
                    </FieldLabel>
                    <Input
                      {...field}
                      id={`form-rhf-demo-${fieldName}`}
                      type={getFieldType(fieldName)}
                      aria-invalid={fieldState.invalid}
                      placeholder={getFieldLabel(fieldName)}
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            ))}
          </FieldGroup>
        </form>
      </CardContent>
      <CardContent className="mt-4">
        {formType === "SIGN_IN" ? (
          <p className="text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link href={ROUTES.SIGNUP} className="text-blue-500">
              Sign up
            </Link>
          </p>
        ) : (
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link href={ROUTES.SIGNIN} className="text-blue-500">
              Sign in
            </Link>
          </p>
        )}
      </CardContent>
      <CardFooter className="mt-4">
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-demo">
            {formType === "SIGN_IN" ? "Sign in" : "Sign up"}
          </Button>
        </Field>
      </CardFooter>
    </div>
  );
}
