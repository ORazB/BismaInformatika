"use client";
import Image from "next/image";

export default function NewsLetter() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="bg-primary rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-0 sm:gap-8">
          {/* Bagian Kiri - Teks */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Subscribe to our
              <br />
              newsletter
            </h2>
          </div>

          {/* Bagian Kanan - Form */}
          <div className="lg:w-1/2">
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="flex-1 w-full">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="mb-1 sm:mb-0 w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-white bg-opacity-20 sm:bg-opacity-30 text-text focus:outline-none focus:ring-2 focus:ring-accent text-sm sm:text-base"
                  />
                </div>
                <p className="text-xs sm:text-sm text-white text-opacity-80 mt-3 ml-3 sm:ml-4">
                  We care about your data in our privacy policy
                </p>
              </div>

              <button className="px-6 sm:px-8 py-3 sm:py-4 cursor-pointer bg-accent text-white font-semibold rounded-full whitespace-nowrap hover:bg-accent/90 transition-colors w-full sm:w-auto text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
