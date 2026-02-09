export default function Terms() {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 md:p-12">
          {/* Header */}
          <div className="mb-8 pb-6 border-b-4 border-primary">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Kebijakan Privasi
            </h1>
            <p className="text-gray-600">
              Bisma Informatika Indonesia
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              Kami Bisma Informatika Indonesia, sangat menghargai privasi pelanggan. 
              Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
              dan melindungi informasi pribadi yang Anda berikan kepada kami melalui situs web kami.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Informasi yang Kami Kumpulkan
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kami mengumpulkan berbagai jenis informasi dengan tujuan memberikan dan 
              meningkatkan layanan kami kepada Anda.
            </p>

            <div className="ml-4 mb-4">
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                a. Informasi Pribadi
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Saat menggunakan layanan kami, kami dapat meminta Anda untuk memberikan 
                informasi pribadi tertentu yang dapat digunakan untuk menghubungi atau 
                mengidentifikasi Anda. Informasi pribadi dapat mencakup, tetapi tidak terbatas pada:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Nama</li>
                <li>Alamat email</li>
                <li>Nomor telepon</li>
                <li>Alamat</li>
              </ul>
            </div>

            <div className="ml-4">
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                b. Data Penggunaan
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Kami juga dapat mengumpulkan informasi bagaimana layanan kami diakses dan 
                digunakan ("Data Penggunaan"). Data Penggunaan ini dapat mencakup informasi 
                seperti alamat Protokol Internet komputer Anda (mis. alamat IP), jenis browser, 
                versi browser, halaman situs kami yang Anda kunjungi, waktu dan tanggal kunjungan 
                Anda, waktu yang dihabiskan pada halaman tersebut, pengenal perangkat unik, dan 
                data diagnostik lainnya.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Penggunaan Informasi
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Bisma Informatika Indonesia menggunakan data yang dikumpulkan untuk berbagai tujuan:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Menyediakan dan memelihara layanan</li>
              <li>Memberitahu Anda tentang perubahan pada layanan kami</li>
              <li>Memungkinkan Anda untuk berpartisipasi dalam fitur interaktif layanan kami 
                  saat Anda memilih untuk melakukannya</li>
              <li>Memberikan dukungan pelanggan</li>
              <li>Mengumpulkan analisis atau informasi berharga yang memungkinkan kami untuk 
                  meningkatkan layanan kami</li>
              <li>Memantau penggunaan layanan kami</li>
              <li>Mendeteksi, mencegah, dan mengatasi masalah teknis</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Perlindungan Data
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Keamanan data Anda adalah prioritas kami, namun ingat bahwa tidak ada metode 
              transmisi melalui Internet, atau metode penyimpanan elektronik yang 100% aman. 
              Sementara kami berusaha menggunakan cara yang dapat diterima secara komersial 
              untuk melindungi informasi pribadi Anda, kami tidak dapat menjamin keamanan mutlaknya.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Hak Anda
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Anda memiliki hak untuk mengakses, memperbarui, atau menghapus informasi pribadi 
              Anda yang kami miliki. Anda dapat menghubungi kami untuk membantu mengakses, 
              memperbarui, atau menghapus informasi pribadi Anda.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Perubahan pada Kebijakan Privasi Ini
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Kami akan 
              memberitahu Anda tentang perubahan apa pun dengan memposting Kebijakan Privasi 
              baru di halaman ini. Kami menyarankan Anda untuk meninjau Kebijakan Privasi ini 
              secara berkala untuk setiap perubahan. Perubahan pada Kebijakan Privasi ini berlaku 
              efektif saat mereka diposting di halaman ini.
            </p>
          </section>

          {/* Section 6 - Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Hubungi Kami
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami:
            </p>
            <div className="">
              <div className="space-y-3">
                <div className="flex">
                  <span className="font-medium text-gray-900 w-32">Email</span>
                  <span className="text-gray-700">: info@bismainformatika.com</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-900 w-32">Telepon</span>
                  <span className="text-gray-700">: 087-817-800-900</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-900 w-32">Alamat</span>
                  <span className="text-gray-700">: Jl. Pandu No.9 Tanjung Bungkak Denpasar – Bali</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}