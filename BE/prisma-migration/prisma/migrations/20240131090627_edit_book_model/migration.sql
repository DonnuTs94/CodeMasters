/*
  Warnings:

  - You are about to drop the column `name` on the `books` table. All the data in the column will be lost.
  - Added the required column `isbn` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `synopsis` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `books` DROP COLUMN `name`,
    ADD COLUMN `isbn` VARCHAR(191) NOT NULL,
    ADD COLUMN `synopsis` TEXT NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;
