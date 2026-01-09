/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `course` table. All the data in the column will be lost.
  - Added the required column `imageUuid` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` DROP COLUMN `imageUrl`,
    ADD COLUMN `imageUuid` VARCHAR(191) NOT NULL,
    MODIFY `endDate` DATETIME(3) NULL,
    MODIFY `startDate` DATETIME(3) NULL;
