import { Product, Service, GalleryItem } from './types';

export const PROTECTION_PRODUCTS: Product[] = [
  {
    id: 'Volikshield',
    name: 'Volikshield',
    description: 'Our premium clear PPF with self-healing properties and extreme gloss.',
    image: 'https://lh3.googleusercontent.com/d/1qxNScmn6Bk5i9vUXYU8goAA-RnL5uglN',
    features: ['Self-healing', 'Hydrophobic', 'Anti-yellowing', 'High Gloss']
  },
  {
    id: 'Volikmatte',
    name: 'Volikmatte',
    description: 'Transform any color into a sleek matte finish with full protection.',
    image: 'https://lh3.googleusercontent.com/d/1XG-gQQ1MaiBB6tttZE2S4NnHM6mYS4YT',
    features: ['Matte Finish', 'Self-healing', 'Stain Resistant', 'Durable']
  },
  {
    id: 'Volikcolor',
    name: 'VOLIK COLOR',
    description: 'Elevate your vehicle\'s aesthetics with our colored and textured PPF series. From deep gloss black to realistic carbon fiber, get the look of a wrap with the protection of a premium film.',
    image: 'https://lh3.googleusercontent.com/d/1_KjcSNUK_i3JP3VjTgPQnocPMdILU8q3',
    features: ['Gloss Color', 'Carbon Fiber', 'Self-healing', 'Full Protection']
  }
];

export const WINDOW_PRODUCTS: Product[] = [
  {
    id: 'window-tint',
    name: 'Window Tinting',
    description: 'Advanced graphene cooling technology for superior heat rejection and privacy. Our films block up to 99% of harmful UV rays while maintaining crystal clear visibility.',
    image: 'https://loremflickr.com/1200/800/rollsroyce,phantom,car',
    features: ['Graphene Tech', '99% UV Block', 'Heat Rejection', 'Privacy']
  },
  {
    id: 'windshield-protection',
    name: 'Windshield Protection',
    description: 'Protect your expensive windshield from cracks, pits, and scratches with our specialized impact-resistant film. Engineered for maximum clarity and durability.',
    image: 'https://loremflickr.com/1200/800/ferrari,sf90,car',
    features: ['Impact Resistant', 'High Clarity', 'Hydrophobic', 'Scratch Proof']
  }
];

export const CHEMICAL_PRODUCTS: Product[] = [
  {
    id: 'volik-install-gel',
    name: 'VOLIK Installation Gel',
    description: 'A professional-grade mounting solution designed for seamless PPF installation. Provides the perfect balance of slip and tack, ensuring a bubble-free finish without leaving residue.',
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800',
    features: ['Perfect Slip', 'Quick Tack', 'No Residue', 'Professional Grade']
  },
  {
    id: 'volik-finish',
    name: 'VOLIK Finish',
    description: 'A premium quick detailer designed to enhance gloss and provide a slick, hydrophobic surface. Perfect for maintaining the showroom shine of your PPF or ceramic coating.',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1000',
    features: ['High Gloss', 'Slick Surface', 'Hydrophobic', 'Easy Application']
  },
  {
    id: 'volik-wash',
    name: 'VOLIK Wash',
    description: 'A pH-neutral, high-foaming shampoo that safely removes dirt and grime without stripping protection. Specially formulated for PPF-wrapped vehicles.',
    image: 'https://lh3.googleusercontent.com/d/15JZ-1_KLX7kfnPiYZtIDWKwFGIIeqEzp',
    features: ['pH Neutral', 'High Foam', 'Safe for PPF', 'Lubricated']
  },
  {
    id: 'volik-interior',
    name: 'VOLIK Interior',
    description: 'All-in-one interior cleaner and protectant. Removes dust and stains while leaving a natural, non-greasy finish with UV protection.',
    image: 'https://lh3.googleusercontent.com/d/1ir9YTuQcZ9rN_g4WRerWaSgBXYy_fuzg',
    features: ['Multi-surface', 'UV Protection', 'Natural Finish', 'Anti-static'],
    objectPosition: 'center 45%'
  }
];

