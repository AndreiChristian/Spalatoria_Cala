
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black" >
      <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
          <div className="px-5 py-2">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Servicii
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Preturi
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Despre noi
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Contact
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="/faq" className="text-sm text-gray-500 hover:text-blue-600">
              Intrebari frecvente
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Parteneri
            </a>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <span className="inline-flex justify-center w-full gap-3 m-auto md:justify-start md:w-auto">
            <a href="#" className="w-6 h-6 transition fill-current text-black hover:text-blue-500" aria-label="Github">
            </a>
            <a href="#" className="w-6 h-6 transition fill-current text-black hover:text-blue-500" aria-label="Twitter">
            </a>
            <a href="#" className="w-6 h-6 transition fill-current text-black hover:text-blue-500" aria-label="Instagram">
            </a>
            <a href="#" className="w-6 h-6 transition fill-current text-black hover:text-blue-500" aria-label="Linkedin">
            </a>
          </span>
        </div>
        <p className="mt-8 text-center text-sm text-gray-500">
          Copyright © 2020 - 2021
          <a href="https://unwrapped.design" className="mx-2 text-blue-500 hover:text-gray-500" rel="noopener noreferrer">
            @unwrappedHQ
          </a>
          .Since 2020
        </p>
      </div>
    </footer>
  );
};

export default Footer;
