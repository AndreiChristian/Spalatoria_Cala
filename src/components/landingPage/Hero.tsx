const features = [
  {
    title: "Developer experience",
    description: "Plus, our platform is constantly evolving to meet the changing needs of the tech industry, ensuring you'll always be ahead.",
  },
  {
    title: "Designers go-to app",
    description: "Plus, our platform is constantly evolving to meet the changing needs of the tech industry, ensuring you'll always be ahead.",
  },
  {
    title: "Easy onboarding",
    description: "Plus, our platform is constantly evolving to meet the changing needs of the tech industry, ensuring you'll always be ahead.",
  },
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
                    I am a short heading
                  </p>
                  <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                    Use this paragraph to share information about your company or products. Make it engaging and interesting, and showcase your brand's personality. Thanks for visiting our website!
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                  <a href="#_" className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
                    Button
                  </a>
                  <a href="#_" className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600">
                    Learn more &nbsp; →
                  </a>
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
                <div key={index}>
                  <div>
                    <p className="mt-5 text-lg font-medium leading-6 text-black">
                      {feature.title}
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
