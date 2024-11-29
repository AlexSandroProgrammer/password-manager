import Link from "next/link";

//* creamos el componente del logo
export function Logo() {
  return (
    <Link href="/">
      <h1 className="text-xl font-bold">GeneratePassword</h1>
    </Link>
  );
}
