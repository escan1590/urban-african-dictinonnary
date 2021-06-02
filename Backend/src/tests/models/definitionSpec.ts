import { DefinitionStore, Definition } from "../../models/definition";
import {CategoryStore} from "../../models/category";
import {UserStore} from "../../models/category";
import {CategoryLetterStore} from "../../models/categoryLetter";

const store = new DefinitionStore();
const UserStore = new UserStore();
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
        await 
        const result = await store.create(1,1,1,"title exemple","description exemple",true,"2020-12-10","2020-12-10",0,0,0);
      });
      it("should display all the defintions created", () => {});
      it("should show the tuple with id 1", () => {});
      it("should update the definition", () => {});
      it("should delete the tuple with id 1", () => {});
    };
});
