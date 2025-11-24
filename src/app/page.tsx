import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-background">
      <main className="flex flex-col gap-8 max-w-2xl w-full">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">
            Welcome to Flashy Cardy Course
          </h1>
          <p className="text-muted-foreground">
            A modern flashcard application built with Next.js 15, TypeScript, and shadcn/ui
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Create Flashcards</CardTitle>
              <CardDescription>
                Build your own custom flashcard decks for any subject
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Get Started</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Study & Learn</CardTitle>
              <CardDescription>
                Review your cards with spaced repetition for better retention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Browse Decks</Button>
            </CardContent>
          </Card>
        </div>

        <Card className="border-primary">
          <CardHeader>
            <CardTitle>🎉 shadcn/ui Successfully Installed!</CardTitle>
            <CardDescription>
              Your project is now equipped with beautiful, accessible components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">
              Start building by editing{" "}
              <code className="bg-muted px-2 py-1 rounded text-sm">
                src/app/page.tsx
              </code>
            </p>
            <div className="flex gap-2 flex-wrap">
              <Button size="sm">Primary</Button>
              <Button size="sm" variant="secondary">Secondary</Button>
              <Button size="sm" variant="outline">Outline</Button>
              <Button size="sm" variant="ghost">Ghost</Button>
              <Button size="sm" variant="destructive">Destructive</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

