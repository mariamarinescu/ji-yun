export interface Project {
  id: string;
  client: string;
  description: string;
  img: string;
  year: string;
  location: string;
  tags: string[];
  referenceWebsite: string | null;
}
