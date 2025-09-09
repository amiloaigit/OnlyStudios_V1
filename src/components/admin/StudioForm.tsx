'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import type { Amenity } from '@/lib/types';
import { Save } from 'lucide-react';
import { createStudio } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';


const amenityOptions: Amenity[] = [
  "Wi-Fi",
  "Parking",
  "Coffee",
  "Air Conditioning",
  "Lighting Kit",
  "Green Screen",
];

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending}>
            <Save className="mr-2" />
            {pending ? 'Saving...' : 'Save Studio'}
        </Button>
    )
}

export function StudioForm() {
  const [state, formAction] = useFormState(createStudio, undefined);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.error) {
      toast({
        title: 'Error',
        description: state.error,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Studio Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Studio Name</Label>
            <Input id="name" name="name" placeholder="e.g., Loft 42" required/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="type">Studio Type</Label>
            <Select name="type" required>
              <SelectTrigger id="type">
                <SelectValue placeholder="Select a type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Photography">Photography</SelectItem>
                <SelectItem value="Recording">Recording</SelectItem>
                <SelectItem value="Dance">Dance</SelectItem>
                <SelectItem value="Art">Art</SelectItem>
                <SelectItem value="Multipurpose">Multipurpose</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" name="location" placeholder="e.g., Brooklyn, NY" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Price (per hour)</Label>
            <Input id="price" name="price" type="number" placeholder="e.g., 150" required />
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" placeholder="Tell us about the studio..." required/>
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="mainImage">Main Image URL</Label>
            <Input id="mainImage" name="mainImage" placeholder="https://..." defaultValue="https://picsum.photos/800/600" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="images">Additional Image URLs</Label>
            <Textarea
              id="images"
              name="images"
              placeholder="Enter comma-separated URLs: https://... , https://..."
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="short_video_url">Reel/Video URL</Label>
            <Input id="short_video_url" name="short_video_url" placeholder="https://..." defaultValue="https://picsum.photos/360/640" />
          </div>
          <div className="md:col-span-2">
            <Label>Amenities</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2 rounded-md border p-4">
              {amenityOptions.map((amenity) => (
                <div key={amenity} className="flex items-center gap-2">
                  <Checkbox id={`amenity-${amenity}`} name="amenities" value={amenity} />
                  <Label htmlFor={`amenity-${amenity}`}>{amenity}</Label>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 space-y-2">
            <Label htmlFor="equipment">Equipment</Label>
            <Textarea
              id="equipment"
              name="equipment"
              placeholder="Enter comma-separated equipment list: Camera, Lights, ..."
            />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <SubmitButton />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
