/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import { CategoryStore } from "../../models/category";

const store = new CategoryStore();

// tests for category model
describe("dcategory model", () => {
  // fist part: test if the methods are defined
  describe("method definition", () => {
    it("should have an index method", () => {
      expect(store.index).toBeDefined();
    });
    it("should have a show method", () => {
      expect(store.show).toBeDefined();
    });
  });

  // second part: test if the different method behave as intended
  describe("method behavior",
    () => {
      it("should display all the categoriess", async () => {
        const result = await store.index()
        expect(result).toEqual([
          {
            id : 1,
            title : "dance",
            path : "dance",
          },
          {
            id : 2,
            title : "sex",
            path : "sex",
          },
          {
            id : 3,
            title : "music",
            path : "music",
          },
          {
            id : 4,
            title : "ethny",
            path : "ethny",
          },
          {
            id : 5,
            title : "school",
            path : "school",
          },
          {
            id : 6,
            title : "name",
            path : "name",
          },
          {
            id :7,
            title : "work",
            path: "work"
          },
          {
            id : 8,
            title : "street",
            path : "street",
          },
        ])
      });
      it("should show the tuple with id 1", async () => {
        const result = await store.show(1)
        expect(result).toEqual({
          id : 1,
          title : "dance",
          path : "dance",
        })
      });
    });
});
