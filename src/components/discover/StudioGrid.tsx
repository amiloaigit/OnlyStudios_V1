'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { StudioCard } from '../shared/StudioCard';
import type { Studio } from '@/lib/types';
import { Search } from 'lucide-react';

export function StudioGrid({ allStudios }: { allStudios: Studio[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [studioType, setStudioType] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  const filteredAndSortedStudios = useMemo(() => {
    let studios = allStudios;

    if (searchTerm) {
      studios = studios.filter(studio =>
        studio.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        studio.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        studio.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (studioType !== 'all') {
      studios = studios.filter(studio => studio.type === studioType);
    }

    studios.sort((a, b) => {
      if (sortBy === 'price_asc') return a.price - b.price;
      if (sortBy === 'price_desc') return b.price - a.price;
      return b.rating - a.rating; // default to rating
    });

    return studios;
  }, [allStudios, searchTerm, studioType, sortBy]);

  const studioTypes = ['all', ...Array.from(new Set(allStudios.map(s => s.type)))];

  return (
    <div>
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative md:col-span-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by name, location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={studioType} onValueChange={setStudioType}>
          <SelectTrigger>
            <SelectValue placeholder="Studio Type" />
          </SelectTrigger>
          <SelectContent>
            {studioTypes.map(type => (
              <SelectItem key={type} value={type}>{type === 'all' ? 'All Types' : type}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rating">Rating</SelectItem>
            <SelectItem value="price_asc">Price: Low to High</SelectItem>
            <SelectItem value="price_desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filteredAndSortedStudios.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedStudios.map(studio => (
            <StudioCard key={studio.id} studio={studio} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg font-semibold">No studios found</p>
          <p className="text-muted-foreground">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}
