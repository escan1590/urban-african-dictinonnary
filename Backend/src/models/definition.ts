import Client from "../database";
//
export type Definition = {
  id: number;
  authorId: number;
  categoryId: number;
  categoryLetterId: number;
  title: string;
  description: string;
  exemple: string;
  published: true;
  createdAt: Date;
  updatedAt: Date;
  upVotes: number;
  downVotes: number;
  voteScore: number;
};

export class DefinitionStore {}
