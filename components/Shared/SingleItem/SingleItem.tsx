//* importamos iconos de lucide react
import Link from "next/link";

//* importamos el type de SingleItem para especificar las propiedades
import { SingleItemProps } from "./SingleItem.types";

export function SingleItem(props: SingleItemProps) {
  //* hacemos un destructuring de las props
  const { href, label, icon: Icon, onClick } = props;

  return (
    <Link
      href={href}
      className="flex gap-2 items-center p-2 hover:bg-blue-100/20 duration-300 transition-all rounded-md"
      onClick={onClick}
    >
      <div className="bg-blue-100/20 p-2 rounded-md">
        <Icon size={20} />
      </div>
      {label}
    </Link>
  );
}
