'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { SignIn } from '@clerk/nextjs';

export function SignInButton() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg">Sign In</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign In to Your Account</DialogTitle>
          <DialogDescription>
            Enter your credentials to access your flashcards
          </DialogDescription>
        </DialogHeader>
        <SignIn
          appearance={{
            elements: {
              rootBox: 'mx-auto',
              card: 'shadow-none',
            },
          }}
          routing="hash"
          signUpUrl="#"
          afterSignInUrl="/dashboard"
        />
      </DialogContent>
    </Dialog>
  );
}

