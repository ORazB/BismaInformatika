// Components
import Searchbutton from "@/components/SearchComponents/SearchButton";
import CourseList from "@/components/LandingComponents/CourseList";

// Images
export default function Search() {

  return (
    <div>
      {/* Search Bar */}
      <section className="my-8 sm:my-16 lg:my-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid place-items-center gap-2">
            <h2 className="text-text text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-wide text-center">
              Search For Your Course
            </h2>

            <div className="relative flex justify-center items-center mt-4 sm:mt-6 w-full sm:w-3/4 lg:w-1/2">
              <Searchbutton />
            </div>

            <div className="mt-6 sm:mt-8 w-full">
              <CourseList/>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
