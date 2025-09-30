import React from "react";

export default function SuccessStories() {
  return (
    <section className="py-20 bg-gray-100/50 dark:bg-white/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Success{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-700 dark:text-white/70">
            Real results from real investors who chose our service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              image:
                "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
              title: "Belgrade Downtown Complex",
              result: "Sold 45 units in 3 months",
              increase: "+18% above market price",
              testimonial:
                "The professional marketing approach helped us sell faster and for higher prices than expected.",
            },
            {
              image:
                "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
              title: "Novi Sad Residential Tower",
              result: "100% sold in 6 months",
              increase: "+22% profit margin",
              testimonial:
                "Zero upfront costs and professional service made this investment incredibly profitable.",
            },
            {
              image:
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
              title: "Niš Business District",
              result: "Sold 28 units in 4 months",
              increase: "+15% above asking price",
              testimonial:
                "The comprehensive marketing package exceeded our expectations and delivered results quickly.",
            },
          ].map((story, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-white shadow-lg dark:bg-white/5 dark:border dark:border-white/10"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {story.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="text-green-500 font-semibold">
                    {story.result}
                  </div>
                  <div className="text-blue-500 font-semibold">
                    {story.increase}
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-white/70">
                  &ldquo;{story.testimonial}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


