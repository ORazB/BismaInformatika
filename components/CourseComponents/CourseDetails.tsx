"use client";
// Next
import Image from "next/image";
import { useRouter } from "next/navigation";

import { User } from "@prisma/client";

import { Category } from "@prisma/client";

interface SerailizedCourse {
  id: number;
  title: string;
  description: string;
  imageUuid: string;
  categoryId: number | null;
  startDate: Date | null;
  endDate: Date | null;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export default function CourseDetails({
  course,
  category,
  user,
  purchased,
}: {
  course: SerailizedCourse;
  category: Category;
  user: User;
  purchased: boolean;
}) {
  const router = useRouter();

  if (!user) {
    return null;
  }

  const handleBuy = async () => {
    const response = await fetch(`/api/courses/buy?id=${course.id}`, {
      method: "POST",
    });

    if (response.ok) {
      console.log("UserCourse bought successfully");
      router.push(`/profile/${user.id}`);
    } else {
      const data = await response.json();
      console.error("Failed to buy course", data.error);
    }
  };
  
  const handleDelete = async () => {
    const response = await fetch(`/api/courses/refund?id=${course.id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("UserCourse deleted successfully");
      router.push(`/courses/${course.id}/details`);
    } else {
      const data = await response.json();
      console.error("Failed to buy course", data.error);
    }
  };

  return (
    <section className="container mx-auto px-8">
      <div className="grid grid-cols-3 gap-24 m-28">
        <div className="col-span-2">
          <div className="grid gap-4">
            <h3 className="text-text text-4xl tracking-wide font-semibold">
              {course.title}
            </h3>

            <div className="flex gap-4 items-center">
              <button className="bg-accent p-3 px-6 text-white rounded-lg">
                {category?.name ?? "Unknown Category"}
              </button>
              {/*<div className="flex gap-2">
                <h5 className="text-text font-semibold text-2xl">5.0</h5>
                <div className="flex items-center text-xl">
                  <i className="text-orange-400 bx bxs-star"></i>
                  <i className="text-orange-400 bx bxs-star"></i>
                  <i className="text-orange-400 bx bxs-star"></i>
                  <i className="text-orange-400 bx bxs-star"></i>
                  <i className="text-orange-400 bx bxs-star"></i>
                </div>
              </div>*/}
            </div>
          </div>

          <div className="flex justify-between gap-4 mt-8">
            {/* Date */}
            <div>
              <p className="text-gray-text font-semibold text-lg">
                Last Updates
              </p>
              <h4 className="text-text font-semibold text-lg">
                {course.updatedAt.toLocaleDateString()}
              </h4>
            </div>

            {/* Level */}
            <div>
              <p className="text-gray-text font-semibold text-lg">Level</p>
              <h4 className="text-text font-semibold text-lg">Any Level</h4>
            </div>

            {/* Students */}
            <div>
              <p className="text-gray-text font-semibold text-lg">Students</p>
              <h4 className="text-text font-semibold text-lg">151,410</h4>
            </div>

            {/* Language */}
            <div>
              <p className="text-gray-text font-semibold text-lg">Language</p>
              <h4 className="text-text font-semibold text-lg">Indonesian</h4>
            </div>

            <div className="flex gap-2 items-center">
              <button className="cursor-pointer bg-gray-200 p-3 px-6 rounded-xl text-lg font-semibold transition group hover:bg-primary hover:text-white">
                <i className="bx bxs-heart text-2xl align-middle hover:text-white"></i>{" "}
                Wishlist
              </button>
              <button className="cursor-pointer bg-gray-200 p-3 px-6 rounded-xl text-lg font-semibold transition group hover:bg-primary hover:text-white">
                <i className="bx bxs-share text-2xl align-middle hover:text-white"></i>{" "}
                Share
              </button>
            </div>
          </div>

          {/* Course Image */}
          <div className="mt-8">
            <Image
              className="w-full object-cover rounded-xl"
              src={
                course.imageUuid
                  ? `https://63hy5293v3.ucarecd.net/${course.imageUuid}/-/preview/736x736/`
                  : "/course-page/course-placeholder.png"
              }
              alt="Course Placeholder"
              width={800}
              height={450}
            ></Image>
          </div>

          {/* Course Description */}
          <div className="mt-8 p-6 rounded-2xl border border-gray-text">
            <h3 className="text-2xl text-text font-semibold">
              Course Description
            </h3>

            {/* Main Description */}
            <div className="grid gap-4 mt-4 text-gray-600 leading-relaxed text-justify">
              {course.description
                .split("\n")
                .filter((line) => line.trim())
                .map((line, index) => (
                  <p key={index}>{line.trim()}</p>
                ))}
            </div>
          </div>

          {/*<div className="mt-8 p-6 rounded-2xl border border-gray-text">
            <h3 className="text-2xl text-text font-semibold">
              Apa yang akan kamu pelajari
            </h3>

            <div className="grid gap-4 mt-4 text-gray-600 leading-relaxed">
              <ul className="list-disc list-inside grid gap-2">
                <li>
                  Menguasai dasar-dasar penting dalam desain User Interface
                  (UI) dan User Experience (UX) yang dibutuhkan di industri
                  digital.
                </li>
                <li>
                  Mempelajari cara membuat tampilan website dan aplikasi yang
                  menarik, mudah digunakan, serta nyaman bagi pengguna.
                </li>
                <li>
                  Mendapatkan pengalaman langsung dalam membuat wireframe,
                  prototype, dan melakukan usability testing.
                </li>
                <li>
                  Mengembangkan pola pikir desain yang berfokus pada kebutuhan
                  serta pengalaman pengguna. Membangun proyek UI/UX pertama —
                  dari konsep hingga menjadi prototype yang utuh dan
                  fungsional
                </li>
              </ul>
            </div>
          </div>*/}
        </div>

        {/* Side Bar */}
        <div className="relative w-full h-max">
          <div className="fixed w-[350px] p-6 border rounded-2xl">
            <h2 className="text-text text-left text-3xl font-semibold tracking-wide">
              IDR {course.price.toLocaleString()}
            </h2>

            <div className="grid gap-2 w-full mt-4">
              {purchased ? (
                <div className="grid gap-4">
                  <button
                    type="button"
                    className="cursor-pointer bg-transparent text-primary ring-2 ring-primary gap-2 w-full p-3 px-6 rounded-lg flex justify-center"
                  >
                    Already Owned
                  </button>
                  <button
                    type="button"
                    onClick={handleDelete}
                    className="cursor-pointer bg-primary gap-2 w-full p-3 px-6 rounded-lg text-white flex justify-center"
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleBuy}
                  className="cursor-pointer bg-primary gap-2 w-full p-3 px-6 rounded-lg text-white flex justify-center"
                >
                  <svg
                    className="justify-self-start"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill={"currentColor"}
                    viewBox="0 0 24 24"
                  >
                    {/* Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free */}
                    <path d="m21,5H3c-.55,0-1,.45-1,1v3.55c0,.48.33.89.8.98.69.14,1.2.76,1.2,1.47s-.5,1.33-1.2,1.47c-.47.09-.8.5-.8.98v3.55c0,.55.45,1,1,1h18c.55,0,1-.45,1-1v-3.55c0-.48-.33-.89-.8-.98-.69-.14-1.2-.76-1.2-1.47s.5-1.33,1.2-1.47c.47-.09.8-.5.8-.98v-3.55c0-.55-.45-1-1-1Zm-1,3.84c-1.2.57-2,1.79-2,3.16s.8,2.59,2,3.16v1.84h-4v-2h-1v2H4v-1.84c1.2-.57,2-1.79,2-3.16s-.8-2.59-2-3.16v-1.84h11v1h1v-1h4v1.84Z"></path>
                    <path d="M15 9H16V11H15z"></path>
                    <path d="M15 12H16V14H15z"></path>
                  </svg>
                  Buy Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
