"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4">
      <Card className="w-full max-w-md border-gray-200 ">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
          <CardDescription className="text-gray-600">
            Create an account to start tracking your jib application
          </CardDescription>
        </CardHeader>

        <form className="space-y-4">
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Jhon Doe"
                required
                className="border-gray-300 focus:border-primary focus:ring-primary"
              ></Input>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="jhon@example.com"
                required
                className="border-gray-300 focus:border-primary focus:ring-primary"
              ></Input>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="******"
                maxLength={8}
                required
                className="border-gray-300 focus:border-primary focus:ring-primary"
              ></Input>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
            <div className="flex space-x-2 text-sm text-gray-600">
              <p>Already have an account? </p>
              <Link
                href={"/sign-in"}
                className="font-medium text-primary hover:underline"
              >
                Sing In
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
