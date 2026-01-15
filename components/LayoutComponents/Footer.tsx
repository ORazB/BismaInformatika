export default function Footer() {
  return (
    <div>
      <footer className="w-full bg-red-700 text-white">
        <div className="container mx-auto px-6 py-14">
          <div
            className="grid gap-12 
                    md:grid-cols-2 
                    lg:grid-cols-4"
          >
            {/* ================= LOGO & DESCRIPTION ================= */}
            <div className="space-y-4">
              <img
                src="/logos/logo-white.png"
                alt="Bisma Informatika"
                className="h-12 w-auto"
              />

              <p className="text-sm leading-relaxed max-w-xs">
                Bisma Informatika Indonesia — Lembaga pelatihan dan sertifikasi
                profesional di bidang teknologi informasi, desain, dan digital
                marketing.
              </p>
            </div>

            {/* ================= MENU ================= */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Menu</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/courses" className="hover:underline">
                    Course
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* ================= HELP ================= */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Help</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/support" className="hover:underline">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* ================= RESOURCE ================= */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resource</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/terms" className="hover:underline">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ================= COPYRIGHT ================= */}
          <div className="mt-12 text-center text-sm opacity-80">
            © {new Date().getFullYear()} Bisma Informatika Indonesia. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
