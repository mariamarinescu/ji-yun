import FIKA01 from '../images/FIKA01.jpg';
import FIKA02 from '../images/FIKA02.jpg';
import FIKA03 from '../images/FIKA03.jpg';
import FIKA04 from '../images/FIKA04.jpg';
import FIKA05 from '../images/FIKA05.jpg';
import FIKA06 from '../images/FIKA06.jpg';
import FIKA07 from '../images/FIKA07.jpg';
import FIKA08 from '../images/FIKA08.jpg';
import FIKA09 from '../images/FIKA09.jpg';
import FIKA10 from '../images/FIKA10.jpg';
import KIKOF01 from '../images/KIKOF01.jpg';
import KIKOF02 from '../images/KIKOF02.jpg';
import KIKOF03 from '../images/KIKOF03.jpg';
import KIKOF04 from '../images/KIKOF04.jpg';
import SKAN01 from '../images/SKAN01.jpg';
import SKAN02 from '../images/SKAN02.jpg';
import SKAN03 from '../images/SKAN03.jpg';
import TASK01 from '../images/TASK01.jpg';
import TASK02 from '../images/TASK02.jpg';
import TASK03 from '../images/TASK03.jpg';
import TASK04 from '../images/TASK04.jpg';
import wineandcoffee1 from '../images/WINEANDCOFFEEHOUSE01.jpg';
import wineandcoffee2 from '../images/WINEANDCOFFEEHOUSE02.jpg';
import wineandcoffee3 from '../images/WINEANDCOFFEEHOUSE03.jpg';
import wineandcoffee4 from '../images/WINEANDCOFFEEHOUSE04.jpg';

const commonImgProps = {
  width: '100%',
  height: '100%',
  alt: 'Portfolio image',
  dataSwiperZoom: '3',
  className: 'swiper-zoom-container',
  isZoomable: true,
};

