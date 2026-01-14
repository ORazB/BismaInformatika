import { User, Course, UserCourse } from "@prisma/client";

export type SerializedCourse = Omit<Course, 'price' | 'createdAt' | 'updatedAt' | 'startDate' | 'endDate'> & {
  price: number;
  createdAt: string;
  updatedAt: string;
  startDate: string | null;
  endDate: string | null;
};

export type SerializedUserCourse = Omit<UserCourse, 'createdAt' | 'updatedAt' | 'course'> & {
  createdAt: string;
  updatedAt: string;
  course: SerializedCourse;
};

export type SerializedUser = Omit<User, 'createdAt' | 'updatedAt'> & {
  createdAt: string;
  updatedAt: string;
};