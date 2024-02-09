import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileLink({ href, text, closeDrawer }: { href: string, text: string, closeDrawer: () => void }) {

  const pathName = usePathname()

  return <Link
    onClick={closeDrawer}
    className={`
      ${pathName === href ? "bg-black text-white rounded-md hover:text-white" : ""}
      py-2 text-sm text-gray-500 hover:text-black px-2
      `}
    href={href}>{text}</Link>
}
