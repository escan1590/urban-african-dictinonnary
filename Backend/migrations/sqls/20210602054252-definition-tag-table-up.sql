CREATE TABLE definition_tag (
    id SERIAL PRIMARY KEY,
    tagId integer REFERENCES tag(id),
    definitionId integer REFERENCES definition(id)
);