// Components
import CoursesAddPanel from "@/components/AdminComponents/courses/CoursesAddPanel";

export default function AddCourseAdmin() {
  return (
    <div className="w-full">
      <div className="container mx-auto max-w-2xl px-8 my-24">
        <h1 className="text-text mb-8 text-4xl font-semibold tracking-wide">
          Add Course
        </h1>
        <CoursesAddPanel />
      </div>
    </div>
  )
}