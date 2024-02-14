import Link from "next/link";
import HeroFeatures from "./HeroFeatures";

const features = [
  { title: "Cicluri de Spălare Eco-friendly", description: "Consum optimizat de apă și energie pentru o curățenie verde." },
  { title: "Opțiuni de Curățare Personalizabile", description: "Personalizează-ți spălarea cu setări pentru țesături delicate până la pete rezistente." },
  { title: "Manipulare Sigură a Articolelor", description: "Sistem avansat de etichetare și urmărire pentru a asigura că fiecare șosetă își găsește proprietarul." },
];

const Hero = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-5 lg:py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="relative flex-col items-start m-auto align-middle">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
            <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
              <div className="max-w-xl text-center lg:text-left">
                <div>
                  <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                    Spalatoria Cala
                  </p>
                  <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                    Spalatorie industriala de materiale textile, echipata cu technologie de ultima ora
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                  <Link href="/despre_noi" className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
                    Contact
                  </Link>
                  <Link href="/preturi" className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600">
                    Preturi &nbsp; →
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
              <img className="object-cover object-center w-full mx-auto bg-gray-300 border lg:ml-auto" alt="hero" src="https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg" />
            </div>
          </div>
        </div>
        <div>
          <div className="pt-12 mx-auto lg:max-w-7xl">
            <dl className="grid grid-cols-1 gap-6 space-y-0 text-center lg:gap-24 lg:grid-cols-3 lg:text-left">
              {features.map((feature, index) => (
                <HeroFeatures key={index} feature={feature} />
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
