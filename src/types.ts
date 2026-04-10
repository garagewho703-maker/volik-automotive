export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  objectPosition?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
}
