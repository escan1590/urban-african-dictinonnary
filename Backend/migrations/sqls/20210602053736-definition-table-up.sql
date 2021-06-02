CREATE TABLE "definition" (
  "id" SERIAL PRIMARY KEY,
  "authorId" varchar(36) REFERENCES users(id) ,
  "categoryId" integer REFERENCES category(id),
  "categoryLetterId" integer REFERENCES category_letter(id),
  "title" varchar(75),
  "description" text,
  "exemple" varchar,
  "published" boolean,
  "createdAt" date,
  "updatedAt" date,
  "upVotes" integer,
  "downVotes" integer,
  "voteScore" integer
);