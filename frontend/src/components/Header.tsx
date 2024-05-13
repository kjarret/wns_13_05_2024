import Link from "next/link";

export default function Header() {
  return (
    <header className="p-6 flex-col bg-blue-600 text-white flex items-center justify-center">
      <h1 className="decoration-pink-500  front-bold text-xl">
        Checkpoint : frontend
      </h1>
      <Link href="/">Countries</Link>
    </header>
  );
}
