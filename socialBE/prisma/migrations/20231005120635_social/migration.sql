/*
  Warnings:

  - Added the required column `friends` to the `authModel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requests` to the `authModel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `likes` to the `postModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "authModel" ADD COLUMN     "friends" JSONB NOT NULL,
ADD COLUMN     "requests" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "postModel" ADD COLUMN     "likes" JSONB NOT NULL;
