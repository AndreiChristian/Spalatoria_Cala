"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopLink({ href, text }: { href: string, text: string }) {

  const pathName = usePathname()

  return <Link
    className={`
      ${pathName === href ? " bg-black text-white rounded-md hover:bg-black" : ""}
      p-1 text-lg px-2 py-2 text-md text-gray-500 hover:text-white hover:bg-gray-500 rounded-lg transition-colors duration-300 `}
    href={href}>{text}</Link>
}
