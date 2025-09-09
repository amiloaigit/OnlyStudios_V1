import { getStudios } from "@/app/actions";
import { StudioGrid } from "@/components/discover/StudioGrid";

export default async function DiscoverPage() {
  const allStudios = await getStudios();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="font-headline text-4xl font-bold">Discover Studios</h1>
        <p className="text-muted-foreground mt-2">Find the perfect space for your next creation.</p>
      </header>
      <StudioGrid allStudios={allStudios} />
    </div>
  );
}
