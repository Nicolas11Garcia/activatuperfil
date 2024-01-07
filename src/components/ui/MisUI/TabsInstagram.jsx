import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CarouselSeguidoresInstagram } from "./CarouselSeguidoresInstagram";
import { CarouselLikesInstagram } from "./CarouselLikesInstagram";

export const TabsInstagram = () => {
  return (
    <Tabs defaultValue="seguidores" >
      <TabsList className="py-8 px-2 sm:py-10 sm:px-5 gap-2 sm:gap-10 absolute top-[-35px]
       rounded-xl sm:top-[-70px]">
        <TabsTrigger className="px-2 py-4 sm:px-10 sm:py-4 rounded-xl" value="seguidores">
          Seguidores
        </TabsTrigger>
        <TabsTrigger className="px-2 py-4 sm:px-10 sm:py-4 rounded-xl" value="likes">
          Likes
        </TabsTrigger>
      </TabsList>
      <TabsContent value="seguidores" className="pt-16 px-16">
        <CarouselSeguidoresInstagram />
      </TabsContent>
      <TabsContent value="likes" className="pt-16 px-16">
        <CarouselLikesInstagram />
      </TabsContent>
    </Tabs>
  );
};
