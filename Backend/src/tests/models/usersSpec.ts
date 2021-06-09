/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { User, UserStore } from '../../models/users';
import { date } from '../../helpers/utils';

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
        `${userId}`,
        'daniel',
        'dan',
        'dan@gmail.com',
        '1234',
        '2020-12-12'
      );
      // console.log(date(newUser.registered_at));
      // console.log('created', newUser);
      expect(newUser.id).toEqual(userId);
      expect(newUser.name).toEqual('daniel');
      expect(newUser.username).toEqual('dan');
      expect(newUser.email).toEqual('dan@gmail.com');
      expect(
        bcrypt.compareSync(`1234${pepper}`, newUser.password_hash)
      ).toBeTrue();
      expect(date(newUser.registered_at)).toEqual('2020-12-12');
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
      const result: User = (await store.authenticate('dan', '1234')) as User;
      expect(result.username).toEqual('dan');
      expect(
        bcrypt.compareSync(`1234${pepper}`, result.password_hash)
      ).toBeTrue();
    });

    it('should display all the users created', async () => {
      const result = await store.index();
      // console.log('all', result);
      expect(result[0].id).toEqual(userId);
      expect(result[0].name).toEqual('daniel');
      expect(result[0].username).toEqual('dan');
      expect(result[0].email).toEqual('dan@gmail.com');
      expect(
        bcrypt.compareSync(`1234${pepper}`, result[0].password_hash)
      ).toBeTrue();
      expect(date(result[0].registered_at)).toEqual('2020-12-12');
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
    it(`should show the tuple with username "dan"`, async () => {
      const result = await store.show('dan');
      // console.log('show', result);
      expect(result.id).toEqual(userId);
      expect(result.name).toEqual('daniel');
      expect(result.username).toEqual('dan');
      expect(result.email).toEqual('dan@gmail.com');
      expect(
        bcrypt.compareSync(`1234${pepper}`, result.password_hash)
      ).toBeTrue();
      expect(date(result.registered_at)).toEqual('2020-12-12');
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
    it('should delete the tuple with username dan', async () => {
      const result = await store.delete('dan');
      // console.log('delete', result);
      expect(result.id).toEqual(userId);
      expect(result.name).toEqual('daniel');
      expect(result.username).toEqual('dan');
      expect(result.email).toEqual('dan@gmail.com');
      expect(
        bcrypt.compareSync(`1234${pepper}`, result.password_hash)
      ).toBeTrue();
      expect(date(result.registered_at)).toEqual('2020-12-12');
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
