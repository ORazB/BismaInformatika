// Images
import Image from "next/image";

// Box Icons
import 'boxicons/css/boxicons.min.css';

export default function Home() {
  return (
    <div className="w-full">

      // Hero Slide
      <section className="flex w-full bg-red-800">

        <div className="container mx-auto px-8">

          <div className="grid grid-cols-2 gap-8 h-full">

            <div className="text__container grid gap-2 py-20">
              <h3 className="text-white">Sertifikasi BNSP</h3>
              <h2 className="text-white font-semibold tracking-wide text-4xl">Menjadi Kompeten Dengan Sertifikasi BNSP</h2>

              <p className="text-white tracking-wide">Raih pengakuan resmi atas keahlian Anda melalui sertifikasi BNSP dan tingkatkan daya saing di dunia kerja</p>

              <div className="button__container mt-4 flex gap-4">
                <button className="px-6 py-1 bg-white text-red-800 cursor-pointer font-semibold rounded-full transition">
                  <i className='bx bx-caret-right align-middle text-xl'></i> Jelajahi Kursus
                </button>
                <button className="px-6 py-1 bg-transparent border-2 border-white text-white cursor-pointer font-semibold rounded-full transition">
                  <i className='bx bx-caret-right align-middle text-xl'></i> Bicara Dengan Expert
                </button>
              </div>
            </div>

            <div className="image__container relative w-full flex items-center justify-center">

              <div className="play__line z-20 absolute left-18 rotate-6 h-500 w-3 bg-white flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full p-10 bg-white opacity-50 rounded-full z-10"></div>
                  <button className="relative play__button bg-white -rotate-6 p-2 rounded-full z-20 cursor-pointer">
                    <i className='text-red-800 text-5xl align-middle bx bx-play'></i>
                  </button>
                </div>
              </div>

              <img className="landing-image-clip-path" src="/landing-page/hero-slider.png"></img>
            </div>

          </div>
        </div>
      </section>

      // Features
      <section>
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-4">

            <div className="feature__item">

            </div>
            <div className="feature__item">

            </div>
            <div className="feature__item">

            </div>
            <div className="feature__item">

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
