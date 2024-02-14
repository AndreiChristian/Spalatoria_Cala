import Link from "next/link";

const links: { href: string, text: string }[] = [
  {
    text: 'Acasa',
    href: "/"
  },
  {
    text: "Servicii",
    href: "/servicii"
  },
  {
    href: "/galerie",
    text: "Galerie"
  },
  {
    href: "/preturi",
    text: "Preturi"
  },
  {
    href: "/contact",
    text: "Contact"
  },
  {
    href: "/faq",
    text: "Intrebari frecvente"
  },
]

function FooterLink({ href, text }: { href: string, text: string }) {
  return (
    <div className="px-5 py-2">
      <Link href={href} className="text-md text-black hover:underline">
        {text}
      </Link>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="px-4" >
      <div className="mx-auto py-12 mb-4 rounded-xl bg-gray-100 overflow-hidden box-border max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
          {links.map((link, index) => <FooterLink key={index} href={link.href} text={link.text} />)}
        </nav>
        <p className="mt-8 text-center text-md text-black">
          Copyright © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
