-- DropIndex
DROP INDEX "Account_displayName_key";

-- DropIndex
DROP INDEX "User_userAuthToken_key";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "userAuthToken" DROP NOT NULL;
