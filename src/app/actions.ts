'use server';

import { getStudioRecommendations, StudioRecommendationOutput } from "@/ai/flows/ai-powered-studio-recommendations";
import { studios } from "@/lib/mock-data";
import { z } from "zod";

const schema = z.object({
  preferences: z.string().min(1, { message: "Preferences are required." }),
});

export async function getAIRecommendations(prevState: any, formData: FormData): Promise<{
    recommendations: { recommendations: string, reasoning: string | undefined } | null,
    error: string | null
}> {
  const validatedFields = schema.safeParse({
    preferences: formData.get('preferences'),
  });

  if (!validatedFields.success) {
    return {
        recommendations: null,
        error: validatedFields.error.flatten().fieldErrors.preferences?.[0] || "Invalid input."
    }
  }

  const userPreferences = validatedFields.data.preferences;
  
  try {
    const studioProfiles = studios
      .map(
        (s) =>
          `Studio ID: ${s.id}, Name: ${s.name}, Type: ${s.type}, Location: ${s.location}, Price: $${s.price}/hr, Amenities: ${s.amenities.join(', ')}`
      )
      .join('\n');

    const result = await getStudioRecommendations({
      userPreferences,
      studioProfiles,
    });
    
    // Find the full studio objects for the recommended studios
    const recommendedStudioIds = result.recommendations.map(r => r.id);
      
    const recommendedStudios = recommendedStudioIds
      .map(id => studios.find(s => s.id === id))
      .filter(Boolean);

    return {
        recommendations: { ...result, recommendations: JSON.stringify(recommendedStudios) },
        error: null
    };
  } catch (error) {
    console.error(error);
    return {
        recommendations: null,
        error: 'Failed to get recommendations. Please try again.'
    };
  }
}
