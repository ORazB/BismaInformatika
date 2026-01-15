"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function ProfileDashboard(props: any) {
    const actingUser = props.actingUser;
    const userCourses = props.userCourses;
    const completedEnrollments = userCourses?.length || 0;
    const { user, isLoaded } = useUser();

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <div className="w-full">
            {/* ================= USER ================= */}
            <section className="mt-10">
                <div className="container mx-auto px-4 md:px-8">
                    <h1 className="text-3xl font-semibold mb-6">User</h1>

                    {/* PROFILE CARD */}
                    <div className="relative bg-white grid grid-cols-2 rounded-3xl border p-6 md:p-8">

                        <div className="flex flex-col md:flex-row gap-6">
                            <Image
                                src={user?.imageUrl || "/profile-page/profile-placeholder.png"}
                                alt="avatar"
                                width={90}
                                height={90}
                                className="rounded-full object-cover w-auto"
                            />

                            <div>
                                <h3 className="text-2xl font-semibold">
                                    {user?.username}
                                </h3>
                                <p className="text-sm text-gray-text mb-3">
                                    Student
                                </p>

                                <Link
                                    href={`/profile/${actingUser.id}/edit`}
                                    className="inline-block bg-gray-200 text-sm px-6 py-2 rounded-full"
                                >
                                    Edit Profile
                                </Link>
                            </div>

                            <span className="absolute right-6 top-6 text-sm text-gray-text flex items-center gap-2">
                                <i className="bx bx-calendar"></i> 7 September 2025
                            </span>
                        </div>

                        {/* INFO */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            <Info icon="bx-map" label="Address">
                                {(user as any)?.address || "No address provided"}
                            </Info>

                            <Info icon="bx-envelope" label="Gmail">
                                {user?.primaryEmailAddress?.emailAddress}
                            </Info>

                            <Info icon="bx-phone" label="Phone">
                                {user?.primaryPhoneNumber?.phoneNumber || "No phone number"}
                            </Info>

                            <Info icon="bx-book" label="Completed Courses">
                                {completedEnrollments}
                            </Info>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= COURSE ================= */}
            <section className="mt-16">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-3xl font-semibold mb-4">My Course</h2>

                    {/* TABS */}
                    <div className="flex gap-6 border-b mb-6 text-sm font-medium">
                        <button className="border-b-2 border-primary pb-2">ALL COURSES</button>
                        <button className="text-gray-text">CURRENT</button>
                        <button className="text-gray-text">ARCHIVE</button>
                        <button className="text-gray-text">UPCOMING</button>
                    </div>

                    {/* COURSE CARD */}
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i}
                                className="bg-white rounded-2xl border p-4
                                flex flex-col md:flex-row items-center justify-between gap-4">

                                <div className="flex items-center gap-4 w-full">
                                    <div className="w-16 h-16 bg-yellow-300 rounded-xl grid place-items-center">
                                        🐏
                                    </div>

                                    <div>
                                        <h3 className="font-semibold">
                                            E-Learning and Digital Cultures
                                        </h3>
                                        <p className="text-sm text-gray-text">
                                            Feb 8, 2020 | Feb 8, 2020
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 w-full md:w-auto">
                                    <span className="flex items-center gap-1 text-lg font-semibold">
                                        ⭐ 8.9
                                    </span>

                                    <button className="bg-primary text-white px-6 py-2 rounded-xl w-full md:w-auto">
                                        VIEW COURSE
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

/* INFO ITEM */
function Info({ icon, label, children }: any) {
    return (
        <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-primary text-white grid place-items-center text-xl">
                <i className={`bx ${icon}`}></i>
            </div>
            <div>
                <p className="text-xs text-gray-text">{label}</p>
                <p className="font-semibold">{children}</p>
            </div>
        </div>
    );
}
