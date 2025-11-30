
export interface DJ {
    id: number;
    name: string;
    specialty: string;
    experience: string;
    image: string;
    bio: string;
    genres: string[];
    events: number;
    rating: number;
    gallery: string[];
  }
  
  export interface Combo {
    id: number;
    name: string;
    price: number;
    capacity: string;
    image: string;
    description: string;
    equipment: string[];
    fullDescription: string;
    wattage: string;
    gallery: string[];
    features: string[];
  }

  export interface Filters {
    priceRange: string;
    capacity: string;
  }

  export interface HeroEventProps {
    title: string;
    subtitle: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    primaryLinkTo?: string;
    secondaryLinkTo?: string;
    onPrimaryButtonClick?: () => void;
    onSecondaryButtonClick?: () => void;
    backgroundImage?: string;
  }

  export interface SearchBarProps {
    onSearch: (value: string) => void;
  }
  