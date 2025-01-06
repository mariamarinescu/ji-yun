export interface Project {
  id: string;
  client: string;
  description: string;
  headline: string;
  img: string;
  year: string;
  location: string;
  tags: string[];
  referenceWebsite: string | undefined;
}
