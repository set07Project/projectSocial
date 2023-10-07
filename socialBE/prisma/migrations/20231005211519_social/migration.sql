/*
  Warnings:

  - Added the required column `replies` to the `commentModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "commentModel" ADD COLUMN     "replies" JSONB NOT NULL;
