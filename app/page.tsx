// Next.js
import Link from "next/link";
import Image from "next/image";

// Components
import HomeSlider from "@/components/sliders/HomeSlider";
import CourseList from "@/components/LandingComponents/CourseList";
import NewsLetter from "@/components/LayoutComponents/NewsLetter";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Slide */}
      <section className="flex w-full bg-primary overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
            <div className="text__container grid gap-2 py-12 lg:py-20 lg:text-left">
              <h3 className="text-white">Sertifikasi BNSP</h3>
              <h2 className="text-white font-bold tracking-wide text-3xl sm:text-4xl lg:text-5xl">
                Menjadi Kompeten Dengan Sertifikasi BNSP
              </h2>

              <p className="text-white tracking-wide text-sm sm:text-base">
                Raih pengakuan resmi atas keahlian Anda melalui sertifikasi BNSP
                dan tingkatkan daya saing di dunia kerja
              </p>

              <div className="button__container mt-4 flex flex-col sm:flex-row gap-4 lg:justify-start">
                <button className="px-6 py-1 bg-white text-primary cursor-pointer font-semibold rounded-full transition">
                  <i className="bx bx-caret-right align-middle text-xl"></i>{" "}
                  Jelajahi Kursus
                </button>
                <button className="px-6 py-1 bg-transparent border-2 border-white text-white cursor-pointer font-semibold rounded-full transition">
                  <i className="bx bx-caret-right align-middle text-xl"></i>{" "}
                  Bicara Dengan Expert
                </button>
              </div>
            </div>

            <div className="image__container relative w-full flex items-center justify-center">
              <div className="play__line z-20 absolute left-4 lg:left-7 rotate-7 h-[300px] lg:h-[500px] w-3 bg-white hidden lg:flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full p-10 bg-white opacity-50 rounded-full z-10"></div>
                  <button className="relative play__button bg-white -rotate-6 p-2 rounded-full z-20 cursor-pointer">
                    <i className="text-primary text-5xl align-middle bx bx-play"></i>
                  </button>
                </div>
              </div>

              <Image
                loading="eager"
                width={1000}
                height={463}
                alt="Sertifikasi BNSP"
                className="w-full h-[260px] sm:h-[340px] lg:h-[463px] object-cover landing-image-clip-path"
                src="/landing-page/hero-slider.png"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 text-center lg:text-left gap-8">
            <div className="feature__item flex flex-col lg:flex-row items-center gap-4">
              <div className="feature__icon">
                <i className="bx bxs-graduation text-5xl text-white"></i>
              </div>
              <div className="feature__text">
                <h4 className="font-semibold text-lg mb-2 text-white">
                  100+ Program courses
                </h4>
                <p className="text-sm text-white">
                  Explore the courses that interest you
                </p>
              </div>
            </div>

            <div className="feature__item flex flex-col lg:flex-row items-center gap-4">
              <div className="feature__icon">
                <i className="bx bx-user-check text-5xl text-white"></i>
              </div>
              <div className="feature__text">
                <h4 className="font-semibold text-lg mb-2 text-white">
                  Expert instruction
                </h4>
                <p className="text-sm text-white">
                  Find the right instructor for you
                </p>
              </div>
            </div>

            <div className="feature__item flex flex-col lg:flex-row items-center gap-4">
              <div className="feature__icon">
                <i className="bx bx-alarm text-5xl text-white"></i>
              </div>
              <div className="feature__text">
                <h4 className="font-semibold text-lg mb-2 text-white">
                  Lifetime access
                </h4>
                <p className="text-sm text-white">Learn on your schedule</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essentials Skills */}
      <section className="mt-20 lg:mt-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="grid h-full gap-2 w-full lg:w-5/12 text-center lg:text-left">
              <h2 className="text-text text-2xl sm:text-3xl lg:text-4xl font-semibold">
                Learn essential career and life skills
              </h2>
              <p className="text-gray-text font-light text-sm tracking-wide">
                Essential career and life skills help you succeed in
                communication, problem-solving, and time management.
              </p>

              <Link href={"/course"}>
                <button className="mt-4 px-6 py-3 bg-primary text-white cursor-pointer font-semibold rounded-full transition mx-auto lg:mx-0">
                  <i className="bx bx-caret-right align-middle text-xl"></i>{" "}
                  Explore Courses
                </button>
              </Link>
            </div>

            <div className="grid place-items-center">
              <HomeSlider />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mt-20 lg:mt-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full grid gap-2 text-center lg:text-left">
            <h2 className="text-text text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Find out more about us co-learning experience
            </h2>
            <p className="text-gray-text font-light text-sm tracking-wide">
              We believe everyone should have the oppportunity to create
              progress through technology and develop the skills.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 items-center">
            <Image
              width={400}
              height={400}
              alt="Benefits"
              src="/landing-page/benefit.webp"
              className="w-full h-auto"
            ></Image>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Image
                width={200}
                height={200}
                alt="Benefit 1"
                src="/landing-page/benefit-1.png"
                className="w-full h-24 sm:h-32 md:h-36 lg:h-40 object-cover rounded-xl"
              ></Image>
              <Image
                width={200}
                height={200}
                alt="Benefit 2"
                src="/landing-page/benefit-2.png"
                className="w-full h-24 sm:h-32 md:h-36 lg:h-40 object-cover rounded-xl"
              ></Image>
              <Image
                width={200}
                height={200}
                alt="Benefit 3"
                src="/landing-page/benefit-3.png"
                className="w-full h-24 sm:h-32 md:h-36 lg:h-40 object-cover rounded-xl"
              ></Image>
              <Image
                width={200}
                height={200}
                alt="Benefit 4"
                src="/landing-page/benefit-4.png"
                className="w-full h-24 sm:h-32 md:h-36 lg:h-40 object-cover rounded-xl"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      {/* Course List */}
      <section className="mt-20 lg:mt-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full grid gap-2">
            <h2 className="text-text text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Skills to transform your career and life
            </h2>
            <p className="text-gray-text text-sm font-light tracking-wide">
              From critical skills to technical topics, Udemy supports your
              professional development.
            </p>
          </div>

          <CourseList />
        </div>
      </section>

      {/* Reviews */}
      <section className="mt-20 lg:mt-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid place-items-center gap-2">
            <h2 className="text-text text-3xl lg:text-5xl font-semibold w-full lg:w-1/3 tracking-wide text-center">
              Hear Directly From Our Learners
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 p-4 rounded-2xl grid gap-6">
              <div className="rounded-full p-4 bg-primary justify-self-start">
                <i className="text-white bx bxs-quote-left text-2xl"></i>
              </div>

              <p className="px-2 text-text font-semibold text-lg/7">
                I was struggling to transition from print to digital design, and
                I often felt overwhelmed by all the new tools and concepts. But
                Bisma Academy courses guided me step by step and helped me
                refine my UI/UX skills with clear explanations.
              </p>

              <div className="flex items-center gap-2 mt-8">
                <div className="rounded-full w-[50px] h-[50px]">
                  <Image
                    className="w-full h-full rounded-full object-cover"
                    width={64}
                    height={64}
                    src={"/landing-page/profiles/profile-1.jpg"}
                    alt="review"
                  ></Image>
                </div>
                <div className="grid">
                  <h3 className="text-text font-semibold tracking-wide">
                    Bessie Cooper
                  </h3>
                  <p className="text-gray-text text-sm">Student</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-2xl grid gap-6">
              <div className="rounded-full p-4 bg-primary justify-self-start">
                <i className="text-white bx bxs-quote-left text-2xl"></i>
              </div>

              <p className="px-2 text-text font-semibold text-lg/7">
                What I loved most about Bisma Academy was the hands-on approach
                that made every lesson feel relevant and engaging. The courses
                were highly interactive, filled with real examples, and I could
                immediately apply what I was learning.
              </p>

              <div className="flex items-center gap-2 mt-8">
                <div className="rounded-full w-[50px] h-[50px]">
                  <Image
                    className="w-full h-full rounded-full object-cover"
                    width={64}
                    height={64}
                    src={"/landing-page/profiles/profile-1.jpg"}
                    alt="review"
                  ></Image>
                </div>
                <div className="grid">
                  <h3 className="text-text font-semibold tracking-wide">
                    Bessie Cooper
                  </h3>
                  <p className="text-gray-text text-sm">Student</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-2xl grid gap-6">
              <div className="rounded-full p-4 bg-primary justify-self-start">
                <i className="text-white bx bxs-quote-left text-2xl"></i>
              </div>

              <p className="px-2 text-text font-semibold text-lg/7">
                I work a full-time job and never imagined I’d have enough time
                or energy to learn coding. However, the bite-sized lessons,
                supportive community, and flexible schedule at Bisma Academy
                made it surprisingly manageable.
              </p>

              <div className="flex items-center gap-2 mt-8">
                <div className="rounded-full w-[50px] h-[50px]">
                  <Image
                    className="w-full h-full rounded-full object-cover"
                    width={64}
                    height={64}
                    src={"/landing-page/profiles/profile-1.jpg"}
                    alt="review"
                  ></Image>
                </div>
                <div className="grid">
                  <h3 className="text-text font-semibold tracking-wide">
                    Bessie Cooper
                  </h3>
                  <p className="text-gray-text text-sm">Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-20 lg:mt-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid place-items-center gap-2">
            <h2 className="text-gray-text text-2xl font-light w-full tracking-wide text-center">
              TRUSTED BY
            </h2>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 place-items-center mt-8">
            <Image
              className="saturate-0 hover:saturate-100 transition-all"
              width={1000}
              height={450}
              alt="SMK Ti Bali Global Jimbaran"
              src="/landing-page/testimonials/testimonial-1.png"
            ></Image>
            <Image
              className="saturate-0 hover:saturate-100 transition-all"
              width={1000}
              height={450}
              alt="SMK Ti Bali Global Jimbaran"
              src="/landing-page/testimonials/testimonial-1.png"
            ></Image>
            <Image
              className="saturate-0 hover:saturate-100 transition-all"
              width={1000}
              height={450}
              alt="SMK Ti Bali Global Jimbaran"
              src="/landing-page/testimonials/testimonial-1.png"
            ></Image>
            <Image
              className="saturate-0 hover:saturate-100 transition-all"
              width={1000}
              height={450}
              alt="SMK Ti Bali Global Jimbaran"
              src="/landing-page/testimonials/testimonial-1.png"
            ></Image>
            <Image
              className="saturate-0 hover:saturate-100 transition-all"
              width={1000}
              height={450}
              alt="SMK Ti Bali Global Jimbaran"
              src="/landing-page/testimonials/testimonial-1.png"
            ></Image>
          </div>
        </div>
      </section>

      <NewsLetter />
      {/* Newsletter */}
      <section className="m-28">
        <div className="container mx-auto px-8"></div>
      </section>
    </div>
  );
}
