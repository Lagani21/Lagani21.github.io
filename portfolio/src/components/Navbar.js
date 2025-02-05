"user client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-navy bg-opacity-90 backdrop-blur-md p-4 text-white flex justify-center space-x-6 z-50">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/education" className="hover:underline">Education</Link>
      <Link href="/experience" className="hover:underline">Experience</Link>
    </nav>
  );
}
