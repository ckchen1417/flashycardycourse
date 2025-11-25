import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <main className="flex flex-col items-center gap-6 text-center">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold">
            FlashyCardy
          </h1>
          <p className="text-xl text-muted-foreground">
            Your personal flashcard platform
          </p>
        </div>
        
        <div className="flex gap-4 mt-4">
          <SignInButton mode="modal">
            <Button size="lg">Sign In</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button size="lg" variant="outline">Sign Up</Button>
          </SignUpButton>
        </div>
      </main>
    </div>
  );
}

