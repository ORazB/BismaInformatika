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
    <div className="min-h-screen bg-gray-50">
      {/* User Section */}
      <section className="py-6 md:py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">User</h1>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 md:p-8">
          {/* Mobile & Tablet Layout */}
          <div className="lg:hidden space-y-6">
            {/* Profile Info - Mobile/Tablet */}
            <div className="flex flex-col items-center text-center pb-6 border-b border-gray-200">
              <Image 
                src={clerkUser.imageUrl || "/profile-page/profile-placeholder.png"} 
                alt="User Avatar" 
                width={150} 
                height={150}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-4"
              />
              <div className="space-y-3 w-full">
                <div className="flex items-center justify-center gap-3">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{user?.username}</h2>
                  <div className="flex items-center gap-1 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600">7 September 2025</span>
                  </div>
                </div>
                <p className="text-gray-400 text-base md:text-lg">Student</p>
                <Link 
                  href={`/profile/${user?.id}/edit`}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2.5 px-8 rounded-full transition-colors inline-block"
                >
                  Edit Profile
                </Link>
              </div>
            </div>

            {/* Info Grid - Mobile/Tablet */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="white" viewBox="0 0 24 24">
                    <path d="M16 10c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4m-6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2"></path>
                    <path d="M11.42 21.81c.17.12.38.19.58.19s.41-.06.58-.19c.3-.22 7.45-5.37 7.42-11.82 0-4.41-3.59-8-8-8s-8 3.59-8 8c-.03 6.44 7.12 11.6 7.42 11.82M12 4c3.31 0 6 2.69 6 6 .02 4.44-4.39 8.43-6 9.74-1.61-1.31-6.02-5.29-6-9.74 0-3.31 2.69-6 6-6"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Address</p>
                  <p className="text-sm font-semibold text-gray-900">{user?.address ? user?.address : "No address provided"}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="white" viewBox="0 0 24 24">
                    <path d="m20,4H4c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2V6c0-1.1-.9-2-2-2Zm-8.61,10.79c.18.14.4.21.61.21s.43-.07.61-.21l1.55-1.21,4.42,4.42H5.41l4.42-4.42,1.55,1.21Zm8.61-8.79v.51s-8,6.22-8,6.22L4,6.51v-.51h16Zm0,3.04v7.54s-4.24-4.24-4.24-4.24l4.24-3.3Zm-11.76,3.3l-4.24,4.24v-7.54l4.24,3.3Zm11.76,5.66h0s0,0,0,0h0Z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Gmail</p>
                  <p className="text-sm font-semibold text-gray-900 break-all">{user?.email ? user?.email : "No email provided"}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="white" viewBox="0 0 24 24">
                    <path d="M18.07 22h.35c.47-.02.9-.26 1.17-.64l2.14-3.09c.23-.33.32-.74.24-1.14s-.31-.74-.64-.97l-4.64-3.09a1.47 1.47 0 0 0-.83-.25c-.41 0-.81.16-1.1.48l-1.47 1.59c-.69-.43-1.61-1.07-2.36-1.82-.72-.72-1.37-1.64-1.82-2.36l1.59-1.47c.54-.5.64-1.32.23-1.93L7.84 2.67c-.22-.33-.57-.57-.97-.64a1.455 1.455 0 0 0-1.13.24L2.65 4.41c-.39.27-.62.7-.64 1.17-.03.69-.16 6.9 4.68 11.74 4.35 4.35 9.81 4.69 11.38 4.69ZM6.88 10.05c-.16.15-.21.39-.11.59.05.09 1.15 2.24 2.74 3.84 1.6 1.6 3.75 2.7 3.84 2.75.2.1.44.06.59-.11l1.99-2.15 3.86 2.57-1.7 2.46c-1.16 0-6.13-.24-9.99-4.1S4 7.06 4 5.91l2.46-1.7 2.57 3.86-2.15 1.99Z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Phone</p>
                  <p className="text-sm font-semibold text-gray-900">{user?.phoneNumber ? user?.phoneNumber : "No phone number provided"}</p>
                </div>
              </div>

              {/* Completed Courses */}
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="white" viewBox="0 0 24 24">
                    <path d="m21.45,8.61l-9-4.5c-.28-.14-.61-.14-.89,0l-6,3-3,1.5-1,.5c-.34.17-.55.52-.55.89v6h2v-5.38l2,1v3.83c0,2.06,3.12,4.56,7,4.56s7-2.49,7-4.56v-3.83l2.45-1.22c.34-.17.55-.52.55-.89s-.21-.72-.55-.89Zm-15,.29l5.55-2.78,6.76,3.38-6.76,3.38-6.76-3.38,1.21-.61h0Zm10.55,6.55c0,.76-2.11,2.56-5,2.56s-5-1.79-5-2.56v-2.83l4.55,2.28c.14.07.29.11.45.11s.31-.04.45-.11l4.55-2.28v2.83Z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Completed Courses</p>
                  <p className="text-sm font-semibold text-gray-900">{completedEnrollments || 0}</p>
                </div>
              </div>
            </div>

            {/* Collapse Button - Only Mobile */}
            <div className="flex justify-center md:hidden pt-2">
              <button className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Left side - Profile */}
            <div className="flex items-center gap-6">
              <Image 
                src={clerkUser.imageUrl || "/profile-page/profile-placeholder.png"} 
                alt="User Avatar" 
                width={150} 
                height={150}
                className="w-40 h-40 rounded-full object-cover"
              />
              <div className="flex flex-col gap-3">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{user?.username}</h2>
                  <p className="text-gray-400 text-lg">Student</p>
                </div>
                <Link 
                  href={`/profile/${user?.id}/edit`}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2.5 px-8 rounded-full transition-colors inline-block text-center"
                >
                  Edit Profile
                </Link>
              </div>
            </div>

            {/* Right side - Info Grid */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-6">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="white" viewBox="0 0 24 24">
                    <path d="M16 10c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4m-6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2"></path>
                    <path d="M11.42 21.81c.17.12.38.19.58.19s.41-.06.58-.19c.3-.22 7.45-5.37 7.42-11.82 0-4.41-3.59-8-8-8s-8 3.59-8 8c-.03 6.44 7.12 11.6 7.42 11.82M12 4c3.31 0 6 2.69 6 6 .02 4.44-4.39 8.43-6 9.74-1.61-1.31-6.02-5.29-6-9.74 0-3.31 2.69-6 6-6"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Address</p>
                  <p className="text-sm font-semibold text-gray-900">{user?.address ? user?.address : "No address provided"}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="white" viewBox="0 0 24 24">
                    <path d="m20,4H4c-1.1,0-2,.9-2,2v12c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2V6c0-1.1-.9-2-2-2Zm-8.61,10.79c.18.14.4.21.61.21s.43-.07.61-.21l1.55-1.21,4.42,4.42H5.41l4.42-4.42,1.55,1.21Zm8.61-8.79v.51s-8,6.22-8,6.22L4,6.51v-.51h16Zm0,3.04v7.54s-4.24-4.24-4.24-4.24l4.24-3.3Zm-11.76,3.3l-4.24,4.24v-7.54l4.24,3.3Zm11.76,5.66h0s0,0,0,0h0Z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Gmail</p>
                  <p className="text-sm font-semibold text-gray-900">{user?.email ? user?.email : "No email provided"}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="white" viewBox="0 0 24 24">
                    <path d="M18.07 22h.35c.47-.02.9-.26 1.17-.64l2.14-3.09c.23-.33.32-.74.24-1.14s-.31-.74-.64-.97l-4.64-3.09a1.47 1.47 0 0 0-.83-.25c-.41 0-.81.16-1.1.48l-1.47 1.59c-.69-.43-1.61-1.07-2.36-1.82-.72-.72-1.37-1.64-1.82-2.36l1.59-1.47c.54-.5.64-1.32.23-1.93L7.84 2.67c-.22-.33-.57-.57-.97-.64a1.455 1.455 0 0 0-1.13.24L2.65 4.41c-.39.27-.62.7-.64 1.17-.03.69-.16 6.9 4.68 11.74 4.35 4.35 9.81 4.69 11.38 4.69ZM6.88 10.05c-.16.15-.21.39-.11.59.05.09 1.15 2.24 2.74 3.84 1.6 1.6 3.75 2.7 3.84 2.75.2.1.44.06.59-.11l1.99-2.15 3.86 2.57-1.7 2.46c-1.16 0-6.13-.24-9.99-4.1S4 7.06 4 5.91l2.46-1.7 2.57 3.86-2.15 1.99Z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Phone</p>
                  <p className="text-sm font-semibold text-gray-900">{user?.phoneNumber ? user?.phoneNumber : "No phone number provided"}</p>
                </div>
              </div>

              {/* Completed Courses */}
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="white" viewBox="0 0 24 24">
                    <path d="m21.45,8.61l-9-4.5c-.28-.14-.61-.14-.89,0l-6,3-3,1.5-1,.5c-.34.17-.55.52-.55.89v6h2v-5.38l2,1v3.83c0,2.06,3.12,4.56,7,4.56s7-2.49,7-4.56v-3.83l2.45-1.22c.34-.17.55-.52.55-.89s-.21-.72-.55-.89Zm-15,.29l5.55-2.78,6.76,3.38-6.76,3.38-6.76-3.38,1.21-.61h0Zm10.55,6.55c0,.76-2.11,2.56-5,2.56s-5-1.79-5-2.56v-2.83l4.55,2.28c.14.07.29.11.45.11s.31-.04.45-.11l4.55-2.28v2.83Z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Completed Courses</p>
                  <p className="text-sm font-semibold text-gray-900">{completedEnrollments || 0}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course List */}
      <section className="py-6 md:py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">My Course</h2>

        {/* Tabs - Only on Desktop */}
        <div className="hidden lg:flex gap-8 border-b-2 border-gray-200 mb-8">
          <button className="pb-3 px-1 font-semibold text-gray-900 border-b-4 border-primary">
            ALL COURSES
          </button>
        </div>

        {/* Course Cards */}
        <div className="space-y-4 md:space-y-6">
          {allCourses && allCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-3 md:gap-6">
                <Image 
                  className="rounded-xl object-cover w-16 h-16 md:w-24 md:h-24" 
                  src={
                    course.imageUuid
                      ? `https://63hy5293v3.ucarecd.net/${course.imageUuid}/-/preview/736x736/`
                      : "/course-page/course-placeholder.png"
                  }
                  alt="Course Details" 
                  width={250} 
                  height={250}
                />
                <div className="flex flex-col gap-1 md:gap-2">
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900">
                    {course.title || 'UI & UX'}
                  </h3>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                    <span>
                      {course.startDate ? new Date(course.startDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      }) : 'N/A'}
                    </span>
                    <span>|</span>
                    <span>
                      {course.endDate ? new Date(course.endDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      }) : 'N/A'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between md:justify-end gap-4 md:gap-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="text-xl md:text-2xl font-bold text-gray-900">8.9</span>
                </div>
                <Link 
                  href={`/courses/${course.id}/details`}
                  className="bg-primary hover:bg-primary/80 text-white font-semibold py-2.5 md:py-3 px-6 md:px-8 rounded-lg transition-colors text-sm md:text-base whitespace-nowrap"
                >
                  VIEW COURSE
                </Link>
              </div>
            </div>    
          ))}
        </div>
      </section>
    </div>
  )
}