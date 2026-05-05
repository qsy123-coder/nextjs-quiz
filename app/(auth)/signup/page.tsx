"use client";

import { AuthForm } from "@/components/form/AuthForm";
import { SignupSchema } from "@/lib/validations";

const SignupPage = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignupSchema}
      defaultValues={{
        userName: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignupPage;
