CREATE TABLE "user" (
  "id" varchar(36) PRIMARY KEY,
  "name" varchar(100),
  "username" varchar(50),
  "email" varchar(50),
  "passwordHash" varchar(40),
  "registeredAt" datetime
);

CREATE TABLE "Definition" (
  "id" SERIAL PRIMARY KEY,
  "authorId" varchar(36),
  "categoryId" bitInt(20),
  "categoryLetterId" bigint(20),
  "title" varchar(75),
  "description" varchar,
  "exemple" varchar,
  "published" tinyint,
  "createdAt" datetime,
  "updatedAt" datetime,
  "upVotes" integer,
  "downVotes" integer,
  "voteScore" integer
);

CREATE TABLE "category" (
  "id" SERIAL PRIMARY KEY,
  "title" varchar(75),
  "path" varchar(100)
);

CREATE TABLE "category_letter" (
  "id" SERIAL PRIMARY KEY,
  "letter" varchar(2),
  "path" varchar(20)
);

CREATE TABLE "tag" (
  "id" SERIAL PRIMARY KEY,
  "title" varchar(75),
  "path" varchar(100)
);

CREATE TABLE "definition_tag" (
  "tagId" bigint(20),
  "definitionId" bigint(20)
);

ALTER TABLE "Definition" ADD FOREIGN KEY ("authorId") REFERENCES "user" ("id");

ALTER TABLE "definition_tag" ADD FOREIGN KEY ("tagId") REFERENCES "tag" ("id");

ALTER TABLE "definition_tag" ADD FOREIGN KEY ("definitionId") REFERENCES "Definition" ("id");

ALTER TABLE "Definition" ADD FOREIGN KEY ("categoryId") REFERENCES "category" ("id");

ALTER TABLE "Definition" ADD FOREIGN KEY ("categoryLetterId") REFERENCES "category_letter" ("id");
