import { IPostEntity } from "../entities/post_entity";
import { IServerFailure } from "../../../../core/error/failures";

export interface IPostRepository {
  getPost: (id: number) => Promise<IPostEntity | IServerFailure>;
}
