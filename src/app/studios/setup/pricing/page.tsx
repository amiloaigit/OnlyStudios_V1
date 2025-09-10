
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Info } from 'lucide-react';

export default function PricingSetupPage() {
    const router = useRouter();
    const [price, setPrice] = useState(0);
    const [rate, setRate] = useState('hour');

    const handleNext = () => {
        // In a real app, save state
        console.log("Price:", price, "Rate:", rate);
        router.push('/studios/setup/photos');
    };
    
    const handlePrevious = () => {
        router.back();
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 font-body">
            <div className="text-center mb-4 absolute top-4">
                 <h1 className="text-4xl font-bold font-headline" style={{color: '#8B5CF6'}}>Only Creation</h1>
                <p className="text-sm text-muted-foreground">List your studio space</p>
            </div>
            <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
                <header className="mb-8">
                    <h1 className="text-2xl font-bold">Studio Setup</h1>
                    <div className="flex items-center gap-4 mt-2">
                        <Progress value={80} className="w-full" />
                        <span className="text-sm text-muted-foreground font-semibold whitespace-nowrap">Step 4 of 5</span>
                    </div>
                </header>

                <main>
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Pricing & Contact</h2>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="price">Price *</Label>
                                <Input 
                                    id="price" 
                                    type="number" 
                                    placeholder="0.00" 
                                    required 
                                    value={price === 0 ? '' : price}
                                    onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="rate">Per *</Label>
                                <Select required defaultValue="hour" onValueChange={setRate}>
                                    <SelectTrigger id="rate">
                                        <SelectValue placeholder="Per Hour" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="hour">Per Hour</SelectItem>
                                        <SelectItem value="day">Per Day</SelectItem>
                                        <SelectItem value="session">Per Session</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="whatsapp">WhatsApp Contact Number *</Label>
                            <Input id="whatsapp" placeholder="+91 (555) 123-4567" required />
                            <p className="text-xs text-muted-foreground">This number will be used for direct booking inquiries and communications</p>
                        </div>

                        <div className="rounded-lg bg-gray-100 p-4">
                            <div className="flex items-center gap-2">
                                <Info className="h-5 w-5 text-primary" />
                                <h3 className="font-semibold">Pricing Preview</h3>
                            </div>
                            <p className="text-primary text-xl font-bold mt-2">₹{price.toLocaleString()} /{rate}</p>
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
