import { useTranslations } from "next-intl";
import { MapPin, CheckCircle } from "lucide-react";
import Hero from "./_components/hero";
import CostSaving from "./_components/cost-saving";
import Solution from "./_components/solution";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 via-indigo-100/40 to-purple-100/40 dark:from-blue-600/20 dark:via-indigo-600/20 dark:to-purple-600/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200/50 dark:bg-purple-500/30 rounded-full blur-3xl animate-bounce"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-blue-200/50 dark:bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-200/50 dark:bg-indigo-500/30 rounded-full blur-3xl animate-bounce"></div>
          </div>
        </div>

        <Hero />
      </section>

      <CostSaving />
      <Solution />

      {/* Free Showcase Project */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Risk-Free Trial
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              Try Our Service{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                100% Free
              </span>
            </h2>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-gray-700 dark:text-white/70">
              We&apos;ll handle one building completely free to prove our
              results. No commitment, no risk — just exceptional service.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                What You Get in Our Free Showcase:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      Complete Property Website
                    </h4>
                    <p className="text-gray-700 dark:text-white/70">
                      Professional site with all apartment pages
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      Cinematic Media Package
                    </h4>
                    <p className="text-gray-700 dark:text-white/70">
                      Photos, drone footage, 360° tours, narrated walkthroughs
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      Marketing Campaign
                    </h4>
                    <p className="text-gray-700 dark:text-white/70">
                      3-month Google, Facebook, and Instagram advertising
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      Sales Support
                    </h4>
                    <p className="text-gray-700 dark:text-white/70">
                      Dedicated team handling all inquiries and sales
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Why We Offer This:
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-white/70">
                <p>
                  We&apos;re confident in our ability to deliver exceptional
                  results. This free showcase proves our value and builds trust
                  with serious investors.
                </p>
                <p>
                  After seeing our work, you&apos;ll understand why our
                  commission-based model is a win-win for both parties.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mt-6">
                  <p className="font-semibold text-blue-800 dark:text-blue-300">
                    &ldquo;The best way to sell our service is to show it in
                    action.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer VIP Program */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              Exclusive{" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Buyer VIP Program
              </span>
            </h2>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-gray-700 dark:text-white/70">
              Premium buyers get early access to our best properties before they
              hit the market
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                    VIP Buyer Benefits:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 dark:text-white/70">
                        Early access to new properties
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 dark:text-white/70">
                        Exclusive property previews
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 dark:text-white/70">
                        Priority booking for viewings
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 dark:text-white/70">
                        Dedicated buyer concierge
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 dark:text-white/70">
                        Market insights and analysis
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 dark:text-white/70">
                        Price alerts and notifications
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                    Subscription Plans:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-white/70">
                        Basic VIP Access
                      </span>
                      <span className="font-bold text-purple-600 dark:text-purple-400">
                        €99/month
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-white/70">
                        Premium VIP Access
                      </span>
                      <span className="font-bold text-indigo-600 dark:text-indigo-400">
                        €199/month
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-white/60 mt-4">
                      * Includes all benefits + priority support + price alerts
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
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

      {/* Commission Structure */}
      <section
        id="commission"
        className="py-20 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 dark:from-blue-600/20 dark:to-indigo-600/20"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
              Fair{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Commission
              </span>{" "}
              Structure
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-700 dark:text-white/70">
              We only succeed when you succeed - no hidden fees or upfront costs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Standard Service */}
            <div className="backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 text-center bg-white/80 dark:bg-white/5 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Standard Service
              </h3>
              <div className="text-4xl font-bold text-blue-400 mb-4">2-4%</div>
              <p className="mb-6 text-gray-700 dark:text-white/70">
                Complete service package with zero upfront costs
              </p>

              <div className="space-y-6">
                {/* Core Services */}
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-left">
                    Core Services:
                  </h4>
                  <ul className="text-left space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-700 dark:text-white/80">
                        Professional website + apartment pages
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-700 dark:text-white/80">
                        Cinematic media package
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-700 dark:text-white/80">
                        Multi-channel marketing campaigns
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-700 dark:text-white/80">
                        Legal concierge service
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-700 dark:text-white/80">
                        Dedicated sales team
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-700 dark:text-white/80">
                        Progress tracking & reporting
                      </span>
                    </li>
                  </ul>
                </div>

                {/* What's Included */}
                <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-left">
                    What&apos;s Included:
                  </h4>
                  <ul className="text-left space-y-1 text-sm">
                    <li className="text-gray-600 dark:text-white/70">
                      • Basic SEO optimization
                    </li>
                    <li className="text-gray-600 dark:text-white/70">
                      • Standard photography & drone footage
                    </li>
                    <li className="text-gray-600 dark:text-white/70">
                      • Google & Facebook ads (3 months)
                    </li>
                    <li className="text-gray-600 dark:text-white/70">
                      • Standard legal documentation
                    </li>
                    <li className="text-gray-600 dark:text-white/70">
                      • Monthly progress reports
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Premium Service */}
            <div className="backdrop-blur-sm border border-blue-300 dark:border-blue-500/30 rounded-2xl p-8 text-center relative overflow-hidden bg-gradient-to-r from-blue-100/80 to-indigo-100/80 dark:from-blue-500/20 dark:to-indigo-500/20 shadow-lg">
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                VIP
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Premium Service
              </h3>
              <div className="text-4xl font-bold text-indigo-400 mb-4">
                3-5.5%
              </div>
              <p className="mb-6 text-gray-700 dark:text-white/70">
                Premium service with exclusive benefits & priority access
              </p>

              <div className="space-y-6">
                {/* Everything from Standard */}
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-left">
                    Everything in Standard +
                  </h4>
                  <ul className="text-left space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-700 dark:text-white/80">
                        Exclusive buyer database access
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-700 dark:text-white/80">
                        Premium marketing campaigns
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-700 dark:text-white/80">
                        Personal account manager
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-700 dark:text-white/80">
                        YouTube videos & paid commercials
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-700 dark:text-white/80">
                        Content marketing & SEO
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Premium Benefits */}
                <div className="bg-blue-50 dark:bg-blue-500/10 rounded-xl p-4 border border-blue-200 dark:border-blue-500/20">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-left">
                    Premium Benefits:
                  </h4>
                  <ul className="text-left space-y-1 text-sm">
                    <li className="text-gray-600 dark:text-white/70">
                      • Advanced SEO & content marketing
                    </li>
                    <li className="text-gray-600 dark:text-white/70">
                      • Professional video production for YouTube
                    </li>
                    <li className="text-gray-600 dark:text-white/70">
                      • Extended ad campaigns (6 months)
                    </li>
                    <li className="text-gray-600 dark:text-white/70">
                      • Priority access to our buyer network
                    </li>
                    <li className="text-gray-600 dark:text-white/70">
                      • Weekly progress updates
                    </li>
                    <li className="text-gray-600 dark:text-white/70">
                      • Premium legal support & contracts
                    </li>
                    <li className="text-gray-600 dark:text-white/70">
                      • Dedicated account manager 24/7
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Expansion */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              Growing{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Regional Presence
              </span>
            </h2>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-gray-700 dark:text-white/70">
              Expanding our premium service across the region to serve more
              investors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Serbia
              </h3>
              <p className="text-gray-700 dark:text-white/70 mb-4">
                Primary Market
              </p>
              <div className="space-y-2 text-sm text-gray-600 dark:text-white/60">
                <div>• Belgrade</div>
                <div>• Novi Sad</div>
                <div>• Niš</div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Montenegro
              </h3>
              <p className="text-gray-700 dark:text-white/70 mb-4">
                Expansion Market
              </p>
              <div className="space-y-2 text-sm text-gray-600 dark:text-white/60">
                <div>• Budva</div>
                <div>• Kotor</div>
                <div>• Podgorica</div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Croatia
              </h3>
              <p className="text-gray-700 dark:text-white/70 mb-4">
                Expansion Market
              </p>
              <div className="space-y-2 text-sm text-gray-600 dark:text-white/60">
                <div>• Zagreb</div>
                <div>• Dubrovnik</div>
                <div>• Split</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Ready to Transform Your Property Sales?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700 dark:text-white/80">
            Join successful investors who&apos;ve eliminated upfront costs and
            increased their returns. Start with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105">
              Schedule Free Consultation
            </button>
            <button className="px-10 py-4 rounded-full text-lg font-semibold bg-gray-800/10 backdrop-blur-sm border border-gray-800/20 text-gray-800 hover:bg-gray-800/20 dark:bg-white/10 dark:border-white/20 dark:text-white dark:hover:bg-white/20 transition-all">
              View Success Stories
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
