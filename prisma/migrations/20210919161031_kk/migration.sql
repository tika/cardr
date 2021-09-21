-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "timesWon" INTEGER NOT NULL DEFAULT 0,
    "timesPlayed" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_User" ("id", "name", "password", "timesPlayed", "timesWon") SELECT "id", "name", "password", "timesPlayed", "timesWon" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
