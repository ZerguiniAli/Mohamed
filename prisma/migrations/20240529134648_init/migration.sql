/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `Inscription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `societe` VARCHAR(191) NOT NULL,
    `Non` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Telephone` VARCHAR(191) NOT NULL,
    `Region` VARCHAR(191) NOT NULL,
    `Nomutil` VARCHAR(191) NOT NULL,
    `MotdePase` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Inscription_Email_key`(`Email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
