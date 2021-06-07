/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { UserStore } from '../../models/users';

dotenv.config();
const pepper = process.env.BCRYPT_PASSWORD as string;
const store = new UserStore();

// tests for definition model
describe('users model', () => {
  // fist part: test if the methods are defined
  describe('method definition', () => {
    it('should have an index method', () => {
      expect(store.index).toBeDefined();
    });
    it('should have a show method', () => {
      expect(store.show).toBeDefined();
    });
    it('should have a create method', () => {
      expect(store.create).toBeDefined();
    });
    // it("should have an update method", () => {
    //   expect(store.update).toBeDefined();
    // });
    it('should have a delete method', () => {
      expect(store.delete).toBeDefined();
    });
  });

  // second part: test if the different method behave as intended
  describe('method behavior', () => {
    const userId = uuid();
    it('should create a new user', async () => {
      const newUser = await store.create(
        userId,
        'daniel',
        'dan',
        'dan@gmail.com',
        '1234',
        '2020-12-12'
      );
      expect(newUser.id).toEqual(userId);
      expect(newUser.name).toEqual('daniel');
      expect(newUser.username).toEqual('dan');
      expect(newUser.email).toEqual('dan@gmail.com');
      expect(
        bcrypt.compareSync(`1234${pepper}`, newUser.passwordHash)
      ).toBeTrue();
      expect(newUser.registeredAt).toEqual('2020-12-12');
      // expect(newUser).toEqual({
      //   id: userId,
      //   name: "daniel",
      //   username: "dan",
      //   email: "dan@gmail.com",
      //   passwordHash: "1234",
      //   registeredAt: "2020-12-12",
      // });
    });

    it('should display the user auhenticated', async () => {
      const result = await store.authenticate('dan', '1234');
      expect(result?.id).toEqual(userId);
      expect(result?.name).toEqual('daniel');
      expect(result?.username).toEqual('dan');
      expect(result?.email).toEqual('dan@gmail.com');
      expect(
        bcrypt.compareSync(`1234${pepper}`, result!.passwordHash)
      ).toBeTrue();
      expect(result?.registeredAt).toEqual('2020-12-12');
    });

    it('should display all the users created', async () => {
      const result = await store.index();
      expect(result[0].id).toEqual(userId);
      expect(result[0].name).toEqual('daniel');
      expect(result[0].username).toEqual('dan');
      expect(result[0].email).toEqual('dan@gmail.com');
      expect(
        bcrypt.compareSync(`1234${pepper}`, result[0].passwordHash)
      ).toBeTrue();
      expect(result[0].registeredAt).toEqual('2020-12-12');
      // expect(result).toEqual([
      //   {
      //     id: userId,
      //     name: 'daniel',
      //     username: 'dan',
      //     email: 'dan@gmail.com',
      //     passwordHash: '1234',
      //     registeredAt: '2020-12-12',
      //   },
      // ]);
    });
    it(`should show the tuple with ${userId} `, async () => {
      const result = await store.show('dan');
      expect(result.id).toEqual(userId);
      expect(result.name).toEqual('daniel');
      expect(result.username).toEqual('dan');
      expect(result.email).toEqual('dan@gmail.com');
      expect(
        bcrypt.compareSync(`1234${pepper}`, result.passwordHash)
      ).toBeTrue();
      expect(result.registeredAt).toEqual('2020-12-12');
      // expect(result).toEqual({
      //   id: userId,
      //   name: "daniel",
      //   username: "dan",
      //   email: "dan@gmail.com",
      //   passwordHash: "1234",
      //   registeredAt: "2020-12-12",
      // })
    });
    // it("should update the userInfo", async () => {
    //   const result = await store.update(userId,"newDaniel","newDan","newMail@gm.co","newPassword");
    //   expect(result).toEqual({
    //     id: userId,
    //     name: "newDaniel",
    //     username: "newDan",
    //     email: "newMail@gm.co",
    //     passwordHash: "newPassword",
    //     registeredAt: "2020-12-12",
    //   })
    // });
    it('should delete the tuple with id 1', async () => {
      const result = await store.delete(userId);
      expect(result.id).toEqual(userId);
      expect(result.name).toEqual('daniel');
      expect(result.username).toEqual('dan');
      expect(result.email).toEqual('dan@gmail.com');
      expect(
        bcrypt.compareSync(`1234${pepper}`, result.passwordHash)
      ).toBeTrue();
      expect(result.registeredAt).toEqual('2020-12-12');
      // expect(result).toEqual({
      //   id: userId,
      //   name: "daniel",
      //   username: "dan",
      //   email: "dan@gmail.com",
      //   passwordHash: "1234",
      //   registeredAt: "2020-12-12",
      // })
    });
  });
});
