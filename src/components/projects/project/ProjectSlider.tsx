import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';

import { clsx } from 'clsx';
import { ProjectSwiperImage } from 'src/interfaces';
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  Zoom,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface SliderCardProps {
  imageCollection: ProjectSwiperImage[];
  className?: string;
}

export const ProjectSlider: React.FC<SliderCardProps> = ({
  imageCollection,
  className,
}) => {
  return (
    <div
      className={clsx(className, 'h-full w-[300px]')}
      data-testid="slider-card"
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Zoom, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        zoom
        navigation
        centeredSlides
        effect="cube"
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: true,
        }}
        loop={false}
        keyboard={{
          enabled: true,
        }}
      >
        {imageCollection.map((image: ProjectSwiperImage) => (
          <SwiperSlide
            id={image.id}
            key={image.id}
            zoom={image.isZoomable}
            className="bg-white text-white"
          >
            {/* <div
                  className="swiper-zoom-container hover:cursor-zoom-in"
                  data-swiper-zoom={dataSwiperZoom || '3'}
                  data-testid="swiper-image"
                > */}
            <img
              src={image.src}
              width="100%"
              height="100%"
              alt={image.alt || 'Image not found!'}
            />
            {/* </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
