/*
  Warnings:

  - Made the column `Role` on table `inscription` required. This step will fail if there are existing NULL values in that column.
  - Made the column `offre` on table `inscription` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `inscription` MODIFY `Role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',
    MODIFY `offre` ENUM('Normal', 'Demo', 'VIP') NOT NULL DEFAULT 'Normal';
