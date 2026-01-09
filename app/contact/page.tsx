// Next.js
import Link from "next/link";
import Image from "next/image";

// Components
import NewsLetter from "@/components/LayoutComponents/NewsLetter";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Get in touch */}
      <section className="pt-12 md:pt-20 lg:pt-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-center">
              We're Here To Help
            </h2>
          </div>

          {/* Desktop: 2 columns | Tablet: 1 column | Mobile: 1 column */}
          <div className="grid grid-cols-1 sm:place-items-center lg:grid-cols-2 xl:items-start justify-center gap-8 lg:gap-16">
            {/* Contact Info Cards - Desktop: 2x2 grid | Tablet/Mobile: 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-6">
              {/* Call Us Card */}
              <div className="bg-white grid md:place-items-start place-items-center p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-red-700 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  Call Us
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  +62 812 331 457
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  Monday - Friday
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  9:00 AM to 5:00 PM
                </p>
              </div>

              {/* Email Us Card */}
              <div className="bg-white md:place-items-start place-items-center p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-red-700 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  Email Us
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  bisma123@gmail.com
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  Response Time
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  Within 24 Hours
                </p>
              </div>

              {/* Visit Us Card */}
              <div className="bg-white md:place-items-start place-items-center p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-red-700 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  Visit Us
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Jl Lingkar Timur Udayana
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  No. 14, Jimbaran
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  Kuta Selatan 80361
                </p>
              </div>

              {/* Chat With Us Card */}
              <div className="bg-white md:place-items-start place-items-center p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-red-700 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  Chat With Us
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Availability
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  Monday - Friday
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  9:00 AM to 5:00 PM
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 md:mb-8">
                Get In Touch With us
              </h3>

              <form className="space-y-6">
                {/* Desktop: 2 columns | Mobile/Tablet: 1 column */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-gray-900 font-semibold text-base md:text-lg">
                      Full Name <span className="text-red-700">*</span>
                    </label>
                    <input
                      placeholder="Type Full Name"
                      className="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:border-red-700 bg-gray-50"
                      type="text"
                      required
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label className="block text-gray-900 font-semibold text-base md:text-lg">
                      Email Address <span className="text-red-700">*</span>
                    </label>
                    <input
                      placeholder="Type Email Address"
                      className="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:border-red-700 bg-gray-50"
                      type="email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="block text-gray-900 font-semibold text-base md:text-lg">
                      Phone Number <span className="text-red-700">*</span>
                    </label>
                    <input
                      placeholder="Type Phone Number"
                      className="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:border-red-700 bg-gray-50"
                      type="text"
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="block text-gray-900 font-semibold text-base md:text-lg">
                      Subject <span className="text-red-700">*</span>
                    </label>
                    <input
                      placeholder="Type Subject"
                      className="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:border-red-700 bg-gray-50"
                      type="text"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-gray-900 font-semibold text-base md:text-lg">
                    Message
                  </label>
                  <textarea
                    placeholder="Let us Know how can we help you"
                    className="w-full p-3 rounded-2xl border border-gray-300 focus:outline-none focus:border-red-700 bg-gray-50 min-h-[120px] resize-none"
                  />
                </div>

                {/* Privacy Policy & Submit */}
                <div className="space-y-3">
                  <label className="block text-gray-900 font-medium text-xs md:text-sm">
                    By Submitting, I agree to the{" "}
                    <span className="text-red-700 underline cursor-pointer">
                      Privacy Policy
                    </span>
                  </label>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="mt-12 md:mt-20 lg:mt-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide text-center mb-6 md:mb-8">
            Our Location
          </h2>

          <div className="w-full h-[250px] sm:h-[300px] lg:h-[400px] rounded-2xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Jl.%20Pandu%20No.9,%20Sumerta%20Kelod,%20Kec.%20Denpasar%20Tim.,%20Kota%20Denpasar,%20Bali%2080239&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsLetter />
    </div>
  );
}
