import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { userProfile, studios } from '@/lib/mock-data';
import { Grid3x3, Clapperboard, Bookmark } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <header className="flex flex-col md:flex-row items-center gap-8">
        <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-card">
          <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
          <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <h2 className="text-2xl font-light">{userProfile.username}</h2>
            <Button variant="secondary" size="sm">Edit Profile</Button>
          </div>
          <div className="hidden md:flex gap-8 mb-4">
            <p><span className="font-semibold">{userProfile.stats.posts}</span> posts</p>
            <p><span className="font-semibold">{userProfile.stats.followers}</span> followers</p>
            <p><span className="font-semibold">{userProfile.stats.following}</span> following</p>
          </div>
          <div>
            <h1 className="font-semibold">{userProfile.name}</h1>
            <p className="text-muted-foreground">{userProfile.bio}</p>
          </div>
        </div>
      </header>
      
      <div className="flex justify-around border-t mt-8 py-4 md:hidden">
        <div className="text-center">
            <p className="font-semibold">{userProfile.stats.posts}</p> 
            <p className="text-muted-foreground text-sm">posts</p>
        </div>
        <div className="text-center">
            <p className="font-semibold">{userProfile.stats.followers}</p> 
            <p className="text-muted-foreground text-sm">followers</p>
        </div>
        <div className="text-center">
            <p className="font-semibold">{userProfile.stats.following}</p> 
            <p className="text-muted-foreground text-sm">following</p>
        </div>
      </div>

      <Tabs defaultValue="posts" className="w-full mt-4">
        <TabsList className="grid w-full grid-cols-3 bg-transparent border-t rounded-none">
          <TabsTrigger value="posts" className="rounded-none border-t-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none">
            <Grid3x3 className="mr-2 h-4 w-4" /> POSTS
          </TabsTrigger>
          <TabsTrigger value="reels" className="rounded-none border-t-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none">
            <Clapperboard className="mr-2 h-4 w-4" /> REELS
          </TabsTrigger>
          <TabsTrigger value="saved" className="rounded-none border-t-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none">
            <Bookmark className="mr-2 h-4 w-4" /> SAVED
          </TabsTrigger>
        </TabsList>
        <TabsContent value="posts">
          <div className="grid grid-cols-3 gap-1 md:gap-4">
            {studios.map(studio => (
              <div key={studio.id} className="relative aspect-square">
                <Image src={studio.mainImage} alt={studio.name} fill className="object-cover" data-ai-hint="studio interior" />
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="reels">
           <div className="grid grid-cols-3 gap-1 md:gap-4">
            {studios.slice().reverse().map(studio => (
              <div key={studio.id} className="relative aspect-[9/16]">
                <Image src={studio.short_video_url} alt={studio.name} fill className="object-cover" data-ai-hint="studio video" />
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="saved">
          <div className="grid grid-cols-3 gap-1 md:gap-4">
            {studios.slice(0,3).map(studio => (
              <div key={studio.id} className="relative aspect-square">
                <Image src={studio.mainImage} alt={studio.name} fill className="object-cover" data-ai-hint="studio design" />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
