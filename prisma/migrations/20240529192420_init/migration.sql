-- AlterTable
ALTER TABLE `inscription` MODIFY `Role` ENUM('ADMIN', 'USER') NULL DEFAULT 'USER';
