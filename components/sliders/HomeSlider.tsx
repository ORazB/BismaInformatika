"use client";

// Next.js
import Link from "next/link";
import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Styles
import "boxicons/css/boxicons.min.css";

export default function HomeSlider() {
  const slides = [
    { destination: "", people: "1M+", title: "Generative AI" },
    { destination: "", people: "2M+", title: "IT Certifications" },
    { destination: "", people: "4M+", title: "Data Science" },

    { destination: "", people: "1M+", title: "Generative AI" },
    { destination: "", people: "2M+", title: "IT Certifications" },
    { destination: "", people: "4M+", title: "Data Science" },
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-12 group overflow-x-hidden overflow-y-hidden">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        loop={false}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
          hideOnClick: false,
        }}
        breakpoints={{
          // Mobile (default)
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
          // Tablet
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 24,
          },
          // Desktop
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30,
          },
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            {/* Mobile & Tablet Layout - Text Below Image */}
            <div className="lg:hidden flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl shadow-xl">
                <Image
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={`/landing-page/sliders/slide-${i + 1}.png`}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
              </div>

              <Link href={slide.destination}>
                <div className="bg-background p-3 sm:p-4 rounded-b-2xl shadow-xl border-t">
                  <div className="flex items-center p-1 border-text-gray-text border w-max rounded-lg gap-1 mb-3 text-gray-text">
                    <i className="bx bx-group text-lg sm:text-xl"></i>
                    <h3 className="text-xs sm:text-sm font-semibold">
                      {slide.people}
                    </h3>
                  </div>
                  <p className="text-text tracking-wide text-base sm:text-lg">
                    {slide.title}
                  </p>

                  {/* Slide Link */}
                  <div className="w-full flex justify-end mt-2">
                    <button className="text-primary text-xl sm:text-2xl">
                      <i className="bx bx-caret-right"></i>
                    </button>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Layout - Text Overlay */}
            <div className="hidden lg:block relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl">
              <Image
                sizes="33vw"
                src={`/landing-page/sliders/slide-${i + 1}.png`}
                alt={slide.title}
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute transition-opacity w-full rounded-1xl h-3/6 bottom-0 flex flex-col justify-end p-4">
                <Link href={slide.destination}>
                  <div className="bg-background p-4 rounded-xl">
                    <div className="flex items-center p-1 border-text-gray-text border w-max rounded-lg gap-1 mb-4 text-gray-text">
                      <i className="bx bx-group text-xl"></i>
                      <h3 className="text-sm font-semibold">{slide.people}</h3>
                    </div>
                    <p className="text-text tracking-wide text-lg">
                      {slide.title}
                    </p>

                    {/* Slide Link */}
                    <div className="w-full flex justify-end">
                      <button className="text-primary text-2xl">
                        <i className="bx bx-caret-right"></i>
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <button className="custom-swiper-button-prev cursor-pointer absolute right-[75%] md:right-[57%] sm:right-[55%] -bottom-6 -translate-y-1/2 z-50 bg-white/80 rounded-full p-1 shadow-md shadow-gray-300 hover:bg-gray-200/80 transition-all">
        <i className="bx bx-chevron-left w-7 h-7 sm:w-8 sm:h-8 text-2xl sm:text-3xl align-middle text-primary"></i>
      </button>

      <button className="custom-swiper-button-next cursor-pointer absolute left-[75%] md:left-[57%] sm:left-[55%] -bottom-6 -translate-y-1/2 z-50 bg-white/80 rounded-full p-1 shadow-md shadow-gray-300 hover:bg-gray-200/80 transition-all">
        <i className="bx bx-chevron-right w-7 h-7 sm:w-8 sm:h-8 text-2xl sm:text-3xl align-middle text-primary"></i>
      </button>

      {/* Custom Pagination */}
      <div className="swiper-pagination -bottom-6 flex justify-center space-x-2"></div>
    </div>
  );
}
