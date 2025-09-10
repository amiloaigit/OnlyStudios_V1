
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function StudioSetupPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 font-body">
            <div className="text-center mb-4 absolute top-4">
                <p className="text-sm text-muted-foreground">List your studio space</p>
            </div>
            <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
                <header className="mb-8">
                    <h1 className="text-2xl font-bold">Studio Setup</h1>
                    <div className="flex items-center gap-4 mt-2">
                        <Progress value={20} className="w-full" />
                        <span className="text-sm text-muted-foreground font-semibold whitespace-nowrap">Step 1 of 5</span>
                    </div>
                </header>

                <main>
                    <form className="space-y-6">
                        <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
                        <div className="space-y-2">
                            <Label htmlFor="studio-name">Studio Name *</Label>
                            <Input id="studio-name" placeholder="Enter your studio name" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="address">Address *</Label>
                            <Textarea id="address" placeholder="" className="min-h-24"/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Description *</Label>
                            <Textarea id="description" placeholder="" className="min-h-24"/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="studio-type">Studio Type *</Label>
                            <Select>
                                <SelectTrigger id="studio-type">
                                    <SelectValue placeholder="Select studio type" />
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
                        <div className="flex justify-end pt-4">
                            <Button type="submit" style={{backgroundColor: '#A78BFA', color: 'white'}}>Next Step</Button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
}
