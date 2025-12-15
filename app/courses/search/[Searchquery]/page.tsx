export default async function SearchQuery({ params }: { params: { SearchQuery: string } }) {

  const { SearchQuery } = await params

  console.log(await params) 
  return (
    <div>

      {/* Search Result */}
      <section className="m-28">
        <div className="container mx-auto px-8">
          <div className="gap-2">
            <h2 className="text-text text-3xl font-semibold tracking-wide">
              Search Result "{SearchQuery}"
            </h2>
          </div>
        </div>
      </section>
    </div>
  )
}