CREATE TABLE "definition_tag" (
    "id" SERIAL PRIMARY KEY,
    "tag_id" integer REFERENCES tag(id),
    "definition_id" integer REFERENCES definition(id),
     FOREIGN KEY (tag_id)
        REFERENCES tag (id)
        ON DELETE CASCADE,
     FOREIGN KEY (definition_id)
        REFERENCES definition (id)
        ON DELETE CASCADE
);