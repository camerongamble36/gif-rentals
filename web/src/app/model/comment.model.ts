export default class CommentModel {
  constructor(
    public id: string,
    public author: string,
    public body: string,
    public rating: number,
    public timestamp: string
  ) {}
}
