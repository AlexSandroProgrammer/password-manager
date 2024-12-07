import { Folder, KeyRound } from "lucide-react";
import { DataHeaderMainItemProps } from "./HeaderMain.types";

//* data que tendra el dropdown de HeaderMain
export const dataHeaderMain: DataHeaderMainItemProps[] = [
  {
    icon: KeyRound,
    text: "Elemento",
    typeElement: "password",
  },
  {
    icon: Folder,
    text: "Carpeta",
    typeElement: "folder",
  },
];
