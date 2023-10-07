/*
  Warnings:

  - Added the required column `comments` to the `postModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "postModel" ADD COLUMN     "comments" JSONB NOT NULL;

-- CreateTable
CREATE TABLE "commentModel" (
    "id" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "likes" JSONB NOT NULL,
    "userID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "commentModel_pkey" PRIMARY KEY ("id")
);
