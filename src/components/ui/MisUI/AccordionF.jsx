import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AccordionF = () => {
  return (
    <Accordion type="single" collapsible>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-[24px]">
        <div>
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline text-negro">
              ¿Cómo se que es confiable?
            </AccordionTrigger>
            <AccordionContent className="text-parrafo">
              Puedes ver nuestras historias destacadas en
              @activatuperfil_oficial ya que tenemos más de 20 Referencias.
            </AccordionContent>
          </AccordionItem>
        </div>
        <div>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline text-negro">
              ¿Son seguidores reales?
            </AccordionTrigger>
            <AccordionContent className="text-parrafo">
              No, los servicios que ofrecemos vienen de parte de bots
              internacionales, los cuales no interactúan con tu contenido.
            </AccordionContent>
          </AccordionItem>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-[24px]">
        <div>
          <AccordionItem value="item-3">
            <AccordionTrigger className=" hover:no-underline text-negro">
              ¿Me pueden cerrar la cuenta?
            </AccordionTrigger>
            <AccordionContent className="text-parrafo">
              No, nunca pondremos en peligro tu cuenta.
            </AccordionContent>
          </AccordionItem>
        </div>
        <div>
          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:no-underline text-negro">
              ¿Qué pasa si bajan mis seguidores?
            </AccordionTrigger>
            <AccordionContent className="text-parrafo">
              Ofrecemos reposición gratuita de por vida porque entendemos que
              cuando pagas por un producto, esperas mantenerlo siempre. Además,
              al realizar una compra, te proporcionamos un excedente de
              seguidores y likes para garantizar que, en caso de alguna
              disminución, afecte a la cantidad adicional y no a los que
              originalmente adquiriste. Por ejemplo, si compras 1000 seguidores,
              te entregaremos 1444, asegurándonos de que, en caso de alguna
              reducción, sea de los 444 adicionales y no de los 1000 que
              compraste inicialmente.
            </AccordionContent>
          </AccordionItem>
        </div>
      </div>
    </Accordion>
  );
};
