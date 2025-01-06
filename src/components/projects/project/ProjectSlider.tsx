import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';

import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  Zoom,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { imageCollection } from './imageCollection';

interface SliderCardProps {
  className?: string;
}

export const ProjectSlider: React.FC<SliderCardProps> = ({ className }) => {
  console.log(imageCollection[2].src);
  return (
    <div className={className}>
      <div data-testid="slider-card">
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
          {imageCollection.map(
            ({ isZoomable, id, dataSwiperZoom, src, width, height, alt }) => (
              <SwiperSlide
                id={id}
                key={id}
                zoom={isZoomable}
                className="bg-white text-white"
              >
                {/* <div
                  className="swiper-zoom-container hover:cursor-zoom-in"
                  data-swiper-zoom={dataSwiperZoom || '3'}
                  data-testid="swiper-image"
                > */}
                <img
                  src={src}
                  width="100%"
                  height="100%"
                  alt={alt || 'Image not found!'}
                />
                {/* </div> */}
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};
