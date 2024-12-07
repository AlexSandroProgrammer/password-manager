"use client";

import { Button } from "@/components/ui/button";
//* IMPORTAMOS TODOS LOS COMPONENTS DE DIALOG PARA IMPLEMENTARLOS
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

//* IMPORTAMOS LOS COMPONENTES PARA EL MENU

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

//* importacion de iconos
import { ChevronDown, Icon } from "lucide-react";
import { dataHeaderMain } from "./HeaderMain.data";

export function HeaderMain() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl md:text-3xl font-semibold">
        Todas las cajas fuertes
      </h1>
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              Nueva <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-0">
            <DropdownMenuLabel>
              <DialogTrigger asChild>
                <div className="flex flex-col">
                  {/* importamos la data del header */}
                  {dataHeaderMain.map(({ icon: Icon, typeElement, text }) => (
                    <Button
                      key={typeElement}
                      className="justify-start"
                      variant="ghost"
                      onClick={() => console.log("Cambio de tipo boton")}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {text}
                    </Button>
                  ))}
                </div>
              </DialogTrigger>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </Dialog>
    </div>
  );
}
