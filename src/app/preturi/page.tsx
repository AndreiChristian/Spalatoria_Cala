import Heading from '@/components/Heading';
import React from 'react';

// Define pricing options
const pricingOptions = [
  {
    title: "Spalare articole textile",
    description: "Preluare, spalare, calcare si livrare articole textile.",
    price: "5 lei plus TVA",
    pricePeriod: "/kg",
    backgroundColor: "bg-gray-100", // Background color for the card
    textColor: "text-black", // Text color for the card
  },
  {
    title: "O cerere speciala sau o cantitate mare",
    description: "Preturi negociabile",
    backgroundColor: "bg-black",
    textColor: "text-white",
  },
];

export default function PricingSection() {
  return (
    <section aria-labelledby="pricing-two" id="pricing-two" className="">
      <Heading
        title='Preturi'
        paragraph='Pentru mai multe detalii, va rugam sa ne contactati'
      />
      <div className="relative items-center w-full px-8 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="mx-auto space-y-4 lg:grid lg:grid-cols-3 lg:gap-5 lg:space-y-0">
          {pricingOptions.map((option, index) => (
            <div key={index} className={`flex flex-col h-full rounded-3xl ${option.backgroundColor}`}>
              <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                  <div>
                    <h2 className={`text-lg font-medium tracking-tighter ${option.textColor} lg:text-3xl`}>
                      {option.title}
                    </h2>
                    <p className={`mt-2 text-sm ${option.textColor === 'text-black' ? 'text-gray-500' : 'text-gray-100'}`}>
                      {option.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <p>
                      <span className={`text-5xl font-light tracking-tight ${option.textColor}`}>
                        {option.price}
                      </span>
                      <span className={`text-base font-medium ${option.textColor}`}>
                        {option.pricePeriod}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

