// Next
import Image from "next/image";
import Link from "next/link"

// Components
import SearchButton from "@/components/SearchComponents/SearchButton"
import FilterButton from "@/components/SearchComponents/FilterButton"
import SideBar from "@/components/SearchComponents/SideBar"


export default async function SearchQuery({
  params, searchParams
}: {
  params: Promise<{ SearchQuery: string }>;
  searchParams: Promise<{ SortBy: string }>;
}) {

  const { SearchQuery } = await params
  const { SortBy } = await searchParams
  console.log(SortBy);

  return (
    <div>

      {/* Search Result */}
      <section className="m-28 mb-14">
        <div className="container mx-auto px-8">
          <div className="gap-1 grid">
            <h2 className="text-text text-3xl font-semibold">
              {SearchQuery}
            </h2>
            <h3 className="text-text text-2xl font-semibold">
              11,987 Results
            </h3>
          </div>

          <div className="flex items-center mt-4 gap-4">
            <FilterButton />
            <div className="relative mt-4">
              <SearchButton />
            </div>
          </div>

        </div>
      </section>

      {/* Main Page */}
      <section className="mb-28">

        <div className="container mx-auto px-8">

          {/* Side Bar */}
          <div className="flex gap-8 justify-center">
            <SideBar />

            <div className="grid grid-cols-3 gap-8">
              <Link href={""} className="grid gap-2 rounded-2xl border border-gray-text self-start">

                <div className="w-full h-[225px] rounded-2xl rounded-b-none overflow-y-hidden">
                  <Image className="w-full h-full rounded-2xl rounded-b-none object-cover" alt="test" src={"/search-page/image2.png"} width={1000} height={1000}></Image>
                </div>

                <div className="grid gap-2 p-4">
                  <div className="flex justify-between">
                    <p className="text-gray-text font-sm text-sm">Darrel Steward</p>
                    <div className="flex gap-1 items-center">
                      <i className="bx bxs-star text-orange-400"></i>
                      <h4 className="text-text font-semibold">5</h4>
                      <h4 className="text-text font-semibold">(5)</h4>
                    </div>
                  </div>

                  <h3 className="text-text text-xl font-semibold">Blender Essentials - 3D
                    Modelling Training Course</h3>

                  <div className="flex items-center gap-2">
                    <div className="p-2 px-4 bg-primary rounded-full">
                      <h4 className="text-white">Blender</h4>
                    </div>
                    <div className="p-2 px-4 bg-primary rounded-full">
                      <h4 className="text-white">Computer</h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex gap-2 text-gray-text font-sm text-sm">
                      <i className="text-lg bx bx-signal-5"></i>
                      <p>Any Level</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-text font-sm text-sm">
                      <i className="text-lg bx bx-group"></i>
                      <p>100</p>
                    </div>
                  </div>

                </div>

              </Link>

              <Link href={""} className="grid gap-2 rounded-2xl border border-gray-text self-start">

                <div className="w-full h-[225px] rounded-2xl rounded-b-none overflow-y-hidden">
                  <Image className="w-full h-full rounded-2xl rounded-b-none object-cover" alt="test" src={"/search-page/image2.png"} width={1000} height={1000}></Image>
                </div>

                <div className="grid gap-2 p-4">
                  <div className="flex justify-between">
                    <p className="text-gray-text font-sm text-sm">Darrel Steward</p>
                    <div className="flex gap-1 items-center">
                      <i className="bx bxs-star text-orange-400"></i>
                      <h4 className="text-text font-semibold">5</h4>
                      <h4 className="text-text font-semibold">(5)</h4>
                    </div>
                  </div>

                  <h3 className="text-text text-xl font-semibold">Blender Essentials - 3D
                    Modelling Training Course</h3>

                  <div className="flex items-center gap-2">
                    <div className="p-2 px-4 bg-primary rounded-full">
                      <h4 className="text-white">Blender</h4>
                    </div>
                    <div className="p-2 px-4 bg-primary rounded-full">
                      <h4 className="text-white">Computer</h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex gap-2 text-gray-text font-sm text-sm">
                      <i className="text-lg bx bx-signal-5"></i>
                      <p>Any Level</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-text font-sm text-sm">
                      <i className="text-lg bx bx-group"></i>
                      <p>100</p>
                    </div>
                  </div>

                </div>

              </Link>

              <Link href={""} className="grid gap-2 rounded-2xl border border-gray-text self-start">

                <div className="w-full h-[225px] rounded-2xl rounded-b-none overflow-y-hidden">
                  <Image className="w-full h-full rounded-2xl rounded-b-none object-cover" alt="test" src={"/search-page/image2.png"} width={1000} height={1000}></Image>
                </div>

                <div className="grid gap-2 p-4">
                  <div className="flex justify-between">
                    <p className="text-gray-text font-sm text-sm">Darrel Steward</p>
                    <div className="flex gap-1 items-center">
                      <i className="bx bxs-star text-orange-400"></i>
                      <h4 className="text-text font-semibold">5</h4>
                      <h4 className="text-text font-semibold">(5)</h4>
                    </div>
                  </div>

                  <h3 className="text-text text-xl font-semibold">Blender Essentials - 3D
                    Modelling Training Course</h3>

                  <div className="flex items-center gap-2">
                    <div className="p-2 px-4 bg-primary rounded-full">
                      <h4 className="text-white">Blender</h4>
                    </div>
                    <div className="p-2 px-4 bg-primary rounded-full">
                      <h4 className="text-white">Computer</h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex gap-2 text-gray-text font-sm text-sm">
                      <i className="text-lg bx bx-signal-5"></i>
                      <p>Any Level</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-text font-sm text-sm">
                      <i className="text-lg bx bx-group"></i>
                      <p>100</p>
                    </div>
                  </div>

                </div>

              </Link>

              <Link href={""} className="grid gap-2 rounded-2xl border border-gray-text self-start">

                <div className="w-full h-[225px] rounded-2xl rounded-b-none overflow-y-hidden">
                  <Image className="w-full h-full rounded-2xl rounded-b-none object-cover" alt="test" src={"/search-page/image2.png"} width={1000} height={1000}></Image>
                </div>

                <div className="grid gap-2 p-4">
                  <div className="flex justify-between">
                    <p className="text-gray-text font-sm text-sm">Darrel Steward</p>
                    <div className="flex gap-1 items-center">
                      <i className="bx bxs-star text-orange-400"></i>
                      <h4 className="text-text font-semibold">5</h4>
                      <h4 className="text-text font-semibold">(5)</h4>
                    </div>
                  </div>

                  <h3 className="text-text text-xl font-semibold">Blender Essentials - 3D
                    Modelling Training Course</h3>

                  <div className="flex items-center gap-2">
                    <div className="p-2 px-4 bg-primary rounded-full">
                      <h4 className="text-white">Blender</h4>
                    </div>
                    <div className="p-2 px-4 bg-primary rounded-full">
                      <h4 className="text-white">Computer</h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex gap-2 text-gray-text font-sm text-sm">
                      <i className="text-lg bx bx-signal-5"></i>
                      <p>Any Level</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-text font-sm text-sm">
                      <i className="text-lg bx bx-group"></i>
                      <p>100</p>
                    </div>
                  </div>

                </div>

              </Link>
            </div>

          </div>

        </div>

      </section>
    </div>
  )
}