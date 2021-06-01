import {TagStore, Tag} from 

const store = new TagStore();

//tests for definition model
describe("tag model", () => {
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
    });
  
    //second part: test if the different method behave as intended
    describe("method behavior",
    () => {
      it("should create a new tag", () => {});
      it("should display all the tags created", () => {});
      it("should show the tuple with id 1", () => {});
    };
  });
  