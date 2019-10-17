import { IPostRepository } from "../repositories/post_repository";
import { IPostEntity } from "../entities/post_entity";
import { IFailure } from "../../../../core/error/failures";

export function getPost(repository: IPostRepository, id: number): Promise<IPostEntity | IFailure> {
  return repository.getPost(id);
}
