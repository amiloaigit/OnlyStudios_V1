import { reels } from "@/lib/mock-data";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Music, Heart, MessageCircle, Send } from 'lucide-react';

export default function ReelsPage() {
  return (
    <div className="relative h-full w-full snap-y snap-mandatory overflow-y-auto bg-black">
      {reels.map((reel) => (
        <div key={reel.id} className="relative h-full w-full snap-center flex items-center justify-center">
          <Image
            src={reel.videoUrl}
            alt={`Reel for ${reel.studioName}`}
            fill
            className="object-cover"
            priority={reel.id === reels[0].id}
            data-ai-hint="studio reel"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
          
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={reel.studioAvatar} alt={reel.studioName} />
                <AvatarFallback>{reel.studioName.charAt(0)}</AvatarFallback>
              </Avatar>
              <h3 className="font-bold">{reel.studioName}</h3>
              <button className="border border-white rounded-md px-3 py-1 text-sm font-semibold">Follow</button>
            </div>
            <p className="mt-2 text-sm">{reel.description}</p>
            <div className="flex items-center gap-2 mt-2">
              <Music className="h-4 w-4" />
              <p className="text-sm">Original Audio - {reel.studioName}</p>
            </div>
          </div>
          
          <div className="absolute bottom-4 right-4 flex flex-col items-center gap-5 text-white">
            <button className="flex flex-col items-center gap-1">
              <Heart className="h-8 w-8" />
              <span className="text-xs font-semibold">1.2k</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <MessageCircle className="h-8 w-8" />
              <span className="text-xs font-semibold">103</span>
            </button>
            <button>
              <Send className="h-8 w-8" />
            </button>
            <Avatar className="h-8 w-8 border-2 border-white">
                <AvatarImage src={reel.studioAvatar} alt={reel.studioName} />
                <AvatarFallback>{reel.studioName.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      ))}
    </div>
  );
}
