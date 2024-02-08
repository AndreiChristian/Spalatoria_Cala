const logos = [
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "logo 18" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "logo 18" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "logo 18" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "logo 18" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "logo 18" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "logo 18" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "logo 18" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "logo 18" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "logo 18" },
  { src: "https://cdni.itgalaxy.ro/images/products/img_202207200517/514789/normal/masina-de-spalat-rufe-albalux-axw1060-capacitate-6kg-clasa-e-1000rpm-alb-1290498.jpeg", alt: "logo 18" },
];

export default function PartnerLogos() {
  return (
    <section aria-labelledby="logocloud-two">
      <div className="items-center px-8 py-12 mx-auto 2xl:max-w-7xl lg:px-16 md:px-12 xl:px-36 lg:py-24 w-xl">
        <div className="lg:items-center lg:gap-8 lg:grid lg:grid-cols-2">
          <div>
            <div className="max-w-xl lg:p-10">
              <div>
                <p className="text-4xl text-black">
                  I am a heading to describe your customers journey
                </p>
                <p className="max-w-xl mt-4 text-lg tracking-tight text-gray-600">
                  Whether you're a beginner or an experienced programmer, our SaaS product offers the tools you need to be successful.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-0.5 lg:grid-cols-3 lg:mt-0 md:grid-cols-2 mt-8">
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center col-span-1 px-8 py-8 bg-gray-5">
                <img className="max-h-12" src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

