"use client";

import { AuthForm } from "@/components/form/AuthForm";
import { SigninSchema } from "@/lib/validations";

const SigninPage = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SigninSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SigninPage;
