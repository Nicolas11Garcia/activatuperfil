import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ItemCarousel } from "./ItemCarousel";

export function CarouselSeguidoresInstagram() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        <CarouselItem key={1} className="sm:basis-1/3 md:basis-1/4 py-4">
          <ItemCarousel cantidad={500} tipo={"Seguidores"} precio={2990} />
        </CarouselItem>
        <CarouselItem key={2} className="sm:basis-1/3 md:basis-1/4 py-4">
          <ItemCarousel cantidad={1000} tipo={"Seguidores"} precio={4990} />
        </CarouselItem>
        <CarouselItem key={3} className="sm:basis-1/3 md:basis-1/4 py-4">
          <ItemCarousel cantidad={2000} tipo={"Seguidores"} precio={7990} />
        </CarouselItem>
        <CarouselItem key={4} className="sm:basis-1/3 md:basis-1/4 py-4">
          <ItemCarousel cantidad={3000} tipo={"Seguidores"} precio={10990} />
        </CarouselItem>
        <CarouselItem key={5} className="sm:basis-1/3 md:basis-1/4 py-4">
          <ItemCarousel cantidad={4000} tipo={"Seguidores"} precio={13990} />
        </CarouselItem>
        <CarouselItem key={6} className="sm:basis-1/3 md:basis-1/4 py-4">
          <ItemCarousel cantidad={5000} tipo={"Seguidores"} precio={16990} />
        </CarouselItem>
        <CarouselItem key={7} className="sm:basis-1/3 md:basis-1/4 py-4">
          <ItemCarousel cantidad={10000} tipo={"Seguidores"} precio={24990} />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
