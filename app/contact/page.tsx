// Next.js
import Link from "next/link";
import Image from "next/image";

// Components

// Styles

async function handleContactForm() {
  'use server';
}

export default function Contact() {


  return (
    <div>
      {/* Get in touch */}
      <section className="mt-28">
        <div className="container mx-auto px-8">
          <div className="grid place-items-center gap-2">
            <h2 className="text-text text-5xl font-semibold tracking-wide text-center">
              We're Here To Help
            </h2>
          </div>

          <div className="grid grid-cols-2 items-start justify-center mt-12 gap-16">

            <div className="h-full grid grid-cols-2 gap-10">
              <div className="grid gap-2 p-6 rounded-2xl border border-gray-text">
                <div className="icon p-2 rounded-full bg-primary grid place-items-center justify-self-start">
                  <i className="bx bx-phone text-white text-3xl"></i>
                </div>

                <h3 className="text-2xl font-semibold tracking-wide text-text">Call us</h3>
                <p className="text-gray-text">+62 812 331 457</p>
                <p className="text-gray-text">Monday - Friday</p>
                <p className="text-gray-text">9:00 AM to 5:00 PM</p>
              </div>

              <div className="grid gap-2 p-6 rounded-2xl border border-gray-text">
                <div className="icon p-2 rounded-full bg-primary grid place-items-center justify-self-start">
                  <i className="bx bx-envelope text-white text-3xl"></i>
                </div>

                <h3 className="text-2xl font-semibold tracking-wide text-text">Email Us</h3>
                <p className="text-gray-text">bisma123@gmail.com</p>
                <p className="text-gray-text">Response Time</p>
                <p className="text-gray-text">Within 24 Hours</p>
              </div>
              <div className="grid gap-2 p-6 rounded-2xl border border-gray-text">
                <div className="icon p-2 rounded-full bg-primary grid place-items-center justify-self-start">
                  <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M16 10c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4m-6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2"></path><path d="M11.42 21.81c.17.12.38.19.58.19s.41-.06.58-.19c.3-.22 7.45-5.37 7.42-11.82 0-4.41-3.59-8-8-8s-8 3.59-8 8c-.03 6.44 7.12 11.6 7.42 11.82M12 4c3.31 0 6 2.69 6 6 .02 4.44-4.39 8.43-6 9.74-1.61-1.31-6.02-5.29-6-9.74 0-3.31 2.69-6 6-6"></path></svg>
                </div>

                <h3 className="text-2xl font-semibold tracking-wide text-text">Visit Us</h3>
                <p className="text-gray-text">Jl Lingkar Timur Udayana</p>
                <p className="text-gray-text">No. 14, Jimbaran</p>
                <p className="text-gray-text">Kuta Selatan 80361</p>
              </div>

              <div className="grid gap-2 p-6 rounded-2xl border border-gray-text">
                <div className="icon p-2 rounded-full bg-primary grid place-items-center justify-self-start">
                  <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m20,8h-3v-4c0-1.1-.9-2-2-2H4c-1.1,0-2,.9-2,2v8c0,1.1.9,2,2,2h1v2c0,.38.21.72.55.89.14.07.29.11.45.11.21,0,.42-.07.6-.2l2.4-1.8v2c0,1.1.9,2,2,2h3.67l3.73,2.8c.18.13.39.2.6.2.15,0,.31-.04.45-.11.34-.17.55-.52.55-.89v-2c1.1,0,2-.9,2-2v-7c0-1.1-.9-2-2-2Zm-14,4h-2V4h11v8h-5c-.12,0-.24.03-.35.07-.04.02-.07.04-.11.06-.05.02-.09.04-.14.07l-2.4,1.8v-1c0-.55-.45-1-1-1Zm14,5h-1c-.55,0-1,.45-1,1v1l-2.4-1.8c-.17-.13-.38-.2-.6-.2h-4v-3h4c1.1,0,2-.9,2-2v-2h3v7Z"></path></svg>
                </div>

                <h3 className="text-2xl font-semibold tracking-wide text-text">Chat With Us</h3>
                <p className="text-gray-text">Availabiliity</p>
                <p className="text-gray-text">Monday - Friday</p>
                <p className="text-gray-text">9:00 AM to 5:00 PM</p>
              </div>
            </div>

            <form action={handleContactForm} className="w-full h-full p-6 rounded-2xl border border-gray-text">
              <h3 className="text-2xl font-semibold text-text tracking-wide">Get in Touch With us</h3>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="grid gap-2">
                  <label className="text-text font-semibold text-lg">Full Name <span className="text-primary">*</span></label>
                  <input placeholder="Type Full Name" className="p-3 rounded-2xl border border-gray-text focus:outline-none focus:border-primary" type="text" id="name" name="name" required />
                </div>
                <div className="grid gap-2">
                  <label className="text-text font-semibold text-lg">Email Adress <span className="text-primary">*</span></label>
                  <input placeholder="Type Email Adress" className="p-3 rounded-2xl border border-gray-text focus:outline-none focus:border-primary" type="text" id="email" name="email" required />
                </div>

                <div className="grid gap-2">
                  <label className="text-text font-semibold text-lg">Phone Number <span className="text-primary">*</span></label>
                  <input placeholder="Type Phone Number" className="p-3 rounded-2xl border border-gray-text focus:outline-none focus:border-primary" type="text" id="phone-number" name="phone-number" required />
                </div>
                <div className="grid gap-2">
                  <label className="text-text font-semibold text-lg">Subject <span className="text-primary">*</span></label>
                  <input placeholder="Type Subject" className="p-3 rounded-2xl border border-gray-text focus:outline-none focus:border-primary" type="text" id="subject" name="subject" required />
                </div>

                <div className="grid col-span-2 gap-2">
                  <label className="text-text font-semibold text-lg">Message</label>
                  <textarea placeholder="Let us Know how can we help you " className="p-3 rounded-2xl border border-gray-text focus:outline-none focus:border-primary" id="message" name="message" />
                </div>

                <div className="grid col-span-2 gap-2">
                  <label className="text-text font-medium text-sm">By Submitting, I agree to the <span className="text-primary underline">Privacy Policy</span></label>
                  <button type="submit" className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                    Submit
                  </button>
                </div>

              </div>
            </form>

          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="m-28">
        <div className="container mx-auto px-8">

          <h2 className="text-text text-5xl font-semibold tracking-wide text-center mb-8">
            Our Location
          </h2>

          <iframe className="gmap_iframe w-full h-[300px]" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Jl. Pandu No.9, Sumerta Kelod, Kec. Denpasar Tim., Kota Denpasar, Bali 80239&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
      </section>

    </div>
  )
}