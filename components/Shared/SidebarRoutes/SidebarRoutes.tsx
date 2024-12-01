"use client";

//* importacion del compoente acordeon

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

//* importacion de iconos para el menu
import { BarChart, DoorClosed, House, RectangleEllipsis } from "lucide-react";

//* importacion de link para navegar entre rutas
import Link from "next/link";
import { SingleItem } from "../SingleItem";
import {
  dataSidebarConfiguration,
  dataSidebarElements,
} from "./SidebarRoutes.data";

export function SidebarRoutes() {
  return (
    <div>
      {/* llamamos el componente reactivo para pasarle todas las props */}
      <SingleItem href="/" icon={House} label="HomePage" />
      {/* //* importamos los elementos del sidebar */}

      {/* menu para items de configuracion  */}
      {dataSidebarElements.map(({ title, icon: Icon, children }) => (
        <Accordion
          type="single"
          collapsible
          key={title}
          className="w-full px-2"
        >
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger>
              <div className="flex gap-2 items-center">
                <div className="bg-blue-100/20 p-2 rounded-md">
                  <Icon size={20} />
                </div>
                {title}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {children.map(({ item, href, icon: Icon }) => (
                <div key={item}>
                  <Link
                    href={href}
                    className="px-6 py-2 flex gap-2 items-center hover:bg-blue-100/20 duration-300 transition-all rounded-md"
                  >
                    <Icon size={20} />
                    {item}
                  </Link>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}

      <SingleItem
        href="/generator"
        label="Generator"
        icon={RectangleEllipsis}
      />

      {/* menu para items de los elementos del menu principal  */}

      {dataSidebarConfiguration.map(({ title, icon: Icon, children }) => (
        <Accordion
          type="single"
          collapsible
          key={title}
          className="w-full px-2"
        >
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger>
              <div className="flex gap-2 items-center">
                <div className="bg-blue-100/20 p-2 rounded-md">
                  <Icon size={20} />
                </div>
                {title}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {children.map(({ item, href, icon: Icon, premium }) => (
                <div
                  key={item}
                  className="flex items-center justify-between mt-2 hover:bg-blue-100/20 duration-300 transition-all rounded-md pr-1"
                >
                  <Link
                    href={href}
                    className="px-6 py-2 flex gap-2 items-center"
                  >
                    <Icon size={20} />
                    {item}
                  </Link>
                  {premium && (
                    <div className="flex gap-2 text-xs px-2 py-1 bg-blue-400 rounded-md">
                      Premium
                    </div>
                  )}
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}

      <SingleItem href="/analytic" label="Analitics" icon={BarChart} />
      <SingleItem
        onClick={() => console.log("Close session")}
        href="#"
        label="Close Session"
        icon={DoorClosed}
      />
    </div>
  );
}
