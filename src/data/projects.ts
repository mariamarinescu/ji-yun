// Import images
import KIKOF1 from '../images/kikof-1.png';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';
import WebImage1 from '../images/web-project-1.jpg';

export const projectsData = [
  {
    id: 1,
    title: 'KIKOF - Ceramic Brand',
    category: 'Modeling Production',
    img: KIKOF1,
    ProjectHeader: {
      title: 'KIKOF - Ceramic Brand',
      publishDate: '2014',
      tags: '',
      location: 'Tokio, Japan',
    },
  },
  {
    id: 2,
    title: 'FIKA - Cafe and Bakery',
    category: 'Corporate Identity Design / Illustration',
    img: MobileImage2,
    ProjectHeader: {
      title: 'FIKA - Cafe and Bakery',
      publishDate: '2015',
      tags: 'Photo direction / Private Brand Products',
      location: 'Seoul, Korea',
    },
  },
  {
    id: 3,
    title: 'Project Management UI',
    category: 'UI/UX Design',
    img: UIImage1,
  },
  {
    id: 4,
    title: 'Cloud Storage Platform',
    category: 'UI/UX Design',
    img: UIImage2,
  },
  {
    id: 5,
    title: 'React Social App',
    category: 'Mobile Application',
    img: MobileImage1,
  },
  {
    id: 6,
    title: 'Apple Design System',
    category: 'Web Application',
    img: WebImage1,
  },
];
