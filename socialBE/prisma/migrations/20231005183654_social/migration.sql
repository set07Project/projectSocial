-- AlterTable
ALTER TABLE "commentModel" ALTER COLUMN "likes" DROP NOT NULL;

-- AlterTable
ALTER TABLE "postModel" ALTER COLUMN "comments" DROP NOT NULL;
