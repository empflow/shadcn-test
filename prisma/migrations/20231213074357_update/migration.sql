/*
  Warnings:

  - You are about to drop the column `userId` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the `Thing` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `content` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_userId_fkey";

-- DropForeignKey
ALTER TABLE "Thing" DROP CONSTRAINT "Thing_recipeId_fkey";

-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "userId",
ADD COLUMN     "content" TEXT NOT NULL;

-- DropTable
DROP TABLE "Thing";

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "Role";
