-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT[],
ADD COLUMN     "hugeNumber" BIGINT,
ADD COLUMN     "isAdmin" BOOLEAN DEFAULT false;

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
