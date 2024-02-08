import React from 'react';

const features = [
  { title: "Database with GraphQL", description: "Define the data model in your database and query data with GraphQL." },
  { title: "Real-time Sync", description: "Sync data across multiple clients." },
  { title: "Permissions", description: "Define complex security policies to keep your users’ data safe." },
  { title: "File Storage", description: "Upload and manage files." },
  { title: "Image Transformations", description: "Resize and optimise images on the fly." },
  { title: "Authentication", description: "User accounts and social login." },
  { title: "Serverless Functions", description: "Custom backend code with logs and error handling." },
  { title: "Payments", description: "Stripe integration for all apps." },
  { title: "Transactional Emails", description: "Design your email templates and engage your users." },
];

const FeaturesSection = () => {
  return (
    <section className="bg-white">
      <div className="relative items-center w-full px-5 pt-10 mx-auto md:px-12 lg:px-16 lg:pt-24 max-w-7xl lg:py-24">
        <div>
          <div className="max-w-2xl">
            <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
              I am a slightly longer heading that the others and I am aligned to the
              left
            </p>
            <p className="max-w-2xl mt-4 text-lg tracking-tight text-gray-600">
              We all make mistakes, have struggles, and even regret things in our
              past. But you are not your mistakes, you are not your struggles, and
              you are here NOW with the power to shape your day and your future.
            </p>
          </div>
        </div>
        <div>
          <div className="max-w-xl py-12 mx-auto text-left lg:max-w-7xl">
            <h2 className="sr-only">Features.</h2>
            <div>
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:space-y-0">
                {features.map((feature, index) => (
                  <div key={index}>
                    <div>
                      <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
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
