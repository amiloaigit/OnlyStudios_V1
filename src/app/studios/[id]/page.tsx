import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getStudioById } from '@/lib/mock-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Star, MapPin, Wifi, ParkingCircle, Coffee, Wind, Monitor, Check } from 'lucide-react';

const amenityIcons = {
  "Wi-Fi": <Wifi className="h-5 w-5 text-accent" />,
  "Parking": <ParkingCircle className="h-5 w-5 text-accent" />,
  "Coffee": <Coffee className="h-5 w-5 text-accent" />,
  "Air Conditioning": <Wind className="h-5 w-5 text-accent" />,
  "Lighting Kit": <Monitor className="h-5 w-5 text-accent" />,
  "Green Screen": <Check className="h-5 w-5 text-accent" />,
};

type AmenityIcon = keyof typeof amenityIcons;

export default function StudioDetailPage({ params }: { params: { id: string } }) {
  const studio = getStudioById(params.id);

  if (!studio) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-5xl py-8 px-4">
      <header className="mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">{studio.name}</h1>
        <div className="flex items-center gap-4 mt-2 text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <span className="font-bold text-lg text-foreground">{studio.rating}</span>
          </div>
          <span className="text-xl">&middot;</span>
          <div className="flex items-center gap-1">
            <MapPin className="h-5 w-5" />
            <span>{studio.location}</span>
          </div>
        </div>
      </header>
      
      <Carousel className="w-full mb-8">
        <CarouselContent>
          {studio.images.map((img, index) => (
            <CarouselItem key={index}>
              <div className="relative h-96 w-full">
                <Image src={img} alt={`${studio.name} view ${index + 1}`} fill className="object-cover rounded-lg" data-ai-hint="studio setup"/>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">About this studio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{studio.description}</p>
              
              <Accordion type="single" collapsible className="w-full mt-6">
                <AccordionItem value="amenities">
                  <AccordionTrigger>Amenities</AccordionTrigger>
                  <AccordionContent>
                    <ul className="grid grid-cols-2 gap-4 pt-2">
                      {studio.amenities.map(amenity => (
                        <li key={amenity} className="flex items-center gap-3">
                          {amenityIcons[amenity as AmenityIcon]}
                          <span>{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="equipment">
                  <AccordionTrigger>Equipment</AccordionTrigger>
                  <AccordionContent>
                    <ul className="grid grid-cols-2 gap-2 pt-2">
                      {studio.equipment.map(item => (
                        <li key={item} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-accent"/>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1">
          <Card className="shadow-lg sticky top-8">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Book Your Session</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4">
                ${studio.price}{' '}
                <span className="text-lg font-normal text-muted-foreground">/ hour</span>
              </p>
              <Button size="lg" className="w-full text-lg">Book Now</Button>
              <Button variant="outline" size="lg" className="w-full mt-2 text-lg">Contact Host</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
