CREATE TABLE "definition_tag" (
  "tagId" bigint(20) REFERENCES tag(id),
  "definitionId" bigint(20) REFERENCES definition(id) 
);