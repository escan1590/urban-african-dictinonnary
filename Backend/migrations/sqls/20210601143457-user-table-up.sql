CREATE TABLE "users" (
  "id" varchar(36) PRIMARY KEY,
  "name" varchar(100),
  "username" varchar(50),
  "email" varchar(50),
  "passwordHash" varchar(40),
  "registeredAt" date
);
