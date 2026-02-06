"use client";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// ✅ Client data (dynamic)
const clients = [
  { id: 1, name: "Shyam Steel", logo: "/clients/shyam-steel.jpeg" },
  { id: 2, name: "kartik-alloys", logo: "/clients/kartik-alloys.jpeg" },
  { id: 3, name: "sharp-ferro", logo: "/clients/sharp-ferro.jpeg" },
  { id: 4, name: "patil", logo: "/clients/patil.jpeg" },
  { id: 5, name: "neo", logo: "/clients/neo.jpeg" },
  { id: 6, name: "carbon resources", logo: "/clients/crpl.jpeg" },
  { id: 7, name: "venkatesh", logo: "/clients/venkatesh.jpeg" },
  { id: 8, name: "aisha steel", logo: "/clients/aisha-steel.jpeg" },
];

export default function ClientSlides() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={4}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      navigation
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
    >
      {clients.map((client) => (
        <SwiperSlide key={client.id}>
          <div className="flex flex-col items-center justify-center p-4  transition">
            <img
              src={client.logo}
              alt={client.name}
              className="w-[100px] object-contain mb-3"
            />
            <p className="font-medium text-white text-2xl text-center">
              {client.name}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
