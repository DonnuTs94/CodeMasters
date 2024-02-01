/*
  Warnings:

  - You are about to drop the column `authorId` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `publisherId` on the `books` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[isbn]` on the table `books` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `author_id` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publisher_id` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `books` DROP FOREIGN KEY `books_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `books` DROP FOREIGN KEY `books_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `books` DROP FOREIGN KEY `books_publisherId_fkey`;

-- AlterTable
ALTER TABLE `books` DROP COLUMN `authorId`,
    DROP COLUMN `categoryId`,
    DROP COLUMN `publisherId`,
    ADD COLUMN `author_id` INTEGER NOT NULL,
    ADD COLUMN `publisher_id` INTEGER NOT NULL,
    MODIFY `synopsis` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `book_category` (
    `book_id` INTEGER NOT NULL,
    `category_id` INTEGER NOT NULL,

    PRIMARY KEY (`book_id`, `category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `books_isbn_key` ON `books`(`isbn`);

-- AddForeignKey
ALTER TABLE `books` ADD CONSTRAINT `books_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `authors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `books` ADD CONSTRAINT `books_publisher_id_fkey` FOREIGN KEY (`publisher_id`) REFERENCES `publishers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `book_category` ADD CONSTRAINT `book_category_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `book_category` ADD CONSTRAINT `book_category_book_id_fkey` FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
