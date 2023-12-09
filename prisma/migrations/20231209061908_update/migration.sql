-- CreateTable
CREATE TABLE "Recipe" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "timeToCookMins" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "vegan" BOOLEAN NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);
