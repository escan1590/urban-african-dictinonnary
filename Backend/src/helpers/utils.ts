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
