"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        type: "success",
        message: "Thank you for your message! We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black/95 to-black">
      <Header />
      <main className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <div
            className={`text-center mb-16 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h1 className="font-abril text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl mb-4">
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-palette-dusty-rose mx-auto mb-6"></div>
            <p className="font-fira text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Have a question, suggestion, or recipe to share? We&apos;d love to hear
              from you!
            </p>
          </div>

          {/* Contact Content */}
          <section
            ref={sectionRef}
            className={`mb-16 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{
              animationDelay: isInView ? "0.2s" : "0s",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
                <h2 className="font-abril text-3xl md:text-4xl font-bold text-white mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-fira text-sm font-medium text-white/80 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-palette-dusty-rose/50 focus:border-palette-dusty-rose/50 transition-all font-fira"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-fira text-sm font-medium text-white/80 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-palette-dusty-rose/50 focus:border-palette-dusty-rose/50 transition-all font-fira"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-fira text-sm font-medium text-white/80 mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-palette-dusty-rose/50 focus:border-palette-dusty-rose/50 transition-all font-fira"
                    >
                      <option value="" className="bg-black text-white">
                        Select a subject
                      </option>
                      <option value="general" className="bg-black text-white">
                        General Inquiry
                      </option>
                      <option value="recipe" className="bg-black text-white">
                        Recipe Submission
                      </option>
                      <option value="support" className="bg-black text-white">
                        Technical Support
                      </option>
                      <option value="feedback" className="bg-black text-white">
                        Feedback
                      </option>
                      <option value="other" className="bg-black text-white">
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-fira text-sm font-medium text-white/80 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-palette-dusty-rose/50 focus:border-palette-dusty-rose/50 transition-all font-fira resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-lg ${
                        submitStatus.type === "success"
                          ? "bg-palette-dusty-rose/20 border border-palette-dusty-rose/50 text-palette-dusty-rose"
                          : "bg-palette-raspberry-red/20 border border-palette-raspberry-red/50 text-palette-raspberry-red"
                      }`}
                    >
                      <p className="font-fira text-sm">{submitStatus.message}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 bg-palette-dusty-rose text-white rounded-full font-fira font-semibold hover:bg-palette-dusty-rose/80 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
                  <h2 className="font-abril text-3xl md:text-4xl font-bold text-white mb-6">
                    Get in Touch
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-palette-dusty-rose/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-palette-dusty-rose"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-abril text-xl font-bold text-white mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:info@recipes.com"
                          className="font-fira text-white/80 hover:text-white transition-colors"
                        >
                          info@recipes.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-palette-dusty-rose/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-palette-dusty-rose"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-abril text-xl font-bold text-white mb-1">
                          Phone
                        </h3>
                        <a
                          href="tel:+1234567890"
                          className="font-fira text-white/80 hover:text-white transition-colors"
                        >
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-palette-dusty-rose/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-palette-dusty-rose"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-abril text-xl font-bold text-white mb-1">
                          Address
                        </h3>
                        <p className="font-fira text-white/80">
                          123 Recipe Street
                          <br />
                          Culinary City, CC 12345
                          <br />
                          United States
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
                  <h3 className="font-abril text-2xl font-bold text-white mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 font-fira text-white/80">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;

