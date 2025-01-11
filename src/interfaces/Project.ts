import { ProjectSwiperImage } from './ProjectSwiperImage';

type ProjectTag =
  | 'Corporate Identity Design'
  | 'Brand Identity Design'
  | 'Illustration'
  | 'Slogan Design'
  | 'Photo direction'
  | 'Private Brand Products'
  | 'Flyer Design'
  | 'Package design'
  | 'Modeling Production';

export interface Project {
  id: string;
  client: string;
  description: string;
  headline: string;
  img: string;
  year: string;
  location: string;
  tags: ProjectTag[];
  referenceWebsite?: string;
  gallery: ProjectSwiperImage[];
}
