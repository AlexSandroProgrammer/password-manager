//* creamos el type element para validarlo
type TypeElement = "" | "password" | "folder";
//* creamos los types para validar las props del headerMain

export type DataHeaderMainItemProps = {
  icon: React.ComponentType<{ className?: string }>;
  typeElement: TypeElement;
  text: string;
};
