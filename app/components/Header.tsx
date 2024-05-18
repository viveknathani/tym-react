import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 bg-[--secondary-background-color] flex justify-between items-center p-1.5 font-bold">
      <div id="left" className="text-xl">
        <Link href="/">
        <h3>teachyourselfmath</h3>
        </Link>
      </div>
      <div id="right" className="text-sm">
        <Link href="/about">about</Link>
      </div>
    </header>
  );
}