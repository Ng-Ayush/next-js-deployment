import Image from "next/image";
import About from "./about/page";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to My Next.js App</h1>
      <nav>
        <ul>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </main>
      );
}
