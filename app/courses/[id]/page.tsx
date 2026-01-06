// Next
import Image from "next/image";

export default async function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="w-full">
      <section className="container mx-auto px-8">

        <div className="grid grid-cols-3 gap-24 m-24">
          <div className="col-span-2">
            <div className="grid gap-4">
              <h3 className="text-text text-4xl tracking-wide font-semibold">UI & UX : Hands-on Training for Beginners</h3>

              <div className="flex gap-4 items-center">
                <button className="bg-accent p-3 px-6 text-white rounded-lg">Programming Language</button>
                <div className="flex gap-2">
                  <h5 className="text-text font-semibold text-2xl">5.0</h5>
                  <div className="flex items-center text-xl">
                    <i className="text-orange-400 bx bxs-star"></i>
                    <i className="text-orange-400 bx bxs-star"></i>
                    <i className="text-orange-400 bx bxs-star"></i>
                    <i className="text-orange-400 bx bxs-star"></i>
                    <i className="text-orange-400 bx bxs-star"></i>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex justify-between gap-4 mt-8">

              {/* Date */}
              <div>
                <p className="text-gray-text font-semibold text-lg">Last Updates</p>
                <h4 className="text-text font-semibold text-lg">Oktober 2025</h4>
              </div>

              {/* Level */}
              <div>
                <p className="text-gray-text font-semibold text-lg">Level</p>
                <h4 className="text-text font-semibold text-lg">Beginner</h4>
              </div>

              {/* Students */}
              <div>
                <p className="text-gray-text font-semibold text-lg">Students</p>
                <h4 className="text-text font-semibold text-lg">151,410</h4>
              </div>

              {/* Language */}
              <div>
                <p className="text-gray-text font-semibold text-lg">Language</p>
                <h4 className="text-text font-semibold text-lg">Indonesian</h4>
              </div>

              <div className="flex gap-2 items-center">
                <button className="cursor-pointer bg-gray-200 p-3 px-6 rounded-xl text-lg font-semibold transition group hover:bg-primary hover:text-white"><i className="bx bxs-heart text-2xl align-middle hover:text-white"></i> Wishlist</button>
                <button className="cursor-pointer bg-gray-200 p-3 px-6 rounded-xl text-lg font-semibold transition group hover:bg-primary hover:text-white"><i className="bx bxs-share text-2xl align-middle hover:text-white"></i> Share</button>
              </div>

            </div>

            {/* Course Image */}
            <div className="mt-8">
              <Image className="w-full object-cover" src={"/course-page/course-placeholder.png"} alt="Course Placeholder" width={800} height={450}></Image>
            </div>

            {/* Course Description */}
            <div className="mt-8 p-6 rounded-2xl border border-gray-text">
              <h3 className="text-2xl text-text font-semibold">Overview</h3>

              {/* Main Description */}
              <div className="grid gap-4 mt-4 text-gray-600 leading-relaxed text-justify">
                <p>
                  Kursus ini dibuat khusus untuk kamu yang baru mulai dan ingin belajar langsung tentang User Interface (UI) dan User Experience (UX) design. Di sini kamu akan belajar dasar-dasar membuat tampilan yang menarik, mudah digunakan, dan bisa memberikan pengalaman terbaik bagi pengguna.
                </p>
                <p>
                  Sekarang saat yang pas untuk mulai belajar UI/UX! Permintaan terhadap desainer yang bisa menggabungkan kreativitas dengan pemikiran berfokus pada pengguna terus meningkat di dunia digital. Baik untuk website maupun aplikasi, skill UI/UX jadi salah satu yang paling dicari saat ini.              </p>
                <p>
                  Di akhir kursus, kamu akan mengerjakan proyek desain nyata — mulai dari membuat wireframe, prototype, sampai mockup — untuk menghasilkan desain yang fungsional dan ramah pengguna. Pengalaman ini akan bantu kamu lebih percaya diri untuk mulai karier sebagai desainer UI/UX              </p>
              </div>

            </div>

            <div className="mt-8 p-6 rounded-2xl border border-gray-text">
              <h3 className="text-2xl text-text font-semibold">Apa yang akan kamu pelajari</h3>

              <div className="grid gap-4 mt-4 text-gray-600 leading-relaxed">
                <ul className="list-disc list-inside grid gap-2">
                  <li>Menguasai dasar-dasar penting dalam desain User Interface (UI) dan User Experience (UX) yang dibutuhkan di industri digital.</li>
                  <li>Mempelajari cara membuat tampilan website dan aplikasi yang menarik, mudah digunakan, serta nyaman bagi pengguna.</li>
                  <li>Mendapatkan pengalaman langsung dalam membuat wireframe, prototype, dan melakukan usability testing.</li>
                  <li>Mengembangkan pola pikir desain yang berfokus pada kebutuhan serta pengalaman pengguna.
                    Membangun proyek UI/UX pertama — dari konsep hingga menjadi prototype yang utuh dan fungsional</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Side Bar */}
          <div className="relative w-full h-max">
            <div className="fixed w-[350px] p-6 border rounded-2xl">
              <h2 className="text-text text-left text-3xl font-semibold tracking-wide">IDR 2,000,000</h2>

              <div className="grid gap-2 w-full mt-4">
                <button id={id} className="cursor-pointer bg-primary gap-2 w-full p-3 px-6 rounded-lg text-white flex justify-center">
                <svg className="justify-self-start" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m21,5H3c-.55,0-1,.45-1,1v3.55c0,.48.33.89.8.98.69.14,1.2.76,1.2,1.47s-.5,1.33-1.2,1.47c-.47.09-.8.5-.8.98v3.55c0,.55.45,1,1,1h18c.55,0,1-.45,1-1v-3.55c0-.48-.33-.89-.8-.98-.69-.14-1.2-.76-1.2-1.47s.5-1.33,1.2-1.47c.47-.09.8-.5.8-.98v-3.55c0-.55-.45-1-1-1Zm-1,3.84c-1.2.57-2,1.79-2,3.16s.8,2.59,2,3.16v1.84h-4v-2h-1v2H4v-1.84c1.2-.57,2-1.79,2-3.16s-.8-2.59-2-3.16v-1.84h11v1h1v-1h4v1.84Z"></path><path d="M15 9H16V11H15z"></path><path d="M15 12H16V14H15z"></path></svg>
                  Buy Now</button>  
              </div>

            </div>
          </div>

        </div>

      </section>
    </div>
  )
}