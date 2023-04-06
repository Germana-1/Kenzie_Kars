/*
  Warnings:

  - You are about to alter the column `street` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `complement` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `city` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `state` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `brand` on the `Announcement` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `model` on the `Announcement` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `fuelType` on the `Announcement` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `color` on the `Announcement` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to drop the column `account_type` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to alter the column `name` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(150)` to `VarChar(50)`.
  - Added the required column `banner` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceFipe` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgUrl` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountType` to the `User` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `birthdate` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "street" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "complement" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "city" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "state" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "Announcement" ADD COLUMN     "banner" VARCHAR(100) NOT NULL,
ADD COLUMN     "isGoodBuy" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "priceFipe" DECIMAL NOT NULL,
ALTER COLUMN "brand" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "model" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "fuelType" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "color" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "imgUrl" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "account_type",
ADD COLUMN     "accountType" VARCHAR(50) NOT NULL,
ALTER COLUMN "email" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "name" SET DATA TYPE VARCHAR(50),
DROP COLUMN "birthdate",
ADD COLUMN     "birthdate" DATE NOT NULL;
