// Next
import Image from "next/image"

export default function CertificateSlider() {
  return (
    <div className="w-full h-[300px] relative">
      <Image className="object-contain" src={"/about-page/certificate.png"} alt="certificate slider" fill></Image>
    </div>
  )
}