export const TOOL_PRODUCTS: Product[] = [
  {
    id: 'pro-squeegee-set',
    name: 'Professional Squeegee Set',
    description: 'A versatile set of squeegees with varying hardness levels. Designed for optimal water extraction and air bubble removal during PPF and window film installation.',
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800',
    features: ['Multi-hardness', 'Ergonomic Grip', 'Durable Edge', 'Water Extraction']
  },
  {
    id: 'precision-knife',
    name: 'Precision Cutting Knife',
    description: 'Ultra-sharp stainless steel knife for precise trimming of films. Features a slim profile for tight corners and a secure locking mechanism.',
    image: 'https://images.unsplash.com/photo-1516962080544-eac695c93791?auto=format&fit=crop&q=80&w=800',
    features: ['Stainless Steel', 'Snap-off Blades', 'Slim Design', 'Precision Tip']
  },
  {
    id: 'heat-gun-pro',
    name: 'Professional Heat Gun',
    description: 'Variable temperature heat gun essential for stretching film around complex curves and activating adhesive properties.',
    image: 'https://images.unsplash.com/photo-1530124560677-bdaea02c9a79?auto=format&fit=crop&q=80&w=800',
    features: ['Variable Temp', 'Dual Fan Speed', 'Consistent Heat', 'Safety Stand']
  },
  {
    id: 'sprayer-system',
    name: 'Pressurized Sprayer System',
    description: 'High-capacity pressurized sprayer for consistent application of installation gels and slip solutions over large surfaces.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    features: ['Constant Pressure', 'Adjustable Nozzle', 'Large Capacity', 'Chemical Resistant']
  }
];

export const TECHNOLOGY = [
  {
    id: 'self-healing',
    title: 'Self-Healing',
    description: 'Advanced top-coat technology that repairs minor scratches with heat.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hydrophobic',
    title: 'Hydrophobic',
    description: 'Superior water and dirt repelling properties for easy maintenance.',
    image: 'https://lh3.googleusercontent.com/d/1mbLCSQ07xZ6j50unM3aRWlB2fYE-G_fh'
  },
  {
    id: 'dap',
    title: 'Cutting Software',
    description: 'Our proprietary precision cutting software provides the industry\'s most accurate pattern database for a perfect edge-to-edge fit.',
    image: 'https://lh3.googleusercontent.com/d/1pdgRnYdKGOffB66k4gbRoJ_Or0kXKmX2',
  },
  {
    id: 'graphene',
    title: 'Graphene Cooling',
    description: 'Unmatched heat rejection technology for maximum cabin comfort.',
    image: 'https://lh3.googleusercontent.com/d/1FrO3Bhfmyr_J2gdcJ6ej8mvW1BkGDvQt'
  }
];

export const GALLERY: GalleryItem[] = [
  { 
    id: '1', 
    title: 'Porsche 911 GT3', 
    category: 'Full PPF', 
    image: 'https://loremflickr.com/800/800/porsche,gt3,car',
    description: 'Full body protection with Volikshield for ultimate gloss and stone chip protection.'
  },
  { 
    id: '2', 
    title: 'Lamborghini Huracan', 
    category: 'Volikmatte', 
    image: 'https://loremflickr.com/800/800/lamborghini,huracan,car',
    description: 'Transformed to a stealthy satin finish using our premium Volikmatte film.'
  },
  { 
    id: '3', 
    title: 'Ferrari F8 Tributo', 
    category: 'Full PPF', 
    image: 'https://loremflickr.com/800/800/ferrari,f8,car',
    description: 'Seamless installation of Volikshield clear film to preserve the iconic Rosso Corsa paint.'
  },
  { 
    id: '4', 
    title: 'Bentley Continental GT', 
    category: 'Window Tint', 
    image: 'https://loremflickr.com/800/800/bentley,gt,car',
    description: 'Advanced heat rejection with our graphene-infused window film for maximum comfort.'
  },
  { 
    id: '5', 
    title: 'Rolls-Royce Cullinan', 
    category: 'Volikcarbon', 
    image: 'https://loremflickr.com/800/800/rollsroyce,cullinan,car',
    description: 'Custom carbon fiber accents applied to the hood and mirrors using Volikcarbon.'
  },
  { 
    id: '6', 
    title: 'Ferrari 812 Superfast', 
    category: 'Full PPF', 
    image: 'https://loremflickr.com/800/800/ferrari,812,car',
    description: 'Complete exterior safeguarding against road debris with high-gloss self-healing PPF.'
  }
];
