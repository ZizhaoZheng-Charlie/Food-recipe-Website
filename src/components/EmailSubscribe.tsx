"use client";

import React, { useState, useEffect, useRef } from "react";

const EmailSubscribe: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
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
        threshold: 0.2,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: "success",
        message: "Thank you for subscribing! Check your email for confirmation.",
      });
      setEmail("");
    }, 1500);
  };

  return (
    <section
      ref={sectionRef}
      className={`relative py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-palette-taupe-grey via-palette-dusty-rose/90 to-palette-taupe-grey ${
        isInView ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-palette-dusty-rose/20 to-palette-raspberry-red/20 backdrop-blur-sm border border-palette-dusty-rose/30 rounded-2xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="font-abril text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl mb-4">
            Stay Updated
          </h2>
          <div className="w-24 h-1 bg-palette-dusty-rose mx-auto mb-6"></div>
          <p className="font-fira text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest recipes, cooking tips,
            and culinary inspiration delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-palette-dusty-rose/50 focus:border-palette-dusty-rose/50 transition-all font-fira"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="font-fira px-8 py-3 bg-palette-dusty-rose text-white rounded-full font-semibold hover:bg-palette-dusty-rose/80 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </div>

            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-500/20 border border-green-500/50 text-green-400"
                    : "bg-palette-raspberry-red/20 border border-palette-raspberry-red/50 text-palette-raspberry-red"
                }`}
              >
                <p className="font-fira text-sm">{submitStatus.message}</p>
              </div>
            )}

            <p className="font-fira text-xs text-white/60 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSubscribe;

