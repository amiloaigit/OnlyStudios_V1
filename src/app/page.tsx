import { StudioRecommender } from "@/components/ai/StudioRecommender";

export default function HomePage() {
  return (
    <div className="container mx-auto max-w-2xl py-8 px-4">
      <header className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">OnlyStudio</h1>
        <p className="text-muted-foreground mt-2 text-lg">Your next creative space is one search away.</p>
      </header>
      
      <main>
        <StudioRecommender />
      </main>
    </div>
  );
}
