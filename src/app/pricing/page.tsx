"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const PricingPage: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const plans: PricingPlan[] = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out our recipes",
      features: [
        "Access to 10 recipes per month",
        "Basic recipe search",
        "Standard recipe details",
        "Community support",
      ],
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "month",
      description: "For the passionate home cook",
      features: [
        "Unlimited recipe access",
        "Advanced search filters",
        "Step-by-step video guides",
        "Meal planning tools",
        "Shopping list generator",
        "Priority customer support",
        "Ad-free experience",
      ],
      popular: true,
    },
    {
      name: "Pro",
      price: "$19.99",
      period: "month",
      description: "For culinary professionals",
      features: [
        "Everything in Premium",
        "Exclusive chef recipes",
        "Nutritional analysis",
        "Recipe customization tools",
        "Export recipes to PDF",
        "API access",
        "White-label options",
        "24/7 priority support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black/95 to-black">
      <Header />
      <main className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div
            className={`text-center mb-16 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h1 className="font-abril text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl mb-4">
              Pricing
            </h1>
            <div className="w-24 h-1 bg-palette-dusty-rose mx-auto mb-6"></div>
            <p className="font-fira text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Choose the perfect plan for your culinary journey
            </p>
          </div>

          {/* Pricing Cards */}
          <section
            ref={sectionRef}
            className={`mb-16 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{
              animationDelay: isInView ? "0.2s" : "0s",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative bg-black/30 backdrop-blur-sm border rounded-2xl p-8 md:p-10 transition-all duration-300 ${
                    plan.popular
                      ? "border-palette-dusty-rose/50 scale-105 shadow-lg shadow-palette-dusty-rose/20"
                      : "border-white/10 hover:border-white/20"
                  }`}
                  style={{
                    animationDelay: isInView
                      ? `${0.3 + index * 0.1}s`
                      : "0s",
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-palette-dusty-rose text-white font-fira text-sm font-semibold px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="font-abril text-2xl md:text-3xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="font-abril text-4xl md:text-5xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="font-fira text-base text-white/70">
                        /{plan.period}
                      </span>
                    </div>
                    <p className="font-fira text-sm text-white/60">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <svg
                          className="w-5 h-5 text-palette-dusty-rose flex-shrink-0 mt-0.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-fira text-sm md:text-base text-white/80">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-full font-fira font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-palette-dusty-rose text-white hover:bg-palette-dusty-rose/80 hover:scale-105"
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30"
                    }`}
                  >
                    {plan.name === "Free"
                      ? "Get Started"
                      : `Choose ${plan.name}`}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section
            className={`mb-16 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{
              animationDelay: isInView ? "0.6s" : "0s",
            }}
          >
            <h2 className="font-abril text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "Can I change my plan later?",
                  answer:
                    "Yes! You can upgrade, downgrade, or cancel your subscription at any time. Changes will take effect at the start of your next billing cycle.",
                },
                {
                  question: "Do you offer refunds?",
                  answer:
                    "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact us within 30 days for a full refund.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
                },
                {
                  question: "Is there a free trial?",
                  answer:
                    "Yes! Premium and Pro plans come with a 7-day free trial. No credit card required to start your trial.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8"
                >
                  <h3 className="font-abril text-xl md:text-2xl font-bold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="font-fira text-base text-white/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section
            className={`${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{
              animationDelay: isInView ? "0.7s" : "0s",
            }}
          >
            <div className="bg-gradient-to-r from-palette-dusty-rose/20 to-palette-raspberry-red/20 backdrop-blur-sm border border-palette-dusty-rose/30 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-abril text-3xl md:text-4xl font-bold text-white mb-4">
                Still have questions?
              </h2>
              <p className="font-fira text-base md:text-lg text-white/80 mb-6 max-w-2xl mx-auto">
                Our team is here to help you find the perfect plan for your
                needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="font-fira px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/30 hover:border-white/40 transition-all duration-300"
                >
                  Contact Us
                </a>
                <a
                  href="/recipes"
                  className="font-fira px-6 py-3 bg-transparent border border-white/30 rounded-full text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                >
                  Explore Recipes
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;

