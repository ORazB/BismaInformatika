// Next
import Image from "next/image"

// Components
import CertificateSlider from "@/components/AboutComponents/CertificateSlider";
import QNA from "@/components/AboutComponents/QNA";

export default function About() {
  return (
    <div className="w-full">

      {/* Advantages */}
      <section className="m-28">
        <div className="container mx-auto px-8">

          <div className="grid grid-cols-2 gap-4 place-items-center mt-12">

            <div className="">
              <h2 className="text-text text-4xl tracking-wide font-semibold w-2/3">
                The Advantages of the
                upskill Program
              </h2>

              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="flex gap-4 align-top">
                  <i className="bx bxs-briefcase text-primary text-3xl"></i>

                  <div className="grid gap-2">
                    <h3 className="text-text tracking-wide w-max text-2xl font-semibold">Professional & Clear</h3>
                    <p className="text-sm text-gray-text tracking-wide leading-6">A curriculum designed to build real-world skills, guided by mentors and supported by industry connections.</p>
                  </div>
                </div>

                <div className="flex gap-4 align-top">
                  <div className="text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m21.83,3.98c-.07-.42-.4-.74-.81-.81-.24-.04-5.8-.97-8.81,2.04-1.91,1.91-2.23,4.84-2.21,6.79h0v9h2v-6.05c.34.03.75.05,1.21.05,1.95,0,4.74-.37,6.58-2.21,3.01-3.01,2.08-8.58,2.04-8.81Z"></path><path d="m9,14.99v-2.99h0c-.02-1.49.16-3.51,1-5.32-2.51-2.29-6.87-1.57-7.06-1.54-.42.07-.74.4-.81.81-.03.19-.79,4.75,1.69,7.23,1.45,1.45,3.59,1.79,5.18,1.82Z"></path></svg>
                  </div>
                  <div className="grid gap-2">
                    <h3 className="text-text tracking-wide w-max text-2xl font-semibold">Growth Mindset</h3>
                    <p className="text-sm text-gray-text tracking-wide leading-6">Develop the ability to learn, adapt, and improve continuously as you master new design and creative skills.</p>
                  </div>
                </div>

                <div className="flex gap-4 align-top">
                  <i className="bx bxs-rocket text-primary text-3xl"></i>

                  <div className="grid gap-2">
                    <h3 className="text-text tracking-wide w-max text-2xl font-semibold">Inspirational</h3>
                    <p className="text-sm text-gray-text tracking-wide leading-6">Learn from experts, build strong design foundations, and grow into the creative professional you aim to be.</p>
                  </div>
                </div>

                <div className="flex gap-4 align-top">
                  <i className="bx bxs-bolt text-primary text-3xl"></i>

                  <div className="grid gap-2">
                    <h3 className="text-text tracking-wide w-max text-2xl font-semibold">Short & Punchy</h3>
                    <p className="text-sm text-gray-text tracking-wide leading-6">Practical skills, expert mentorship, and industry opportunities—everything you need to grow.</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="rounded-2xl">
              <Image className="rounded-2xl" src={"/about-page/advantage.jpg"} alt="advantage" width={1000} height={300}></Image>
            </div>
          </div>

        </div>
      </section>

      {/* Certifications */}
      <section className="mb-28">
        <div className="container mx-auto px-8">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-semibold text-text mb-2">Explore Certificates</h2>
              <p className="text-gray-text text-sm font-light">Get a competency test certificate after completing the training</p>
            </div>
            <button className="cursor-pointer px-6 py-3 text-sm font-medium text-text hover:text-white border border-gray-300 rounded-lg hover:bg-primary transition-colors">
              VIEW ALL
            </button>
          </div>

          <div className="bg-text rounded-8 p-16 rounded-xl mt-8 grid grid-cols-2">

            <div>
              <h2 className="text-white tracking-wide text-2xl font-semibold">Advanced Program in Digital Marketing</h2>

              <div className="mt-4 pl-4">
                <ul className="list-disc list-inside text-white font-light tracking-wide grid gap-4">
                  <li>Designed with industry experts for real-world skills</li>
                  <li>Master essential digital marketing tools and strategies</li>
                  <li>Build real campaigns with hands-on projects</li>
                  <li>Learn SEO, SEM, social media marketing, and analytics</li>
                </ul>
              </div>

              <div className="pl-4 mt-8 flex items-center gap-4">
                <button className="cursor-pointer px-6 py-5 text-sm font-semibold tracking-wide bg-white text-text border rounded-lg transition-colors">
                  ENROLL NOW
                </button>
                <button className="cursor-pointer px-6 py-5 text-sm font-medium text-white hover:text-white border border-white rounded-lg transition-colors">
                  GET SAMPLE CERTIFICATE
                </button>
              </div>
            </div>

            <CertificateSlider />

          </div>


        </div>
      </section>

      {/* Features */}
      <section className="w-full mt-28">
        <div className="container mx-auto px-8">
          <div className="w-full grid gap-2">
            <h2 className="text-text text-4xl font-semibold">
              Designed for Real Learning
            </h2>
            <p className="text-gray-text text-sm font-light w-max tracking-wide">
              Learn with peers, work on real projects, and get expert feedback—all at your own pace.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="w-full">
              <Image src={"/about-page/feature001.png"} alt="Buddy System" width={300} height={200} className="w-full"></Image>
              <div className="mt-4 text-center">
                <h4 className="text-text font-semibold text-lg mb-2">BUDDY SYSTEM</h4>
                <p className="text-gray-text text-sm">Stay motivated and learn faster with peer support.</p>
              </div>
            </div>

            <div className="w-full">
              <Image src={"/about-page/feature2.png"} alt="Real-World Project" width={300} height={200} className="w-full"></Image>
              <div className="mt-4 text-center">
                <h4 className="text-text font-semibold text-lg mb-2">REAL-WORLD PROJECT</h4>
                <p className="text-gray-text text-sm">Build practical skills through hands-on assignments.</p>
              </div>
            </div>

            <div className="w-full">
              <Image src={"/about-page/feature3.png"} alt="Expert Feedback" width={300} height={200} className="w-full"></Image>
              <div className="mt-4 text-center">
                <h4 className="text-text font-semibold text-lg mb-2">EXPERT FEEDBACK</h4>
                <p className="text-gray-text text-sm">Get clear guidance and improvement from mentors.</p>
              </div>
            </div>

            <div className="w-full">
              <Image src={"/about-page/feature4.png"} alt="Lifetime Access" width={300} height={200} className="w-full"></Image>
              <div className="mt-4 text-center">
                <h4 className="text-text font-semibold text-lg mb-2">LIFETIME ACCESS</h4>
                <p className="text-gray-text text-sm">Revisit lessons and learn at your own pace anytime.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* QNA */}
      <section className="m-28">
        <div className="container mx-auto px-8">

          <div className="w-full grid place-items-center gap-2">
            <h2 className="text-text text-4xl font-semibold">
              Designed for Real Learning
            </h2>
            <p className="text-gray-text text-sm font-light w-max tracking-wide">
              Learn with peers, work on real projects, and get expert feedback—all at your own pace.
            </p>
          </div>

          <QNA />

        </div>
      </section>

    </div>
  )
}
