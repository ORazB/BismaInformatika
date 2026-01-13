"use client";
import { SerializedUser, SerializedCourse } from "@/types/serialized";
import Image from "next/image";
import Link from "next/link";

interface ProfilePageProps {
  user: SerializedUser | null;
  clerkUser: any;
  completedEnrollments: number;
  allCourses: SerializedCourse[];
}

export default function ProfilePage({ 
  user, 
  clerkUser, 
  completedEnrollments, 
  allCourses 
}: ProfilePageProps) {
  return (
    <div>
      <section className="m-28">
      <div className="container mx-auto px-8">
        <h1 className="text-text text-4xl text-left font-semibold tracking-wide">User</h1>

        <div className="grid grid-cols-2 gap-4 p-8 border border-gray-text rounded-lg mt-8">
          <div className="flex gap-4 w-full h-full items-center">
            <Image src={clerkUser.imageUrl || "/profile-page/profile-placeholder.png"} alt="User Avatar" width={150} height={150} className="w-[150px] h-[150px] object-cover rounded-full"></Image>
            <div className="flex flex-col gap-2">
              <h3 className="text-text font-semibold text-3xl">{user?.username}</h3>
              <Link href={`/profile/${user?.id}/edit`} className="text-white bg-primary p-3 px-7 rounded-3xl text-lg cursor-pointer self-start">Edit User</Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <div className="grid place-items-center p-3 bg-primary rounded-full text-4xl text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill={"currentColor"} viewBox="0 0 24 24">
                  <path d="M16 10c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4m-6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2"></path>
                  <path d="M11.42 21.81c.17.12.38.19.58.19s.41-.06.58-.19c.3-.22 7.45-5.37 7.42-11.82 0-4.41-3.59-8-8-8s-8 3.59-8 8c-.03 6.44 7.12 11.6 7.42 11.82M12 4c3.31 0 6 2.69 6 6 .02 4.44-4.39 8.43-6 9.74-1.61-1.31-6.02-5.29-6-9.74 0-3.31 2.69-6 6-6"></path>
                </svg>
              </div>
              <div className="grid gap-1">
                <p className="text-sm font-light text-gray-text">Address</p>
                <h4 className="font-semibold text-text">{user?.address ? user?.address : "No address provided"}</h4>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="grid place-items-center p-3 bg-primary rounded-full text-4xl text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m20,4H4c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2V6c0-1.1-.9-2-2-2Zm-8.61,10.79c.18.14.4.21.61.21s.43-.07.61-.21l1.55-1.21,4.42,4.42H5.41l4.42-4.42,1.55,1.21Zm8.61-8.79v.51s-8,6.22-8,6.22L4,6.51v-.51h16Zm0,3.04v7.54s-4.24-4.24-4.24-4.24l4.24-3.3Zm-11.76,3.3l-4.24,4.24v-7.54l4.24,3.3Zm11.76,5.66h0s0,0,0,0h0Z"></path></svg>
              </div>
              <div className="grid gap-1">
                <p className="text-sm font-light text-gray-text">Gmail</p>
                <h4 className="font-semibold text-text">{user?.email ? user?.email : "No email provided"}</h4>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="grid place-items-center p-3 bg-primary rounded-full text-4xl text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="M18.07 22h.35c.47-.02.9-.26 1.17-.64l2.14-3.09c.23-.33.32-.74.24-1.14s-.31-.74-.64-.97l-4.64-3.09a1.47 1.47 0 0 0-.83-.25c-.41 0-.81.16-1.1.48l-1.47 1.59c-.69-.43-1.61-1.07-2.36-1.82-.72-.72-1.37-1.64-1.82-2.36l1.59-1.47c.54-.5.64-1.32.23-1.93L7.84 2.67c-.22-.33-.57-.57-.97-.64a1.455 1.455 0 0 0-1.13.24L2.65 4.41c-.39.27-.62.7-.64 1.17-.03.69-.16 6.9 4.68 11.74 4.35 4.35 9.81 4.69 11.38 4.69ZM6.88 10.05c-.16.15-.21.39-.11.59.05.09 1.15 2.24 2.74 3.84 1.6 1.6 3.75 2.7 3.84 2.75.2.1.44.06.59-.11l1.99-2.15 3.86 2.57-1.7 2.46c-1.16 0-6.13-.24-9.99-4.1S4 7.06 4 5.91l2.46-1.7 2.57 3.86-2.15 1.99Z"></path></svg>
              </div>
              <div className="grid gap-1">
                <p className="text-sm font-light text-gray-text">Phone</p>
                <h4 className="font-semibold text-text">{user?.phoneNumber ? user?.phoneNumber : "No phone number provided"}</h4>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="grid place-items-center p-3 bg-primary rounded-full text-4xl text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m21.45,8.61l-9-4.5c-.28-.14-.61-.14-.89,0l-6,3-3,1.5-1,.5c-.34.17-.55.52-.55.89v6h2v-5.38l2,1v3.83c0,2.06,3.12,4.56,7,4.56s7-2.49,7-4.56v-3.83l2.45-1.22c.34-.17.55-.52.55-.89s-.21-.72-.55-.89Zm-15,.29l5.55-2.78,6.76,3.38-6.76,3.38-6.76-3.38,1.21-.61h0Zm10.55,6.55c0,.76-2.11,2.56-5,2.56s-5-1.79-5-2.56v-2.83l4.55,2.28c.14.07.29.11.45.11s.31-.04.45-.11l4.55-2.28v2.83Z"></path></svg>
              </div>
              <div className="grid gap-1">
                <p className="text-sm font-light text-gray-text">Completed Courses</p>
                <h4 className="font-semibold text-text">{completedEnrollments || 0}</h4>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* Course List */}
    <section className="m-28">
      <div className="container mx-auto px-8">
        <h3 className="font-semibold tracking-wide text-4xl">My Course</h3>

        <div className="grid gap-4">
          {allCourses && allCourses.map((course) => (
            <div key={course.id} className="flex items-center justify-between">
              <div className="flex justify-center items-center gap-4 mt-8">
                <Image 
                  className="rounded-xl object-cover w-[225px] h-[150px]" 
                  src={
                    course.imageUuid
                      ? `https://63hy5293v3.ucarecd.net/${course.imageUuid}/-/preview/736x736/`
                      : "/course-page/course-placeholder.png"
                  }
                  alt="Course Details" 
                  width={250} 
                  height={250}
                />
                <div className="grid gap-2">
                  <h3 className="text-3xl font-semibold tracking-wide">
                    {course.title || 'UI & UX'}
                  </h3>
                  <div className="flex gap-2 items-center text-sm text-gray-text font-light">
                    <p>START DATE: <span className="text-primary font-bold">
                      {course.startDate ? new Date(course.startDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : 'N/A'}
                    </span></p>
                    <p>|</p>
                    <p>END DATE: <span className="text-primary font-bold">
                      {course.endDate ? new Date(course.endDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : 'N/A'}
                    </span></p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                {/*<div className="flex items-center gap-2">
                  <i className="bx bxs-star text-3xl text-orange-400"></i>
                  <h3 className="text-text text-4xl font-semibold">{course.rating || '8.3'}</h3>
                </div>*/}
                <Link href={`/courses/${course.id}/details`} className="cursor-pointer bg-primary transition hover:bg-primary/80 p-5 px-8 text-white font-sm rounded-lg">
                  VIEW COURSE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}