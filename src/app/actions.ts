'use server';

import { redirect } from 'next/navigation';
import { getStudioRecommendations, StudioRecommendationOutput } from "@/ai/flows/ai-powered-studio-recommendations";
import { studios as initialStudios } from "@/lib/mock-data";
import type { Studio } from '@/lib/types';
import { z } from "zod";

// In-memory store for studios, initialized with mock data
// This will reset on every server restart. A real database is needed for persistence.
let studios: Studio[] = [...initialStudios];

const recommendationsSchema = z.object({
  preferences: z.string().min(1, { message: "Preferences are required." }),
});

export async function getAIRecommendations(prevState: any, formData: FormData): Promise<{
    recommendations: { recommendations: string, reasoning: string | undefined } | null,
    error: string | null
}> {
  const validatedFields = recommendationsSchema.safeParse({
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

// === Authentication Actions ===

const loginSchema = z.object({
    username: z.string(),
    password: z.string(),
});

export async function authenticateAdmin(prevState: string | undefined, formData: FormData) {
    const { username, password } = loginSchema.parse(Object.fromEntries(formData.entries()));

    if (username === 'admin' && password === 'password') {
        redirect('/admin');
    }
    return {
        error: "Invalid username or password."
    }
}

export async function authenticateUser(prevState: string | undefined, formData: FormData) {
    const { username, password } = loginSchema.parse(Object.fromEntries(formData.entries()));
    if (username === 'user' && password === 'password') {
        redirect('/');
    }
    return {
        error: "Invalid username or password."
    }
}


// === Studio Actions ===

const studioSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    type: z.enum(['Photography', 'Recording', 'Dance', 'Art', 'Multipurpose']),
    location: z.string().min(1, 'Location is required'),
    price: z.coerce.number().min(1, 'Price must be greater than 0'),
    description: z.string().min(1, 'Description is required'),
    mainImage: z.string().url('Must be a valid URL').optional(),
    images: z.string().optional(),
    short_video_url: z.string().url('Must be a valid URL').optional(),
    amenities: z.preprocess((val) => (Array.isArray(val) ? val : [val]), z.array(z.string()).optional()),
    equipment: z.string().optional(),
})

export async function createStudio(prevState: string | undefined, formData: FormData) {
    const validatedFields = studioSchema.safeParse(Object.fromEntries(formData.entries()));
    
    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors)
        return { error: "Invalid form data. Please check your inputs." };
    }

    const data = validatedFields.data;

    const newStudio: Studio = {
        id: `${Date.now()}`,
        rating: Math.round((Math.random() * 2 + 3) * 10) / 10, // Random rating between 3.0 and 5.0
        ...data,
        images: data.images ? data.images.split(',').map(s => s.trim()) : [],
        equipment: data.equipment ? data.equipment.split(',').map(s => s.trim()) : [],
        amenities: data.amenities || [],
        mainImage: data.mainImage || 'https://picsum.photos/800/600',
        short_video_url: data.short_video_url || 'https://picsum.photos/360/640',
        postedBy: {
            name: 'Admin',
            avatar: 'https://picsum.photos/seed/admin/100/100'
        }
    }

    studios.push(newStudio);
    redirect('/admin/studios');
}

export async function getStudios() {
    // In a real app, you would fetch from a database here.
    return Promise.resolve(studios);
}
