"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ROUTES } from "@/constant/routes";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
const isWarning = (error: Error) => {
  toast.warning(`There is a error ${error}`);
};

export function SocialAuthForm() {
  const handleSignin = async (provider: "google" | "github") => {
    try {
      await signIn(provider, { callbackUrl: ROUTES.HOME, redirect: true });
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        isWarning(error);
      }
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex justify-between items-center gap-2">
          <div>
            <CardTitle>Join in dev flow</CardTitle>
            <CardDescription>To get your quertions answer</CardDescription>
          </div>
          <Link href={"/"}>
            <Image
              src="/images/site-logo.svg"
              alt="logo"
              width={35}
              height={35}
            />
          </Link>
        </div>
      </CardHeader>
      <form
        action={async () => {
          await signIn("github", { callbackUrl: ROUTES.HOME, redirect: true });
        }}
      >
        <Button type="submit" variant={"link"}>
          Sign up
        </Button>
      </form>
      {/* <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent> */}
      <CardFooter className="flex-col gap-2">
        <Button
          type="submit"
          className="w-full gap-4"
          onClick={() => {
            handleSignin("github");
          }}
        >
          <Image src="icons/github.svg" alt="logo" width={15} height={15} />
          <span>Login With GitHub</span>
        </Button>
        <Button variant="outline" className="w-full gap-4">
          <Image src="icons/google.svg" alt="logo" width={15} height={15} />
          <span>Login with Google</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
