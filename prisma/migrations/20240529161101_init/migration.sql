-- AlterTable
ALTER TABLE `inscription` ADD COLUMN `Role` ENUM('ADMIN', 'USER') NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `offre` ENUM('Normal', 'Demo', 'VIP') NULL;

-- CreateTable
CREATE TABLE `Anonce` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tite` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `wilaya` VARCHAR(191) NOT NULL,
    `date_preemption` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Anonce_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sectors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tite` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Sectors_tite_key`(`tite`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `b2bservice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tite` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `wilaya` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `b2bservice_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contact` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Contact_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Document` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` LONGBLOB NULL,

    UNIQUE INDEX `Document_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AnonceSectors` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AnonceSectors_AB_unique`(`A`, `B`),
    INDEX `_AnonceSectors_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ContactTob2bservice` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ContactTob2bservice_AB_unique`(`A`, `B`),
    INDEX `_ContactTob2bservice_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_DocumentTob2bservice` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_DocumentTob2bservice_AB_unique`(`A`, `B`),
    INDEX `_DocumentTob2bservice_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_AnonceSectors` ADD CONSTRAINT `_AnonceSectors_A_fkey` FOREIGN KEY (`A`) REFERENCES `Anonce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnonceSectors` ADD CONSTRAINT `_AnonceSectors_B_fkey` FOREIGN KEY (`B`) REFERENCES `Sectors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ContactTob2bservice` ADD CONSTRAINT `_ContactTob2bservice_A_fkey` FOREIGN KEY (`A`) REFERENCES `Contact`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ContactTob2bservice` ADD CONSTRAINT `_ContactTob2bservice_B_fkey` FOREIGN KEY (`B`) REFERENCES `b2bservice`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DocumentTob2bservice` ADD CONSTRAINT `_DocumentTob2bservice_A_fkey` FOREIGN KEY (`A`) REFERENCES `Document`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DocumentTob2bservice` ADD CONSTRAINT `_DocumentTob2bservice_B_fkey` FOREIGN KEY (`B`) REFERENCES `b2bservice`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
