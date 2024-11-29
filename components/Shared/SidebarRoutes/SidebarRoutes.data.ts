//* llamamos todos los iconos que vamos a retonar en la data del menu
import {
  CreditCard,
  Earth,
  Landmark,
  LayoutList,
  Lock,
  Settings,
  Star,
  UserPen,
} from "lucide-react";

//* creamos el arreglo del menu el cual contiene todos los items del menu
export const dataSidebarElements = [
  {
    //* nombre del submenu
    title: "Elements",
    icon: LayoutList,
    //* items o hijos del submenu
    children: [
      {
        item: "Favorites",
        href: "/favorites",
        icon: Star,
      },
      {
        item: "Logins",
        href: "/logins-elements",
        icon: Earth,
      },
      {
        item: "Credit Card",
        href: "/credit-card",
        icon: CreditCard,
      },
    ],
  },
];

//* creamos otro arreglo el cual tendra el menu de configuracion
export const dataSidebarConfiguracion = [
  {
    title: "Configuration",
    icon: Settings,
    children: [
      {
        item: "Profile",
        href: "/profile",
        icon: UserPen,
        premium: false,
      },
      {
        item: "Security",
        href: "#",
        icon: Lock,
        premium: true,
      },
      {
        item: "Suscription",
        href: "#",
        icon: Landmark,
        premium: true,
      },
    ],
  },
];
