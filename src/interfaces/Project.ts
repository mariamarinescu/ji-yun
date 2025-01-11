import { ProjectSwiperImage } from './ProjectSwiperImage';

export interface Project {
  id: string;
  client: string;
  description: string;
  headline: string;
  img: string;
  year: string;
  location: string;
  tags: string[];
  referenceWebsite?: string;
  gallery: ProjectSwiperImage[];
}
