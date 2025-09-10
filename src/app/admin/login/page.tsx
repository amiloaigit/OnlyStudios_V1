'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { authenticateAdmin } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full text-base" style={{backgroundColor: '#A78BFA', color: 'white'}} disabled={pending}>
      {pending ? 'Logging in...' : 'Login'}
    </Button>
  );
}

export default function AdminLoginPage() {
  const [state, formAction] = useActionState(authenticateAdmin, undefined);
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
          Admin Portal
        </p>
      </div>

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-6 text-center text-xl font-semibold text-gray-700">
            Admin Login
        </div>

        <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" name="username" type="text" placeholder="admin" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required placeholder="Enter your password" />
            </div>
            <LoginButton />
            <div className="mt-4 text-center text-sm">
              Not an admin?{" "}
              <Link href="/login" className="underline">
                Go to user login
              </Link>
            </div>
          </form>
      </div>
    </div>
  );
}
