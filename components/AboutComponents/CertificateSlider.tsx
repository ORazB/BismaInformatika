// Next
import Image from "next/image"

export default function CertificateSlider() {
  return (
    <div className="w-full relative h-full sm:h-[200px]">
      <Image loading={"eager"} className="object-contain" src={"/about-page/certificate.png"} alt="certificate slider" fill></Image>
    </div>
  )
}