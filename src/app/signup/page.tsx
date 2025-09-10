
'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { User, Home, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

export default function SignupPage() {
    const [role, setRole] = useState('creator');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // In a real app, you would handle form submission to your backend here.
        
        if (role === 'owner') {
            router.push('/studios/setup');
        } else {
            // Redirect creators to the main page or discover page
            router.push('/');
        }
    };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 font-body">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold font-headline" style={{color: '#8B5CF6'}}>Only Creation</h1>
        <p className="text-muted-foreground mt-2">
          The fastest way to book creative studio spaces
        </p>
      </div>

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-6 grid grid-cols-2 gap-2 rounded-lg bg-gray-100 p-1">
          <Button variant="ghost" asChild className="text-muted-foreground">
            <Link href="/login">Login</Link>
          </Button>
          <Button className="bg-white text-foreground shadow-sm hover:bg-white">
            Sign Up
          </Button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Create a password" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" type="password" placeholder="Confirm your password" required />
          </div>

          <div className="space-y-2 pt-2">
            <Label>I am a...</Label>
            <RadioGroup defaultValue="creator" className="grid grid-cols-1 gap-3" onValueChange={setRole} value={role}>
              <Label
                htmlFor="creator"
                className={cn(
                  "flex items-center gap-4 rounded-lg border p-4 cursor-pointer transition-all",
                  role === 'creator' ? 'border-primary ring-2 ring-primary' : 'border-gray-200'
                )}
              >
                <User className="h-6 w-6 text-gray-500" />
                <div className="flex-1">
                  <p className="font-semibold">Creator</p>
                  <p className="text-sm text-muted-foreground">Looking for studio spaces</p>
                </div>
                {role === 'creator' && <CheckCircle className="h-5 w-5 text-primary" />}
                <RadioGroupItem value="creator" id="creator" className="sr-only"/>
              </Label>
              <Label
                htmlFor="owner"
                className={cn(
                  "flex items-center gap-4 rounded-lg border p-4 cursor-pointer transition-all",
                  role === 'owner' ? 'border-primary ring-2 ring-primary' : 'border-gray-200'
                )}
              >
                <Home className="h-6 w-6 text-gray-500" />
                <div className="flex-1">
                  <p className="font-semibold">Studio Owner</p>
                  <p className="text-sm text-muted-foreground">List your studio spaces</p>
                </div>
                {role === 'owner' && <CheckCircle className="h-5 w-5 text-primary" />}
                <RadioGroupItem value="owner" id="owner" className="sr-only" />
              </Label>
            </RadioGroup>
          </div>

          <Button type="submit" className="w-full text-base" style={{backgroundColor: '#A78BFA', color: 'white'}}>
            Create Account
          </Button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-500">
          By continuing, you agree to our{' '}
          <Link href="#" className="underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="#" className="underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
