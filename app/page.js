import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center mt-10 gap-4 text-xl">
      <Link href="/login">Login</Link>
      <Link href="/dashboard">Dashboard</Link>
      <input type="text" className="p-2" />
    </main>
  );
}
