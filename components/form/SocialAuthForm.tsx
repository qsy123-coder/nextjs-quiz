"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ROUTES } from "@/constant/routes";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

type OAuthProvider = "github" | "google";

export function SocialAuthForm() {
  const handleSignIn = async (provider: OAuthProvider): Promise<void> => {
    try {
      await signIn(provider, { callbackUrl: ROUTES.HOME, redirect: true });
    } catch (error) {
      if (error instanceof Error) {
        toast.warning("登录失败，请稍后重试");
      }
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <div>
            <CardTitle>Join in dev flow</CardTitle>
            <CardDescription>Sign in with your account</CardDescription>
          </div>
          <Link href={ROUTES.HOME}>
            <Image
              src="/images/site-logo.svg"
              alt="logo"
              width={35}
              height={35}
            />
          </Link>
        </div>
      </CardHeader>
      <CardFooter className="flex-col gap-2">
        <Button
          className="w-full gap-4"
          onClick={() => {
            handleSignIn("github");
          }}
        >
          <Image src="/icons/github.svg" alt="GitHub" width={15} height={15} />
          <span>Login With GitHub</span>
        </Button>
        <Button
          variant="outline"
          className="w-full gap-4"
          onClick={() => {
            handleSignIn("google");
          }}
        >
          <Image src="/icons/google.svg" alt="Google" width={15} height={15} />
          <span>Login with Google</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
