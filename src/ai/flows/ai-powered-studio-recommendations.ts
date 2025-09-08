'use server';
/**
 * @fileOverview AI-powered studio recommendations flow.
 *
 * - getStudioRecommendations - A function that returns personalized studio recommendations.
 * - StudioRecommendationInput - The input type for the getStudioRecommendations function.
 * - StudioRecommendationOutput - The return type for the getStudioRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StudioRecommendationInputSchema = z.object({
  userPreferences: z
    .string()
    .describe('The user preferences for studios (e.g., photography, music, dance).'),
  studioProfiles: z
    .string()
    .describe('A description of available studio profiles, including type, location, and amenities.'),
});
export type StudioRecommendationInput = z.infer<
  typeof StudioRecommendationInputSchema
>;

const StudioRecommendationOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('A list of recommended studios based on user preferences.'),
  reasoning: z
    .string()
    .describe('The AI reasoning behind the studio recommendations.'),
});
export type StudioRecommendationOutput = z.infer<
  typeof StudioRecommendationOutputSchema
>;

export async function getStudioRecommendations(
  input: StudioRecommendationInput
): Promise<StudioRecommendationOutput> {
  return studioRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'studioRecommendationPrompt',
  input: {schema: StudioRecommendationInputSchema},
  output: {schema: StudioRecommendationOutputSchema},
  prompt: `You are an AI assistant designed to provide personalized studio recommendations based on user preferences and studio profiles.\n\nUser Preferences: {{{userPreferences}}}\nStudio Profiles: {{{studioProfiles}}}\n\nBased on the user preferences and the available studio profiles, provide a list of recommended studios and explain the reasoning behind your recommendations.\n\nRecommendations: \nReasoning: `,
});

const studioRecommendationFlow = ai.defineFlow(
  {
    name: 'studioRecommendationFlow',
    inputSchema: StudioRecommendationInputSchema,
    outputSchema: StudioRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
