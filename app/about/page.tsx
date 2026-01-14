// Next
import Image from "next/image"

// Components
import CertificateSlider from "@/components/AboutComponents/CertificateSlider"
import QNA from "@/components/AboutComponents/QNA"

export default function About() {
  return (
    <div className="w-full overflow-hidden">

      {/* ================= ADVANTAGES ================= */}
      <section className="my-16 md:my-24 lg:my-28">
        <div className="container mx-auto px-4 md:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-text text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug md:w-2/3">
                The Advantages of the <br /> upskill Program
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

                {/* Item */}
                <div className="flex gap-4 items-start">
                  <i className="bx bxs-briefcase text-primary text-3xl shrink-0"></i>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      Professional & Clear
                    </h3>
                    <p className="text-sm text-gray-text leading-relaxed mt-1">
                      A curriculum designed to build real-world skills, guided by mentors and supported by industry connections.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={36}
                    height={36}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="text-primary shrink-0"
                  >
                    <path d="m21.83,3.98c-.07-.42-.4-.74-.81-.81-.24-.04-5.8-.97-8.81,2.04-1.91,1.91-2.23,4.84-2.21,6.79v9h2v-6.05c.34.03.75.05,1.21.05,1.95,0,4.74-.37,6.58-2.21,3.01-3.01,2.08-8.58,2.04-8.81Z" />
                    <path d="m9,14.99v-2.99c-.02-1.49.16-3.51,1-5.32-2.51-2.29-6.87-1.57-7.06-1.54-.42.07-.74.4-.81.81-.03.19-.79,4.75,1.69,7.23,1.45,1.45,3.59,1.79,5.18,1.82Z" />
                  </svg>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      Growth Mindset
                    </h3>
                    <p className="text-sm text-gray-text leading-relaxed mt-1">
                      Develop the ability to learn, adapt, and improve continuously as you master new design and creative skills.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <i className="bx bxs-rocket text-primary text-3xl shrink-0"></i>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      Inspirational
                    </h3>
                    <p className="text-sm text-gray-text leading-relaxed mt-1">
                      Learn from experts, build strong design foundations, and grow into the creative professional you aim to be.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <i className="bx bxs-bolt text-primary text-3xl shrink-0"></i>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      Short & Punchy
                    </h3>
                    <p className="text-sm text-gray-text leading-relaxed mt-1">
                      Practical skills, expert mentorship, and industry opportunities—everything you need to grow.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* IMAGE */}
            <div className="w-full">
              <Image
                src="/about-page/advantage.jpg"
                alt="advantage"
                width={1000}
                height={600}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section className="mb-16 md:mb-24 lg:mb-28">
        <div className="container mx-auto px-4 md:px-8">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                Explore Certificates
              </h2>
              <p className="text-gray-text text-sm">
                Get a competency test certificate after completing the training
              </p>
            </div>

            <button className="px-6 py-2 text-sm font-medium border rounded-sm hover:bg-primary hover:text-white transition">
              VIEW ALL
            </button>
          </div>

          <div className="bg-text rounded-xl p-6 md:p-10 lg:p-16 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10">

            <div>
              <h3 className="text-white text-xl md:text-2xl font-semibold">
                Advanced Program in Digital Marketing
              </h3>

              <ul className="mt-6 text-white text-sm space-y-4 list-disc list-inside">
                <li>Designed with industry experts for real-world skills</li>
                <li>Master essential digital marketing tools and strategies</li>
                <li>Build real campaigns with hands-on projects</li>
                <li>Learn SEO, SEM, social media marketing, and analytics</li>
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-2 bg-white text-text rounded-sm font-semibold text-sm xl:text-base">
                  ENROLL NOW
                </button>
                <button className="px-6 py-2 border border-white text-white rounded-sm text-sm xl:text-base">
                  GET SAMPLE CERTIFICATE
                </button>
              </div>
            </div>

            <CertificateSlider />
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="my-16 md:my-24">
        <div className="container mx-auto px-4 md:px-8">

          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Designed for Real Learning
            </h2>
            <p className="text-gray-text text-sm mt-2">
              Learn with peers, work on real projects, and get expert feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ["feature001.png", "BUDDY SYSTEM", "Stay motivated and learn faster with peer support."],
              ["feature2.png", "REAL-WORLD PROJECT", "Build practical skills through hands-on assignments."],
              ["feature3.png", "EXPERT FEEDBACK", "Get clear guidance and improvement from mentors."],
              ["feature4.png", "LIFETIME ACCESS", "Revisit lessons and learn at your own pace anytime."],
            ].map(([img, title, desc], i) => (
              <div key={i} className="text-center">
                <Image
                  src={`/about-page/${img}`}
                  alt={title}
                  width={300}
                  height={200}
                  className="mx-auto"
                />
                <h4 className="mt-4 font-semibold">{title}</h4>
                <p className="text-sm text-gray-text mt-2">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= QNA ================= */}
      <section className="my-16 md:my-24 lg:my-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-text text-sm mt-2">
              Everything you need to know before getting started.
            </p>
          </div>

          <QNA />
        </div>
      </section>

    </div>
  )
}
