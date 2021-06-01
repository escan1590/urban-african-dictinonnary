import { CategoryStore, Category } from "../../models/category";

const store = new CategoryStore();

//tests for category model
describe("dcategory model", () => {
  //fist part: test if the methods are defined
  describe("method definition", () => {
    it("should have an index method", () => {
      expect(store.index).toBeDefined();
    });
    it("should have a show method", () => {
      expect(store.show).toBeDefined();
    });
  });

  //second part: test if the different method behave as intended
  describe("method behavior",
    () => {
      it("should display all the categoriess", () => {});
      it("should show the tuple with id 1", () => {});
    };
});
