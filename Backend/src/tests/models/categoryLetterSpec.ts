/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import { CategoryLetterStore } from '../../models/categoryLetter';

const store = new CategoryLetterStore();

// tests for definition model
describe('category_letter model', () => {
  // fist part: test if the methods are defined
  describe('method definition', () => {
    it('should have an index method', () => {
      expect(store.index).toBeDefined();
    });
    it('should have a show method', () => {
      expect(store.show).toBeDefined();
    });
  });

  describe('method behavior', () => {
    it('should display all the categories Letter', async () => {
      const result = await store.index();
      expect(result).toEqual([
        {
          id: 1,
          letter: 'A',
          path: 'A',
        },
        {
          id: 2,
          letter: 'B',
          path: 'B',
        },
        {
          id: 3,
          letter: 'C',
          path: 'C',
        },
        {
          id: 4,
          letter: 'D',
          path: 'D',
        },
        {
          id: 5,
          letter: 'E',
          path: 'E',
        },
        {
          id: 6,
          letter: 'F',
          path: 'F',
        },
        {
          id: 7,
          letter: 'G',
          path: 'G',
        },
        {
          id: 8,
          letter: 'H',
          path: 'H',
        },
        {
          id: 9,
          letter: 'I',
          path: 'I',
        },
        {
          id: 10,
          letter: 'J',
          path: 'J',
        },
        {
          id: 11,
          letter: 'K',
          path: 'K',
        },
        {
          id: 12,
          letter: 'L',
          path: 'L',
        },
        {
          id: 13,
          letter: 'M',
          path: 'M',
        },
        {
          id: 14,
          letter: 'N',
          path: 'N',
        },
        {
          id: 15,
          letter: 'O',
          path: 'O',
        },
        {
          id: 16,
          letter: 'P',
          path: 'P',
        },
        {
          id: 17,
          letter: 'Q',
          path: 'Q',
        },
        {
          id: 18,
          letter: 'R',
          path: 'R',
        },
        {
          id: 19,
          letter: 'S',
          path: 'S',
        },
        {
          id: 20,
          letter: 'T',
          path: 'T',
        },
        {
          id: 21,
          letter: 'U',
          path: 'U',
        },
        {
          id: 22,
          letter: 'V',
          path: 'V',
        },
        {
          id: 23,
          letter: 'W',
          path: 'W',
        },
        {
          id: 24,
          letter: 'X',
          path: 'X',
        },
        {
          id: 25,
          letter: 'Y',
          path: 'Y',
        },
        {
          id: 26,
          letter: 'Z',
          path: 'Z',
        },
      ]);
    });
    it('should show the tuple with id 1', async () => {
      const result = await store.show(1);
      expect(result).toEqual({
        id: 1,
        letter: 'A',
        path: 'A',
      });
    });
  });
  // second part: test if the different method behave as intended
});
