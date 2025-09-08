'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { getAIRecommendations } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '../ui/label';
import { Sparkles } from 'lucide-react';
import { StudioCard } from '../shared/StudioCard';
import type { Studio } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  recommendations: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90">
      {pending ? 'Thinking...' : 'Find Studios'}
      <Sparkles className="ml-2 h-4 w-4" />
    </Button>
  );
}

export function StudioRecommender() {
  const [state, formAction] = useActionState(getAIRecommendations, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        title: 'Error',
        description: state.error,
        variant: 'destructive',
      });
    }
  }, [state.error, toast]);

  const recommendedStudios: Studio[] = state.recommendations ? JSON.parse(state.recommendations.recommendations) : [];

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center justify-center text-2xl font-headline">
          <Sparkles className="mr-2 h-6 w-6 text-accent" />
          AI-Powered Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="preferences">What are you looking for in a studio?</Label>
            <Textarea
              id="preferences"
              name="preferences"
              placeholder="e.g., 'A quiet recording studio in Los Angeles for a podcast with great natural light' or 'A large dance studio for a hip-hop video'"
              className="min-h-[100px]"
            />
          </div>
          <SubmitButton />
        </form>

        {state.recommendations && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2 font-headline">Your Personalized Suggestions</h3>
            <p className="text-muted-foreground mb-4 italic">{state.recommendations.reasoning}</p>
            <div className="grid grid-cols-1 gap-6">
              {recommendedStudios.length > 0 ? (
                recommendedStudios.map(studio => (
                  <StudioCard key={studio.id} studio={studio} />
                ))
              ) : (
                <p>No studios matched your specific request, but we're always adding more!</p>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
