/*
  Warnings:

  - Made the column `clerkId` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `clerkId` VARCHAR(191) NOT NULL;
