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
          <ItemCarousel cantidad={200} tipo={"Likes"} precio={1500} />
        </CarouselItem>
        <CarouselItem key={2} className="sm:basis-1/3 md:basis-1/4 py-4">
          <ItemCarousel cantidad={300} tipo={"Likes"} precio={2000} />
        </CarouselItem>
        <CarouselItem key={2} className="sm:basis-1/3 md:basis-1/4 py-4">
          <ItemCarousel cantidad={500} tipo={"Likes"} precio={3000} />
        </CarouselItem>
        <CarouselItem key={2} className="sm:basis-1/3 md:basis-1/4 py-4">
          <ItemCarousel cantidad={1000} tipo={"Likes"} precio={4000} />
        </CarouselItem>
        <CarouselItem key={2} className="sm:basis-1/3 md:basis-1/4 py-4">
          <ItemCarousel cantidad={2000} tipo={"Likes"} precio={5000} />
        </CarouselItem>
        <CarouselItem key={2} className="sm:basis-1/3 md:basis-1/4 py-4">
          <ItemCarousel cantidad={3000} tipo={"Likes"} precio={6000} />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
