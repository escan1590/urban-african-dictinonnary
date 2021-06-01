import { DefinitionStore, Definition } from "../../models/definition ";

const store = new DefinitionStore();

//tests for definition model
describe("definition model", () => {
  //fist part: test if the methods are defined
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

  //second part: test if the different method behave as intended
  describe("method behavior",
    () => {
      it("should create a new definition", async () => {

      });
      it("should display all the defintions created", () => {});
      it("should show the tuple with id 1", () => {});
      it("should update the definition", () => {});
      it("should delete the tuple with id 1", () => {});
    };
});
