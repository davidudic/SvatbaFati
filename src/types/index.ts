// Základní typy pro naši aplikaci

export interface AccommodationRoom {
    type: string;
    personOne: string;
    personTwo: string;
    personThree: string;
    personFour: string;
  }
  
  export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
  }
  
  export interface NavItem {
    id: string;
    label: string;
    href: string;
  }