export const projectsData = [
  {
    id: '1-KIKOF',
    client: 'KIKOF - Ceramic Brand',
    description: `Around Lake Biwa, which occupies about one-sixth of the prefecture’s soil in Shiga Prefecture, lush mountains and rural scenery spread, and craftsmen such as pottery, crepe, hemp, woodwork, lacquer, and Buddhist altars continue to make things. Next to Kyoto, which has long been the center of Japanese culture, it was also an important transportation hub, and various manufacturing activities have developed. In recent years, we faced the problem of lack of successors to inherit the technology cultivated over many years due to the decrease in demand, but by incorporating a design with modern ideas into the technology of traditional crafts and production areas KIKOF was born to want to make waves. KIKOF is the name of “Kakoko＝Kiko” with the initial letter F of the word indicating the direction of the brand such as Free, Full, Fly, Future. This is a project that aims to create things from the lake that is the mother of Japan, and to inherit the traditional culture without interruption.`,
    headline:
      '“KIKOF” is a product brand that KIGI founded jointly with “Mother Lake Products”, an organization where craftsmen from Shiga Prefecture gather under the theme of “Lake Biwa is a big vessel in Japan”.',
    year: '2014',
    location: 'Tokio, Japan',
    img: KIKOF01,
    tags: ['Modeling Production'],
    referenceWebsite: 'https://www.kikof.jp',
    gallery: [
      { src: KIKOF01, id: '1-KIKOF-gallery-1', ...commonImgProps },
      { src: KIKOF02, id: '1-KIKOF-gallery-2', ...commonImgProps },
      { src: KIKOF03, id: '1-KIKOF-gallery-3', ...commonImgProps },
      { src: KIKOF04, id: '1-KIKOF-gallery-4', ...commonImgProps },
    ],
  },
  {
    id: '2-FIKA',
    client: 'FIKA - Cafe and Bakery',
    description: `It contains the heart that thinks about the health. To solidify this spirit, FIKA offers fresh, healthy food. and to provide a Nordic bakery, each branch has a chef to provide freshly baked bread and desserts every day. The ultimate reason for launching Swedish Cafe “FIKA” in Korea-Seoul was to introduce Swedish culture and to make Nordic culture familiar to people. In addition to traditional Swedish bakery, coffee, and soul food, I made business cards, interior walls of cafes, and goods by drawing illustrations of Swedish architecture, Swedish traditional wooden doll Dalahäst, etc. I hoped it would lead to Nordic culture experience to Korean customers.`,
    headline: `FIKA means “coffee time with loved friends and people” in Swedish. ‘Lindvalls Kaffee’ from 100% Swedish which is called the Swedish royal coffee as a motto, to Swedish jam with a unique taste, desserts made using a Swedish recipe and flavored with only herbs and pure ingredients are a gift for loved ones.`,
    img: FIKA05,
    year: '2015',
    location: 'Seoul, Korea',
    tags: [
      'Corporate Identity Design',
      'Illustration',
      'Slogan Design',
      'Photo direction',
      'Private Brand Products',
    ],
    referenceWebsite: undefined,
    gallery: [
      { src: FIKA01, id: '2-FIKA-gallery-1', ...commonImgProps },
      { src: FIKA02, id: '2-FIKA-gallery-2', ...commonImgProps },
      { src: FIKA03, id: '2-FIKA-gallery-3', ...commonImgProps },
      { src: FIKA04, id: '2-FIKA-gallery-4', ...commonImgProps },
      { src: FIKA05, id: '2-FIKA-gallery-5', ...commonImgProps },
      { src: FIKA06, id: '2-FIKA-gallery-6', ...commonImgProps },
      { src: FIKA07, id: '2-FIKA-gallery-7', ...commonImgProps },
      { src: FIKA08, id: '2-FIKA-gallery-8', ...commonImgProps },
      { src: FIKA09, id: '2-FIKA-gallery-9', ...commonImgProps },
      { src: FIKA10, id: '2-FIKA-gallery-10', ...commonImgProps },
    ],
  },
  {
    id: '3-SKAN',
    client: 'SKAN - Life Style Shop',
    description: `By introducing new and various brands to Korea, we are conveying the daily life of Scandinavia. Not only just a store, this space is for those who love Nordic culture with Swedish cafe “Fika”. We suggest a Scandinavian lifestyle as a special for people. Introducing Swedish brands such as Interstil, Housdoctor, Pappelina, Blafre, Spegels. We propose a practical and eco-friendly Swedish lifestyle. I worked on illustrations for promotion posters, flyer design, online store's screen and directed product photography. I also planned and directed the “Nordic Movie Night” event, which regularly screens Scandinavian independent films, and the Garage Sale of Scanform products, so that people can experience Scandinavian culture, which is still unfamiliar in Korea.`,
    headline:
      'Skanform is a select shop that offers various lifestyle products with a Nordic sensibility.',
    img: SKAN01,
    year: '2015',
    location: 'Seoul, Korea',
    tags: [
      'Corporate Identity Design',
      'Illustration',
      'Photo direction',
      'Flyer Design',
    ],
    referenceWebsite: 'https://www.skanform.com',
    gallery: [
      { src: SKAN01, id: '3-SKAN-gallery-1', ...commonImgProps },
      { src: SKAN02, id: '3-SKAN-gallery-2', ...commonImgProps },
      { src: SKAN03, id: '3-SKAN-gallery-3', ...commonImgProps },
    ],
  },
  {
    id: '4-TASKBIBLIOTEK',
    client: 'TÄSKBIBLIOTEK - Stationery&Book',
    description: `As a premium stationery select shop developed by Bookbinders Design Korea, Täskbibliotek is inspired by Scandinavian design. We handle high-end stationery that adds value to consumers’ lives. The products of Täskbibliotek, which increase in value over time regardless of trends & time allow us to feel analog sensibility in the digitized space on the desk. And as a comfortable and hideout-like bookstore with a Nordic sensibility, introduced by Bookbinders Design Korea, and located on Garosugil in Seoul. You can find professional book curation focused on art, design, travel and living and lifestyle. Through systematic brainstorming of team members, not only the logo of Täskbibliotek, but also packaging paper, stickers, ribbons, goods for VIP customers, membership cards, online store image layout, illustration, space display, etc. Directed the tone & color of the brand and also material and concept.`,
    headline:
      'Täskbibliotek is the selected stationery shop for adults. This place is where to share memories and tastes of stationery used since childhood.',
    img: TASK01,
    year: '2016',
    location: 'Seoul, Korea',
    tags: ['CI / BI design', 'Illustration', 'Package design', 'Flyer Design'],
    referenceWebsite: 'https://taskofficina.com',
    gallery: [
      { src: TASK01, id: '4-TASKBIBLIOTEK-gallery-1', ...commonImgProps },
      { src: TASK02, id: '4-TASKBIBLIOTEK-gallery-2', ...commonImgProps },
      { src: TASK03, id: '4-TASKBIBLIOTEK-gallery-3', ...commonImgProps },
      { src: TASK04, id: '4-TASKBIBLIOTEK-gallery-4', ...commonImgProps },
    ],
  },
  {
    id: '5-WINE-COFFEE-HOUSE',
    client: ' WINE & COFFEE HOUSE - Wine and Coffee Shop',
    description:
      'At first, the concept of the cafe was inconsistent and unorganized. Although the cafe and wine shop are separate, they are actually one and the same company. For that reason, I thought about making a logo that felt the same even though it was a different industry. After long consideration, I selected a coffee bean sac and wine barrel that preserves coffee beans and alcohol as the main logo, and created the logo by hand-drawing to feel the long history in line with the image of the company with a history of about 70 years. Both the coffee shop and wine shop logos connote the meaning of "to contain". Based on the cafe\'s menu board, takeaway package, goods product (bamboo eco cup), tableware, linen bag of the wine shop, and also the overall branding colour of the cafe, it plays a role in giving a sense of unity to the atmosphere of the former cafe, which was crowded.',
    headline:
      'Wine and Coffee House is a coffee-making and alcoholic beverage company founded in Berlin for three generations.',
    img: wineandcoffee1,
    year: '2018-2022',
    location: 'Berlin, Germany',
    tags: [
      'CI / BI design',
      'Private Brand Products',
      'Package design',
      'Photo direction',
    ],
    referenceWebsite: undefined,
    gallery: [
      {
        src: wineandcoffee1,
        id: '5-WINE-COFFEE-HOUSE-gallery-1',
        ...commonImgProps,
      },
      {
        src: wineandcoffee2,
        id: '5-WINE-COFFEE-HOUSE-gallery-2',
        ...commonImgProps,
      },
      {
        src: wineandcoffee3,
        id: '5-WINE-COFFEE-HOUSE-gallery-3',
        ...commonImgProps,
      },
      {
        src: wineandcoffee4,
        id: '5-WINE-COFFEE-HOUSE-gallery-4',
        ...commonImgProps,
      },
    ],
  },
];
