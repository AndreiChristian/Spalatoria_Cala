import Heading from '@/components/Heading';
import Image from 'next/image';
import React from 'react';


const features = [
  { title: "Cicluri de Spălare Eco-friendly", description: "Consum optimizat de apă și energie pentru o curățenie verde." },
  { title: "Opțiuni de Curățare Personalizabile", description: "Personalizează-ți spălarea cu setări pentru țesături delicate până la pete rezistente." },
  { title: "Manipulare Sigură a Articolelor", description: "Sistem avansat de etichetare și urmărire pentru a asigura că fiecare șosetă își găsește proprietarul." },
  { title: "Ridicare și Livrare la Cerere", description: "Programare convenabilă pentru ridicarea și livrarea rufelor." },
  { title: "Expertiză În Îndepărtarea Petelor", description: "Tratament specializat pentru petele cele mai dificile." },
  { title: "Servicii de Spălare în Volum Mare", description: "Manipulare eficientă a volumelor mari pentru afaceri și instituții." },
  { title: "Consultanță Îngrijire Țesături", description: "Sfaturi de expert pentru menținerea calității textilelor tale." },
  { title: "Programare Flexibilă", description: "Oferim programări flexibile pentru a se potrivi nevoilor afacerii tale, asigurându-ne că serviciile noastre sunt disponibile exact când ai nevoie de ele." },
  { title: "Sistem de Feedback", description: "Sistem integrat de feedback pentru a ne asigura că serviciile noastre îndeplinesc constant așteptările clienților și pentru a ne îmbunătăți continuu oferta." },
  { title: "Parteneriate Sustenabile", description: "Colaborăm cu furnizori și parteneri care împărtășesc angajamentul nostru pentru sustenabilitate, asigurându-ne că toate produsele și procesele noastre sunt prietenoase cu mediul." },
];

const FeaturesSection = () => {
  return (
    <section className="">
      <Heading
        title='Excelenta si profesionalism'
        paragraph='
        La spălătoria noastră industrială de textile, ne angajăm să oferim servicii de înaltă calitate pentru toate nevoile dvs. de curățare. Utilizăm tehnologie avansată și procese eficiente pentru a asigura că fiecare articol este tratat cu cea mai mare atenție și profesionalism. Serviciile noastre includ spălarea, uscarea și călcarea textilelor industriale, cum ar fi uniforme, lenjerie de pat și prosoape, garantând îndepărtarea eficientă a petelor și o curățenie impecabilă. Ne mândrim cu promptitudinea livrării și cu capacitatea de a răspunde flexibil la cerințele specifice ale clienților noștri, oferind soluții personalizate pentru fiecare proiect. Obiectivul nostru principal este să vă asigurăm că textilele dvs. sunt întotdeauna în condiții perfecte, contribuind astfel la imaginea și succesul afacerii dvs.
        '
      />
      <div className="relative items-center w-full px-5 pt-10 mx-auto md:px-12 lg:px-16 lg:pt-24 max-w-7xl lg:py-24">
        <div>
          <div className="max-w-xl py-12 mx-auto text-left lg:max-w-7xl">
            <h2 className="sr-only">Features.</h2>
            <div>
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:space-y-0">
                {features.map((feature, index) => (
                  <div key={index}>
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        <Image src="/images/cala.png" alt='cala' width={50} height={50} />
                      </div>
                      <p className="mt-4 text-lg font-medium leading-6 text-black">
                        {feature.title}
                      </p>
                    </div>
                    <div className="mt-4 text-base text-gray-500">
                      {feature.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
