"use client";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// ✅ Client data (dynamic)
const clients = [
  { id: 1, name: "Alishan Steels Pvt Ltd", logo: "/clients/alishan.jpeg" },
  { id: 2, name: "Carbon Resources", logo: "/clients/carbon.jpeg" },
  { id: 3, name: "EASTERN RAILWAY", logo: "/clients/eastern.jpeg" },
  { id: 4, name: "Karthik Alloys Ltd", logo: "/clients/karthikalloy.jpeg" },
  { id: 5, name: "Larsen & Toubro (L&T)", logo: "/clients/L&T.jpeg" },
  { id: 6, name: "NBCC India", logo: "/clients/nbcc.jpeg" },
  { id: 7, name: "Neo Metaliks Ltd", logo: "/clients/neo.jpeg" },
  { id: 8, name: "Patil Rail Infrastructure Pvt Ltd", logo: "/clients/patil.jpeg" },
  { id: 9, name: "PCBL", logo: "/clients/pcbl.jpeg" },
  { id: 10, name: "Reliance Infrastructure", logo: "/clients/reliance.jpeg" },
  { id: 11, name: "Steel Authority of India Limited", logo: "/clients/sail.jpeg" },
  { id: 12, name: "Sharp Ferro Alloys Ltd", logo: "/clients/sharpferroalloy.jpeg" },
  { id: 13, name: "Shyam Steel", logo: "/clients/shyam-steel.jpeg" },
  { id: 14, name: "Shyam Ferro Alloys Ltd", logo: "/clients/shyamferro.jpeg" },
  { id: 15, name: "Surya Alloy Durgapur", logo: "/clients/suryaalloy.jpeg" },
  { id: 16, name: "Venkatesh", logo: "/clients/venkatesh.jpeg" },
  { id: 17, name: "Venkateshwara Engineering Works", logo: "/clients/Venkateshwara.jpeg" },
  { id: 18, name: "THE WEST BENGAL POWER DEVELOPMENT CORPORATION LIMITED", logo: "/clients/wbpdcl.jpeg" },
  { id: 19, name: "OM BESCO RAIL PRODUCTS LTD", logo: "/clients/ombesco.jpeg" },
  { id: 20, name: "Maithon Power Limited", logo: "/clients/maithon.jpeg" },
  { id: 21, name: "RAMKY INFRASTRUCTURE", logo: "/clients/ramk.jpeg" },
  { id: 22, name: "ORISSA STEEL & POWER LTD", logo: "/clients/orissa.jpeg" },
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
              className="w-25 h-25 object-center object-fill mb-3"
            />
            <p className="font-medium text-white text-2xl text-center uppercase">
              {client.name}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
