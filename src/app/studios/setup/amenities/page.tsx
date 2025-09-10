
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const amenitiesList = [
    { id: "wifi", label: "High-speed WiFi" },
    { id: "ac", label: "Air Conditioning" },
    { id: "parking", label: "Parking Available" },
    { id: "kitchen", label: "Kitchen/Catering Area" },
    { id: "makeup", label: "Makeup Station" },
    { id: "changing-room", label: "Wardrobe/Changing Room" },
    { id: "green-screen", label: "Green Screen" },
    { id: "cyclo-wall", label: "Cyclorama Wall" },
    { id: "natural-light", label: "Natural Light" },
    { id: "blackout", label: "Blackout Curtains" },
    { id: "sound-proofing", label: "Sound Proofing" },
    { id: "client-lounge", label: "Client Lounge" },
    { id: "equipment-storage", label: "Equipment Storage" },
    { id: "loading-dock", label: "Loading Dock" },
    { id: "elevator", label: "Elevator Access" },
    { id: "wheelchair", label: "Wheelchair Accessible" },
];

export default function AmenitiesSetupPage() {
    const router = useRouter();
    const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

    const handleCheckboxChange = (amenityId: string, checked: boolean) => {
        if (checked) {
            setSelectedAmenities(prev => [...prev, amenityId]);
        } else {
            setSelectedAmenities(prev => prev.filter(id => id !== amenityId));
        }
    };

    const handleNext = () => {
        // In a real app, save state
        console.log("Selected Amenities:", selectedAmenities);
        router.push('/studios/setup/equipment');
    };
    
    const handlePrevious = () => {
        router.back();
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 font-body">
            <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
                <header className="mb-8">
                    <h1 className="text-2xl font-bold">Studio Setup</h1>
                    <div className="flex items-center gap-4 mt-2">
                        <Progress value={40} className="w-full" />
                        <span className="text-sm text-muted-foreground font-semibold whitespace-nowrap">Step 2 of 5</span>
                    </div>
                </header>

                <main>
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Amenities</h2>
                            <p className="text-muted-foreground">Select all amenities available at your studio</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {amenitiesList.map((amenity) => (
                                <Label key={amenity.id} htmlFor={amenity.id} className="flex items-center gap-3 rounded-lg border p-3 cursor-pointer hover:bg-gray-50 transition-colors">
                                    <Checkbox 
                                        id={amenity.id} 
                                        onCheckedChange={(checked) => handleCheckboxChange(amenity.id, checked as boolean)}
                                        checked={selectedAmenities.includes(amenity.id)}
                                    />
                                    <span>{amenity.label}</span>
                                </Label>
                            ))}
                        </div>

                        <div className="rounded-lg bg-gray-100 p-3 text-sm text-muted-foreground">
                            Selected: {selectedAmenities.length} amenities
                        </div>

                        <div className="flex justify-between pt-4">
                            <Button variant="outline" onClick={handlePrevious}>Previous</Button>
                            <Button onClick={handleNext} style={{backgroundColor: '#A78BFA', color: 'white'}}>Next Step</Button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
