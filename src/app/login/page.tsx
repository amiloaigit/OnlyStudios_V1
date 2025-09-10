'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { authenticateUser } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full text-base" style={{backgroundColor: '#A78BFA', color: 'white'}} disabled={pending}>
      {pending ? 'Logging in...' : 'Login'}
    </Button>
  );
}

export default function LoginPage() {
  const [state, formAction] = useActionState(authenticateUser, undefined);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.error) {
      toast({
        title: 'Login Failed',
        description: state.error,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

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
           <Button className="bg-white text-foreground shadow-sm hover:bg-white">
            Login
          </Button>
          <Button variant="ghost" asChild className="text-muted-foreground">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username or Mobile Number</Label>
              <Input id="username" name="username" type="text" placeholder="user" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" name="password" type="password" required placeholder="Enter your password" />
            </div>
            <LoginButton />
            <div className="mt-4 text-center text-sm">
              Are you an admin?{" "}
              <Link href="/admin/login" className="underline">
                Login here
              </Link>
            </div>
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
