
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function EquipmentSetupPage() {
    const router = useRouter();
    const [equipmentList, setEquipmentList] = useState<string[]>([]);
    const [currentItem, setCurrentItem] = useState('');

    const handleAddItem = () => {
        if (currentItem && !equipmentList.includes(currentItem)) {
            setEquipmentList(prev => [...prev, currentItem]);
            setCurrentItem('');
        }
    };

    const handleRemoveItem = (itemToRemove: string) => {
        setEquipmentList(prev => prev.filter(item => item !== itemToRemove));
    };

    const handleNext = () => {
        // In a real app, save state
        console.log("Equipment List:", equipmentList);
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
                        <Progress value={60} className="w-full" />
                        <span className="text-sm text-muted-foreground font-semibold whitespace-nowrap">Step 3 of 5</span>
                    </div>
                </header>

                <main>
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Equipment</h2>
                            <p className="text-muted-foreground">Add equipment available for use at your studio</p>
                        </div>
                        
                        <div className="flex gap-2">
                            <Input 
                                placeholder="e.g. Canon 5D Mark IV, Softbox Lighting Kit" 
                                value={currentItem}
                                onChange={(e) => setCurrentItem(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleAddItem()}
                            />
                            <Button onClick={handleAddItem} style={{backgroundColor: '#A78BFA', color: 'white'}}>Add</Button>
                        </div>

                        <div className="rounded-lg border min-h-[100px] p-4 flex flex-wrap gap-2 items-start">
                            {equipmentList.length === 0 ? (
                                <p className="text-muted-foreground text-sm self-center mx-auto">No equipment added yet. Add equipment that creators can use at your studio.</p>
                            ) : (
                                equipmentList.map((item, index) => (
                                    <Badge key={index} variant="secondary" className="text-base py-1 pl-3 pr-2">
                                        {item}
                                        <button onClick={() => handleRemoveItem(item)} className="ml-2 rounded-full hover:bg-gray-300 p-0.5">
                                            <X className="h-3 w-3" />
                                        </button>
                                    </Badge>
                                ))
                            )}
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
