import firstImg from 'src/assets/work.jpg';
import secondImg from 'src/assets/work2.jpg';
import thirdImg from 'src/assets/work3.jpg';
import fourthImg from 'src/assets/work4.jpg';
import fifthImg from 'src/assets/work5.jpg';

const commonImgProps = {
  width: '100%',
  height: '100%',
  alt: 'Portfolio image',
  dataSwiperZoom: '3',
  className: 'swiper-zoom-container',
};

export const imageCollection = [
  {
    src: firstImg,
    id: 'presentation_1',
    isZoomable: true,
    ...commonImgProps,
  },
  {
    src: secondImg,
    id: 'presentation_2',
    isZoomable: true,
    ...commonImgProps,
  },
  {
    src: thirdImg,
    id: 'presentation_3',
    isZoomable: true,
    ...commonImgProps,
  },
  {
    src: fourthImg,
    id: 'presentation_4',
    isZoomable: true,
    ...commonImgProps,
  },
  {
    src: fifthImg,
    id: 'presentation_5',
    isZoomable: true,
    ...commonImgProps,
  },
];
