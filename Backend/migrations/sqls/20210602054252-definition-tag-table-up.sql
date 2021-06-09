CREATE TABLE "definition_tag" (
    "id" SERIAL PRIMARY KEY,
    "tag_id" integer REFERENCES tag(id),
    "definition_id" integer REFERENCES definition(id)
);