import { LucideIcon } from "lucide-react";

//* Definimos la interfaz de SingleItemProps con los tipos de datos que espera recibir
export type SingleItemProps = {
  label: string;
  icon: LucideIcon;
  href: string;
  onClick?: () => void;
};
