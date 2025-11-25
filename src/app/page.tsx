import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignInButton } from "@/components/sign-in-button";
import { SignUpButton } from "@/components/sign-up-button";

export default async function Home() {
  // Redirect logged-in users to dashboard
  const { userId } = await auth();
  
  if (userId) {
    redirect("/dashboard");
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <main className="flex flex-col items-center gap-6 text-center">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-foreground">
            FlashyCardy
          </h1>
          <p className="text-xl text-muted-foreground">
            Your personal flashcard platform
          </p>
        </div>
        
        <div className="flex gap-4 mt-4">
          <SignInButton />
          <SignUpButton />
        </div>
      </main>
    </div>
  );
}

