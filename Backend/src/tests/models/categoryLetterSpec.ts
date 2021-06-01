import {
  CategoryLetterStore,
  CategoryLetter,
} from "../../models/categoryLetter";

const store = new CategoryLetterStore();

//tests for definition model
describe("category_letter model", () => {
  //fist part: test if the methods are defined
  describe("method definition", () => {
    it("should have an index method", () => {
      expect(store.index).toBeDefined();
    });
    it("should have a show method", () => {
      expect(store.show).toBeDefined();
    });
  });

  describe("method behavior",
    () => {
      it("should display all the categories Letter", () => {});
      it("should show the tuple with id 1", () => {});
    }; 
  //second part: test if the different method behave as intended
});
