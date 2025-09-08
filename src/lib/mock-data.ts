import type { Studio, User } from './types';

export const studios: Studio[] = [
  {
    id: '1',
    name: 'Loft 42',
    type: 'Photography',
    location: 'Brooklyn, NY',
    price: 150,
    rating: 4.9,
    mainImage: 'https://picsum.photos/seed/studio-loft/800/600',
    images: [
      'https://picsum.photos/seed/studio-loft-1/1200/800',
      'https://picsum.photos/seed/studio-loft-2/1200/800',
      'https://picsum.photos/seed/studio-loft-3/1200/800',
    ],
    amenities: ['Wi-Fi', 'Parking', 'Air Conditioning', 'Lighting Kit'],
    equipment: ['Canon EOS R5', 'Profoto B10', 'C-Stands', 'V-Flats'],
    description: 'A beautiful, naturally lit loft studio perfect for fashion and portrait photography. Features high ceilings and a variety of backdrops.',
    short_video_url: 'https://picsum.photos/seed/reel-studio-1/360/640',
    postedBy: {
      name: 'Jane Doe',
      avatar: 'https://picsum.photos/seed/avatar1/100/100',
    },
  },
  {
    id: '2',
    name: 'Echo Chamber',
    type: 'Recording',
    location: 'Los Angeles, CA',
    price: 200,
    rating: 5.0,
    mainImage: 'https://picsum.photos/seed/recording-studio/800/600',
    images: [
      'https://picsum.photos/seed/recording-studio-1/1200/800',
      'https://picsum.photos/seed/recording-studio-2/1200/800',
      'https://picsum.photos/seed/recording-studio-3/1200/800',
    ],
    amenities: ['Wi-Fi', 'Coffee', 'Air Conditioning'],
    equipment: ['Neumann U87', 'SSL Console', 'Pro Tools HDX', 'Genelec Monitors'],
    description: 'A state-of-the-art recording studio with professionally treated acoustics and a collection of vintage and modern microphones.',
    short_video_url: 'https://picsum.photos/seed/reel-studio-2/360/640',
    postedBy: {
      name: 'John Sound',
      avatar: 'https://picsum.photos/seed/avatar2/100/100',
    },
  },
  {
    id: '3',
    name: 'Movement Space',
    type: 'Dance',
    location: 'Chicago, IL',
    price: 80,
    rating: 4.8,
    mainImage: 'https://picsum.photos/seed/dance-studio/800/600',
    images: [
      'https://picsum.photos/seed/dance-studio-1/1200/800',
      'https://picsum.photos/seed/dance-studio-2/1200/800',
      'https://picsum.photos/seed/dance-studio-3/1200/800',
    ],
    amenities: ['Wi-Fi', 'Parking', 'Air Conditioning'],
    equipment: ['Sprung Floor', 'Mirrored Walls', 'Ballet Barres', 'Sound System'],
    description: 'Spacious dance studio with sprung floors and full-length mirrors. Ideal for rehearsals, classes, and video shoots.',
    short_video_url: 'https://picsum.photos/seed/reel-studio-3/360/640',
    postedBy: {
      name: 'Motion Masters',
      avatar: 'https://picsum.photos/seed/avatar3/100/100',
    },
  },
  {
    id: '4',
    name: 'Canvas Corner',
    type: 'Art',
    location: 'Miami, FL',
    price: 60,
    rating: 4.7,
    mainImage: 'https://picsum.photos/seed/art-studio/800/600',
    images: [
      'https://picsum.photos/seed/art-studio-1/1200/800',
      'https://picsum.photos/seed/art-studio-2/1200/800',
      'https://picsum.photos/seed/art-studio-3/1200/800',
    ],
    amenities: ['Wi-Fi', 'Parking'],
    equipment: ['Easels', 'Wash Sink', 'Drying Racks'],
    description: 'A bright and inspiring art studio for painters and sculptors. Offers a creative and messy-friendly environment.',
    short_video_url: 'https://picsum.photos/seed/reel-studio-4/360/640',
    postedBy: {
      name: 'Artful Escapes',
      avatar: 'https://picsum.photos/seed/avatar4/100/100',
    },
  },
  {
    id: '5',
    name: 'The Flex Room',
    type: 'Multipurpose',
    location: 'Austin, TX',
    price: 120,
    rating: 4.9,
    mainImage: 'https://picsum.photos/seed/multipurpose-studio/800/600',
    images: [
      'https://picsum.photos/seed/multipurpose-studio-1/1200/800',
      'https://picsum.photos/seed/multipurpose-studio-2/1200/800',
      'https://picsum.photos/seed/multipurpose-studio-3/1200/800',
    ],
    amenities: ['Wi-Fi', 'Parking', 'Coffee', 'Air Conditioning', 'Green Screen'],
    equipment: ['Projector', 'Whiteboard', 'Modular Seating', 'Sound System'],
    description: 'A versatile space that can be configured for workshops, events, photoshoots, and more. Your vision, our space.',
    short_video_url: 'https://picsum.photos/seed/reel-studio-5/360/640',
    postedBy: {
      name: 'Event Horizon',
      avatar: 'https://picsum.photos/seed/avatar5/100/100',
    },
  },
  {
    id: '6',
    name: 'Cineplex Green',
    type: 'Photography',
    location: 'New York, NY',
    price: 250,
    rating: 4.9,
    mainImage: 'https://picsum.photos/seed/greenscreen-studio/800/600',
    images: [
        'https://picsum.photos/seed/greenscreen-studio-1/1200/800',
        'https://picsum.photos/seed/greenscreen-studio-2/1200/800',
        'https://picsum.photos/seed/greenscreen-studio-3/1200/800',
    ],
    amenities: ['Wi-Fi', 'Parking', 'Air Conditioning', 'Green Screen', 'Lighting Kit'],
    equipment: ['ARRI Alexa Mini', 'Full Grip Package', 'Cyclorama Wall'],
    description: 'Professional cyclorama green screen studio for film and photo. Pre-lit and ready for your production needs.',
    short_video_url: 'https://picsum.photos/seed/reel-studio-6/360/640',
    postedBy: {
        name: 'VFX Visions',
        avatar: 'https://picsum.photos/seed/avatar6/100/100',
    },
  },
];

export const userProfile: User = {
  name: 'Creative Soul',
  username: 'creativesoul101',
  avatar: 'https://picsum.photos/seed/myavatar/200/200',
  bio: 'Just a creator exploring the world, one studio at a time. 📸🎤💃🎨',
  stats: {
    posts: 42,
    followers: '1.2M',
    following: 350,
  },
};

export const getStudioById = (id: string): Studio | undefined => {
  return studios.find((studio) => studio.id === id);
};

export const reels = studios.map(studio => ({
  id: studio.id,
  videoUrl: studio.short_video_url,
  studioName: studio.name,
  studioAvatar: studio.postedBy.avatar,
  description: studio.description.substring(0, 100) + '...',
}));
