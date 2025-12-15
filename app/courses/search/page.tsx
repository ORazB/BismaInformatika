// Components
import Searchbutton from "@/components/SearchComponents/SearchButton";
import CourseList from "@/components/LandingComponents/CourseList";

// Images
export default function Search() {

  return (
    <div>
      {/* Search Bar */}
      <section className="m-28">
        <div className="container mx-auto px-8">
          <div className="grid place-items-center gap-2">
            <h2 className="text-text text-5xl font-semibold tracking-wide text-center">
              Search For Your Course
            </h2>

            <div className="relative flex justify-center items-center mt-6 w-1/2">
              <Searchbutton />
            </div>

            <div className="mt-8">
              <CourseList/>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
