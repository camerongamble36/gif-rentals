import CommentModel from "./comment.model";

export interface Amenity {
  title: string;
  value: boolean;
}

export interface Attribute {
  title: string;
  value: boolean;
}

export default class Home {
  constructor(
    public id?: string,
    public imageUrl?: string,
    public title?: string,
    public description?: string,
    public address?: string,
    public price?: number,
    public beds?: number,
    public baths?: number,
    public amenities?: Amenity[],
    public attributes?: Attribute[],
    public comments?: CommentModel[]
  ) {}
}
