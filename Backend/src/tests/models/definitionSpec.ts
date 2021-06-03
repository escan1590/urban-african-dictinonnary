/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import { DefinitionStore} from "../../models/definition";
import { UserStore } from "../../models/users";

const store = new DefinitionStore();
const userStore = new UserStore();
// tests for definition model
describe("definition model", () => {
  // fist part: test if the methods are defined
  describe("method definition", () => {
    it("should have an index method", () => {
      expect(store.index).toBeDefined();
    });
    it("should have a show method", () => {
      expect(store.show).toBeDefined();
    });
    it("should have a create method", () => {
      expect(store.create).toBeDefined();
    });
    it("should have an update method", () => {
      expect(store.update).toBeDefined();
    });
    it("should have a delete method", () => {
      expect(store.delete).toBeDefined();
    });
  });

  // second part: test if the different method behave as intended
  describe("method behavior", () => {
    it("should create a new definition", async () => {
      const newUser = await userStore.create(
        "1",
        "daniel",
        "dan",
        "dan@gmail.com",
        "1234",
        "2020-12-12"
      );
      expect(newUser).toEqual({
        id: "1",
        name: "daniel",
        username: "dan",
        email: "dan@gmail.com",
        passwordHash: "1234",
        registeredAt: "2020-12-12",
      });
      const result = await store.create(
        "1",
        1,
        1,
        "title exemple",
        "description exemple",
        "exemple exemple",
        true,
        "2020-12-10",
        "2020-12-10",
        0,
        0,
        0
      );
      expect(result).toEqual({
        id: 1,
        authorId: "1",
        categoryId: 1,
        categoryLetterId: 1,
        title: "title exemple",
        description: "description exemple",
        exemple: "exemple exemple",
        published: true,
        createdAt: "2020-12-10",
        updatedAt: "2020-12-10",
        upVotes: 0,
        downVotes: 0,
        voteScore: 0,
      });
    });
    it("should display all the defintions created", async () => {
      const result = await store.index();
      expect(result).toEqual([
        {
          id: 1,
          authorId: "1",
          categoryId: 1,
          categoryLetterId: 1,
          title: "title exemple",
          description: "description exemple",
          exemple: "exemple exemple",
          published: true,
          createdAt: "2020-12-10",
          updatedAt: "2020-12-10",
          upVotes: 0,
          downVotes: 0,
          voteScore: 0,
        },
      ]);
    });
    it("should show the tuple with id 1", async () => {
      const result = await store.show(1);

      expect(result).toEqual({
        id: 1,
        authorId: "1",
        categoryId: 1,
        categoryLetterId: 1,
        title: "title exemple",
        description: "description exemple",
        exemple: "exemple exemple",
        published: true,
        createdAt: "2020-12-10",
        updatedAt: "2020-12-10",
        upVotes: 0,
        downVotes: 0,
        voteScore: 0,
      });
    });
    it("should update the definition", async () => {
      const result = await store.update(
        1,
        "title",
        "description",
        "exemple",
        "2021-06-03"
      );
      expect(result).toEqual({
        id: 1,
        authorId: "1",
        categoryId: 1,
        categoryLetterId: 1,
        title: "title",
        description: "description",
        exemple: "exemple",
        published: true,
        createdAt: "2020-12-10",
        updatedAt: "2021-06-03",
        upVotes: 0,
        downVotes: 0,
        voteScore: 0,
      });
    });
    it("should delete the tuple with id 1", async () => {
      const result = await store.delete(1);
      expect(result).toEqual({
        id: 1,
        authorId: "1",
        categoryId: 1,
        categoryLetterId: 1,
        title: "title",
        description: "description",
        exemple: "exemple",
        published: true,
        createdAt: "2020-12-10",
        updatedAt: "2021-06-03",
        upVotes: 0,
        downVotes: 0,
        voteScore: 0,
      });
    });
  });
});
