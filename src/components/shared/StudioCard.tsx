import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Studio } from '@/lib/types';
import { MapPin, Star } from 'lucide-react';

export function StudioCard({ studio }: { studio: Studio }) {
  return (
    <Link href={`/studios/${studio.id}`} className="group block">
      <Card className="overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1">
        <div className="relative h-48 w-full">
          <Image
            src={studio.mainImage}
            alt={studio.name}
            fill
            className="object-cover"
            data-ai-hint={`${studio.type} studio`}
          />
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg truncate pr-2">{studio.name}</h3>
            <Badge variant="secondary" className="flex-shrink-0">{`$${studio.price}/hr`}</Badge>
          </div>
          <div className="text-sm text-muted-foreground mt-1 flex justify-between items-center">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{studio.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold">{studio.rating.toFixed(1)}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{studio.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
