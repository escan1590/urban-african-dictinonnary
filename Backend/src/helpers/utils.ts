/* eslint-disable import/prefer-default-export */
/**
 * A method to format date from the database date
 * @param {*} timestamp
 * @returns formated date
 */
export const date = (timestamp: string | number): string => {
  const pubDate = new Date(timestamp);
  const formattedDate = `${pubDate.getFullYear()}-${
    pubDate.getMonth() + 1
  }-${pubDate.getDate()}`;
  return formattedDate;
};

export const findLetterId = (word: string) => {
  const splited = word.split('');
  const firstLetter = splited[0].toUpperCase();
  const letterArr = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  return letterArr.indexOf(firstLetter) + 1;
};
