// Next
import Image from "next/image"

export default function CertificateSlider() {
  return (
    <div className="w-full relative xl:h-[350px] h-[200px]">
      <Image className="object-cover" src={"/about-page/certificate.png"} alt="certificate slider" fill></Image>
    </div>
  )
}