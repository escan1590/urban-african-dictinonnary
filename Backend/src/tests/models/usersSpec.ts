import { UserStore, User } from "../../models/users";
import {v4 as uuid} from "uuid"

const store = new UserStore();

//tests for definition model
describe("users model", () => {
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
        const userId = uuid();
      it("should create a new user", async () => {
        const newUser = await store.create(
          userId,
          "daniel",
          "dan",
          "dan@gmail.com",
          "1234",
          "2020-12-12"
        );
        expect(newUser).toEqual({
          id: userId,
          name: "daniel",
          username: "dan",
          email: "dan@gmail.com",
          passwordHash: "1234",
          registeredAt: "2020-12-12",
        });
      });
      it("should display all the users created", async () => {
        const result = await store.index();
        expect(result).toEqual([{
          id: userId,
          name: "daniel",
          username: "dan",
          email: "dan@gmail.com",
          passwordHash: "1234",
          registeredAt: "2020-12-12",
        }])
      });
      it(`should show the tuple with ${userId} `, () => {
        const result = await store.show(userId);
        expect(result).toEqual({
          id: userId,
          name: "daniel",
          username: "dan",
          email: "dan@gmail.com",
          passwordHash: "1234",
          registeredAt: "2020-12-12",
        })
      });
      it("should update the userInfo", async () => {
        const result = await store.update(userId,"newDaniel","newDan","newMail@gm.co","newPassword");
        expect(result).toEqual({
          id: userId,
          name: "newDaniel",
          username: "newDan",
          email: "newMail@gm.co",
          passwordHash: "newPassword",
          registeredAt: "2020-12-12",
        })
      });
      it("should delete the tuple with id 1", async () => {
        const result = await store.delete(userId)
        expect(result).toEqual({
          id: userId,
          name: "daniel",
          username: "dan",
          email: "dan@gmail.com",
          passwordHash: "1234",
          registeredAt: "2020-12-12",
        })
      });
    };
});
