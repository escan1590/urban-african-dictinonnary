CREATE TABLE "definition" (
  "id" SERIAL PRIMARY KEY,
  "author_id" varchar(36) REFERENCES users(id) ,
  "category_id" integer REFERENCES category(id),
  "category_letter_id" integer REFERENCES category_letter(id),
  "title" varchar(75),
  "description" text,
  "exemple" varchar,
  "published" boolean,
  "created_at" date,
  "updated_at" date,
  "up_votes" integer,
  "down_votes" integer,
  "vote_score" integer
);