-- AlterTable
ALTER TABLE `inscription` MODIFY `offre` ENUM('Normal', 'Demo', 'VIP') NULL DEFAULT 'Normal';
