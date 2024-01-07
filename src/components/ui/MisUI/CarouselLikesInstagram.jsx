import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ItemCarousel } from "./ItemCarousel";

export function CarouselLikesInstagram() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        <CarouselItem key={1} className="sm:basis-1/3 md:basis-1/4 py-4">
          <ItemCarousel cantidad={500} tipo={"Likes"} precio={1990} />
        </CarouselItem>
        <CarouselItem key={2} className="sm:basis-1/3 md:basis-1/4 py-4">
          <ItemCarousel cantidad={1000} tipo={"Likes"} precio={2990} />
        </CarouselItem>
        <CarouselItem key={2} className="sm:basis-1/3 md:basis-1/4 py-4">
          <ItemCarousel cantidad={2000} tipo={"Likes"} precio={4990} />
        </CarouselItem>
        <CarouselItem key={2} className="sm:basis-1/3 md:basis-1/4 py-4">
          <ItemCarousel cantidad={3000} tipo={"Likes"} precio={6990} />
        </CarouselItem>
        <CarouselItem key={2} className="sm:basis-1/3 md:basis-1/4 py-4">
          <ItemCarousel cantidad={4000} tipo={"Likes"} precio={8990} />
        </CarouselItem>
        <CarouselItem key={2} className="sm:basis-1/3 md:basis-1/4 py-4">
          <ItemCarousel cantidad={5000} tipo={"Likes"} precio={9990} />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
