import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full p-4 flex justify-center space-x-6 bg-gray-900 text-white fixed top-0">
      <Link href="/" className="hover:text-blue-400">Home</Link>
      <Link href="/about" className="hover:text-blue-400">About</Link>
    </nav>
  );
}
