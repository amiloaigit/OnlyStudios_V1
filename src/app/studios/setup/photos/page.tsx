
'use client';

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ImageUpload } from '@/components/studios/ImageUpload';

export default function PhotosSetupPage() {
    const router = useRouter();

    const handleNext = () => {
        // In a real app, this would be the final step, submitting all data.
        // For now, we'll just redirect to the homepage.
        router.push('/');
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
                        <Progress value={100} className="w-full" />
                        <span className="text-sm text-muted-foreground font-semibold whitespace-nowrap">Step 5 of 5</span>
                    </div>
                </header>

                <main>
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Photos</h2>
                            <p className="text-muted-foreground">Upload high-quality images of your studio</p>
                        </div>
                        
                        <div className="space-y-4">
                            <h3 className="font-medium">Cover Photo</h3>
                            <ImageUpload label="Drag 'n' drop a file here, or click to select a file" />
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-medium">Additional Photos</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <ImageUpload />
                                <ImageUpload />
                                <ImageUpload />
                                <ImageUpload />
                            </div>
                        </div>

                        <div className="flex justify-between pt-4">
                            <Button variant="outline" onClick={handlePrevious}>Previous</Button>
                            <Button onClick={handleNext} style={{backgroundColor: '#A78BFA', color: 'white'}}>Finish Setup</Button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
