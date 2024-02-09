import Heading from "@/components/Heading";

export default function Page() {

  const faqs = [
    {
      question: "Ce tipuri de articole pot fi curățate la facilitatea dumneavoastră?",
      answer: "Putem curăța o gamă largă de articole, de la îmbrăcăminte delicată până la uniforme industriale și textile grele. Fiecare articol este tratat cu cea mai mare grijă și conform specificațiilor sale."
    },
    {
      question: "Oferiți servicii de curățare pentru afaceri?",
      answer: "Da, oferim servicii de curățare în masă pentru afaceri, inclusiv pentru hoteluri, spitale și alte instituții care necesită un volum mare de spălătorie regulat."
    },
    {
      question: "Care este timpul mediu de procesare pentru serviciile de spălătorie industrială?",
      answer: "Timpul standard de întoarcere este de 48 de ore. Pentru servicii urgente sau contracte specifice, vă rugăm să ne contactați pentru a discuta detalii suplimentare și posibilități."
    },
    {
      question: "Utilizați produse de curățare ecologice?",
      answer: "Da, suntem angajați în utilizarea de soluții de curățare ecologice și sustenabile, care sunt eficiente și sigure pentru mediul înconjurător."
    },
    {
      question: "Puteți trata articole cu instrucțiuni specifice de curățare?",
      answer: "Da, respectăm toate instrucțiunile specifice de curățare pentru a asigura că fiecare articol este tratat corespunzător și întreținut conform cerințelor."
    },
    {
      question: "Ce se întâmplă în cazul în care un articol este pierdut sau deteriorat?",
      answer: "În cazul nefericit al unei pierderi sau deteriorări, avem politici clare de compensare. Vă rugăm să ne contactați imediat pentru a rezolva orice problemă într-un mod satisfăcător."
    },
    {
      question: "Există programe de loialitate pentru clienții regulari?",
      answer: "Da, avem programe de loialitate care recompensează clienții regulari cu reduceri și oferte speciale. Pentru mai multe detalii, vă invităm să ne contactați."
    }
  ];
  return (
    <section>
      <Heading
        title="Întrebări Frecvente (FAQ)"
        paragraph="Aici veți găsi răspunsuri la cele mai comune întrebări legate de serviciile noastre de spălătorie industrială. Scopul nostru este să vă oferim informațiile necesare pentru a vă asigura că experiența dumneavoastră cu noi este cât mai plăcută și fără griji."
      />
      <div className="items-center w-full max-w-3xl px-5 py-5 mx-auto md:px-12 lg:px-16 lg:py-20">
        <ul role="list" className="grid grid-cols-1 gap-4 list-none lg:gap-12">
          {faqs.map((faq, index) => (
            <li key={index}>
              <div>
                <p className="mt-5 text-lg font-medium leading-6 text-black dark:text-white ">
                  {faq.question}
                </p>
              </div>
              <div className="mt-2 text-base text-gray-500">
                {faq.answer}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
