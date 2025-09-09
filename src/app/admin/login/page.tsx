import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function AdminLoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/40">
       <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Admin Login</CardTitle>
          <CardDescription>
            Enter your credentials to access the admin dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username or Mobile Number</Label>
              <Input id="username" type="text" placeholder="admin_user" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <div className="mt-4 text-center text-sm">
              Not an admin?{" "}
              <Link href="/login" className="underline">
                User login
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
