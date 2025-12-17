'use client';
import Image from "next/image";


export default function NewsLetter() {
    return (
        <div className="container mx-auto px-8 py-16">
            <div className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16">
                <div className="grid grid-cols-2">
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Subscribe to our<br />newsletter
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-4 items-start mt-8">
                            <div className="flex-1 w-full sm:max-w-md">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full px-6 py-3 rounded-full bg-white bg-opacity-40 placeholder-gray-text text-text focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <p className="text-xs text-gray-text mt-3 ml-3">
                                    We care about your data in our privacy policy
                                </p>
                            </div>

                            <button className="px-8 py-3 cursor-pointer bg-accent text-white font-semibold rounded-full whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div className="w-full relative overf">
                        <Image className="absolute w-full" src={"/layout-image/newsletter.png"} width={500} height={500} alt={"Newsletter"}></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}