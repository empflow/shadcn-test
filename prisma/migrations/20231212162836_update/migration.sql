-- CreateTable
CREATE TABLE "Thing" (
    "id" TEXT NOT NULL,
    "recipeId" TEXT NOT NULL,

    CONSTRAINT "Thing_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Thing_recipeId_key" ON "Thing"("recipeId");

-- AddForeignKey
ALTER TABLE "Thing" ADD CONSTRAINT "Thing_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
