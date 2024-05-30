/*
  Warnings:

  - You are about to drop the column `tite` on the `b2bservice` table. All the data in the column will be lost.
  - You are about to drop the `_anoncesectors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_contacttob2bservice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_documenttob2bservice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `anonce` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `contact` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `document` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sectors` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Contact` to the `b2bservice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `document` to the `b2bservice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sectors` to the `b2bservice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `b2bservice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_anoncesectors` DROP FOREIGN KEY `_AnonceSectors_A_fkey`;

-- DropForeignKey
ALTER TABLE `_anoncesectors` DROP FOREIGN KEY `_AnonceSectors_B_fkey`;

-- DropForeignKey
ALTER TABLE `_contacttob2bservice` DROP FOREIGN KEY `_ContactTob2bservice_A_fkey`;

-- DropForeignKey
ALTER TABLE `_contacttob2bservice` DROP FOREIGN KEY `_ContactTob2bservice_B_fkey`;

-- DropForeignKey
ALTER TABLE `_documenttob2bservice` DROP FOREIGN KEY `_DocumentTob2bservice_A_fkey`;

-- DropForeignKey
ALTER TABLE `_documenttob2bservice` DROP FOREIGN KEY `_DocumentTob2bservice_B_fkey`;

-- AlterTable
ALTER TABLE `b2bservice` DROP COLUMN `tite`,
    ADD COLUMN `Contact` VARCHAR(191) NOT NULL,
    ADD COLUMN `document` LONGBLOB NOT NULL,
    ADD COLUMN `sectors` VARCHAR(191) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_anoncesectors`;

-- DropTable
DROP TABLE `_contacttob2bservice`;

-- DropTable
DROP TABLE `_documenttob2bservice`;

-- DropTable
DROP TABLE `anonce`;

-- DropTable
DROP TABLE `contact`;

-- DropTable
DROP TABLE `document`;

-- DropTable
DROP TABLE `sectors`;

-- CreateTable
CREATE TABLE `annonce` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `wilaya` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `date_preemption` VARCHAR(191) NOT NULL,
    `sectors` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Anonce_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
