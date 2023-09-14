-- CreateTable
CREATE TABLE "authModel" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "avatarID" TEXT,
    "token" TEXT,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "role" TEXT NOT NULL,
    "roleID" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "authModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "postModel" (
    "id" TEXT NOT NULL,
    "post" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "avatarID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "postModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "commentModel" (
    "id" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    "postID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "commentModel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "authModel_email_key" ON "authModel"("email");

-- CreateIndex
CREATE UNIQUE INDEX "authModel_roleID_key" ON "authModel"("roleID");

-- AddForeignKey
ALTER TABLE "postModel" ADD CONSTRAINT "postModel_userID_fkey" FOREIGN KEY ("userID") REFERENCES "authModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commentModel" ADD CONSTRAINT "commentModel_postID_fkey" FOREIGN KEY ("postID") REFERENCES "postModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
