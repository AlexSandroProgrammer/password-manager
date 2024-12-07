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
import { useState } from "react";

export function HeaderMain() {
  // * creamos un estado para manejar el tipo de elemento
  const [typeElement, setTypeElement] = useState<"password" | "folder" | "">();
  //* creamos un estado para manejar la abiertura del dialogo
  const [openDialog, setOpenDialog] = useState(false);
  //* creamos un estado para manejar la abiertura del menu dropdown
  const [openDropdown, setOpenDropdown] = useState(false);

  //* creamos los metodos para abrir y cerrar los dialogos y el menu dropdown
  const closeDialogAndDropdown = () => {
    setOpenDialog(false);
    setOpenDropdown(false);
  };

  console.log(typeElement);

  //* creamos el componente para la accion de crear un nuevo elemento
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl md:text-3xl font-semibold">
        Todas las cajas fuertes
      </h1>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
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
                      onClick={() => setTypeElement(typeElement)}
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
        <DialogContent className="sm:max-w-[825px]">
          <DialogHeader>
            <DialogTitle>Nuevo Elemento</DialogTitle>
          </DialogHeader>
          {typeElement === "password" && <p>Form Password</p>}
          {typeElement === "folder" && <p>Form Folder</p>}
        </DialogContent>
      </Dialog>
    </div>
  );
}
