export default function Page() {
  const faqs = [
    {
      question: "Can I used Lexingtøn Themes for my site?",
      answer: "Upswing securities passively index inverse bondholders capitalization financial health Moody's debt managed."
    },
    {
      question: "Will I get updates?",
      answer: "Upswing securities passively index inverse bondholders capitalization financial health Moody's debt managed."
    },
    {
      question: "How much do disputes cost?",
      answer: "Upswing securities passively index inverse bondholders capitalization financial health Moody's debt managed."
    },
    {
      question: "How do refunds work?",
      answer: "Plus, our platform is constantly evolving to meet the changing needs."
    },
    {
      question: "Is there a fee to use Google Pay?",
      answer: "Plus, our platform is constantly evolving to meet the changing needs."
    },
    {
      question: "Customer support",
      answer: "Plus, our platform is constantly evolving to meet the changing needs."
    }
  ];

  return (
    <section>
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
