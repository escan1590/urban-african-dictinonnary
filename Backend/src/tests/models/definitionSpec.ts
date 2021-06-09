/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import { DefinitionStore } from '../../models/definition';
import { UserStore } from '../../models/users';
import { date } from '../../helpers/utils';

const store = new DefinitionStore();
const userStore = new UserStore();

beforeAll(async () => {
  await userStore.create(
    '1',
    'paul',
    'paul2',
    'paul@gmai.com',
    '1234',
    '2020-12-12'
  );
});

afterAll(async () => [await userStore.delete('paul2')]);

// tests for definition model
describe('definition model', () => {
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
    it('should have an update method', () => {
      expect(store.update).toBeDefined();
    });
    it('should have a delete method', () => {
      expect(store.delete).toBeDefined();
    });
  });

  // second part: test if the different method behave as intended
  describe('method behavior', () => {
    it('should create a new definition', async () => {
      const result = await store.create(
        '1',
        1,
        1,
        'title exemple',
        'description exemple',
        'exemple exemple',
        true,
        '2020-12-10',
        '2020-12-10',
        0,
        0,
        0
      );
      expect(result.id).toEqual(1);
      expect(result.author_id).toEqual('1');
      expect(result.category_id).toEqual(1);
      expect(result.category_letter_id).toEqual(1);
      expect(result.title).toEqual('title exemple');
      expect(result.description).toEqual('description exemple');
      expect(result.exemple).toEqual('exemple exemple');
      expect(date(result.created_at)).toEqual(date('2020-12-10'));
      expect(date(result.updated_at)).toEqual(date('2020-12-10'));
      expect(result.up_votes).toEqual(0);
      expect(result.down_votes).toEqual(0);
      expect(result.vote_score).toEqual(0);
    });
    it('should display all the definitions created', async () => {
      const result = await store.index();
      expect(result[0].id).toEqual(1);
      expect(result[0].author_id).toEqual('1');
      expect(result[0].category_id).toEqual(1);
      expect(result[0].category_letter_id).toEqual(1);
      expect(result[0].title).toEqual('title exemple');
      expect(result[0].description).toEqual('description exemple');
      expect(result[0].exemple).toEqual('exemple exemple');
      expect(date(result[0].created_at)).toEqual(date('2020-12-10'));
      expect(date(result[0].updated_at)).toEqual(date('2020-12-10'));
      expect(result[0].up_votes).toEqual(0);
      expect(result[0].down_votes).toEqual(0);
      expect(result[0].vote_score).toEqual(0);
    });
    it('should show the tuple with id 1', async () => {
      const result = await store.show(1);
      expect(result.id).toEqual(1);
      expect(result.author_id).toEqual('1');
      expect(result.category_id).toEqual(1);
      expect(result.category_letter_id).toEqual(1);
      expect(result.title).toEqual('title exemple');
      expect(result.description).toEqual('description exemple');
      expect(result.exemple).toEqual('exemple exemple');
      expect(date(result.created_at)).toEqual(date('2020-12-10'));
      expect(date(result.updated_at)).toEqual('2020-12-10');
      expect(result.up_votes).toEqual(0);
      expect(result.down_votes).toEqual(0);
      expect(result.vote_score).toEqual(0);
    });
    it('should update the definition', async () => {
      const result = await store.update(
        1,
        'title',
        'description',
        'exemple',
        '2021-06-03'
      );
      expect(result.id).toEqual(1);
      expect(result.author_id).toEqual('1');
      expect(result.category_id).toEqual(1);
      expect(result.category_letter_id).toEqual(1);
      expect(result.title).toEqual('title');
      expect(result.description).toEqual('description');
      expect(result.exemple).toEqual('exemple');
      expect(date(result.created_at)).toEqual(date('2020-12-10'));
      expect(date(result.updated_at)).toEqual(date('2021-06-03'));
      expect(result.up_votes).toEqual(0);
      expect(result.down_votes).toEqual(0);
      expect(result.vote_score).toEqual(0);
    });
    it('should delete the tuple with id 1', async () => {
      const result = await store.delete(1);
      await userStore.delete('paul2');
      expect(result.id).toEqual(1);
      expect(result.author_id).toEqual('1');
      expect(result.category_id).toEqual(1);
      expect(result.category_letter_id).toEqual(1);
      expect(result.title).toEqual('title');
      expect(result.description).toEqual('description');
      expect(result.exemple).toEqual('exemple');
      expect(date(result.created_at)).toEqual(date('2020-12-10'));
      expect(date(result.updated_at)).toEqual(date('2021-06-03'));
      expect(result.up_votes).toEqual(0);
      expect(result.down_votes).toEqual(0);
      expect(result.vote_score).toEqual(0);
    });
  });
});
