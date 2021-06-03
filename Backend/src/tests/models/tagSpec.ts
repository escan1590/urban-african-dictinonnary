/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import {TagStore} from "../../models/tag"

const store = new TagStore();

// tests for definition model
describe("tag model", () => {
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
    });
  
    // second part: test if the different method behave as intended
    describe("method behavior",
    () => {
      it("should create a new tag", async () => {
        const result = await store.create("#up","#up")
        expect(result).toEqual({
          id : 1,
          title : "#up",
          path : "#up"
        })
      });
      it("should display all the tags created", async () => {
        const result = await store.index();
        expect(result).toEqual([{
          id : 1,
          title : "#up",
          path : "#up"
        }])
      });
      it("should show the tuple with id 1", async () => {
        const result = await store.show(1);
        expect(result).toEqual({
          id : 1,
          title : "#up",
          path : "#up"
        })
      });
    });
  });
  