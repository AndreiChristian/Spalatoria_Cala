import Heading from "@/components/Heading";

const title = 'Despre noi'


const pricingOptions = [
  {
    title: "Telefon",
    price: "0722576199",
    backgroundColor: "bg-gray-100", // Background color for the card
    textColor: "text-black", // Text color for the card
  },
  {
    title: "Email",
    price: "spalatoria_cala@gmail.com",
    backgroundColor: "bg-gray-100",
    textColor: "text-black",
  },
  {
    title: "Adresa",
    price: "Calea Dudsalui nr.49, Drobeta Turnu Severin, Mehedinti",
    backgroundColor: "bg-gray-100",
    textColor: "text-black",
  },
  {
    title: "Program",
    price: "Luni - Vineri, 9:00 - 5:00",
    backgroundColor: "bg-black",
    textColor: "text-white",
  },
];

export default function Page() {
  return <section>
    <Heading title={title}
      paragraph="Pentru orice întrebări, programări sau informații suplimentare despre serviciile noastre, 
      echipa noastră este aici pentru a vă ajuta. Vă încurajăm să ne contactați prin oricare dintre metodele disponibile. 
      Puteți trimite un e-mail , sunați-ne direct  
. Ne angajăm să răspundem tuturor solicitărilor în cel mai scurt timp posibil."
    />

    <div className="relative items-center w-full px-8 py-4 mx-auto md:px-12 lg:px-16 max-w-7xl">
      <div className="mx-auto space-y-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
        {pricingOptions.map((option, index) => (
          <div key={index} className={`flex flex-col h-full rounded-3xl ${option.backgroundColor}`}>
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <h2 className={`text-lg font-medium tracking-tighter ${option.textColor} lg:text-3xl`}>
                  {option.title}
                </h2>
                <div className="mt-6">
                  <span className={`text-2xl font-light tracking-tight ${option.textColor}`}>
                    {option.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
}
