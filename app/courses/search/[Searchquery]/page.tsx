// Components
import SearchButton from "@/components/SearchComponents/SearchButton"
import FilterButton from "@/components/SearchComponents/FilterButton"

export default async function SearchQuery({
  params, searchParams 
  }: {
    params: Promise<{ SearchQuery: string }>;
    searchParams: Promise<{ SortBy?: string }>;})
  {

  const { SearchQuery } = await params
  const { SortBy } = await searchParams
  console.log(SortBy);

  return (
    <div>

      {/* Search Result */}
      <section className="m-28">
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

          {/* <h1>{SortBy}</h1> */}

        </div>
      </section>
    </div>
  )
}