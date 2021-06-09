CREATE TABLE "users" (
  "id" varchar(36) PRIMARY KEY,
  "name" varchar(100),
  "username" varchar(100),
  "email" varchar(100),
  "password_hash" varchar(100),
  "registered_at" date
);
