export type Amenity = "Wi-Fi" | "Parking" | "Coffee" | "Air Conditioning" | "Lighting Kit" | "Green Screen";

export type Studio = {
  id: string;
  name: string;
  type: 'Photography' | 'Recording' | 'Dance' | 'Art' | 'Multipurpose';
  location: string;
  price: number;
  rating: number;
  mainImage: string;
  images: string[];
  amenities: Amenity[];
  equipment: string[];
  description: string;
  short_video_url: string;
  postedBy: {
    name: string;
    avatar: string;
  };
};

export type User = {
  name: string;
  username: string;
  avatar: string;
  bio: string;
  stats: {
    posts: number;
    followers: string;
    following: number;
  };
};
