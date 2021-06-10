import dotenv from 'dotenv';

dotenv.config();
// eslint-disable-next-line import/prefer-default-export
export const port: string | number = process.env.PORT || 3001;
