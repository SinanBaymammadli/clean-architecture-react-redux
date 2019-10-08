import { IPostRepository } from "../repositories/post_repository";
import { mock, when, verify, instance } from "ts-mockito";
import { IPostEntity } from "../entities/post_entity";
import { getPost } from "./get_post";

const mockPostRepository = mock<IPostRepository>();
const mockPostRepositoryInstance = instance(mockPostRepository);

describe("get_post usecase", () => {
  const tId = 1;
  const post: IPostEntity = {
    userId: 1,
    id: 1,
    title: "Test title",
    body: "Test body",
  };

  it("should get a single post by id", async () => {
    // arrange
    when(mockPostRepository.getPost(tId)).thenResolve(post);
    // act
    const result = await getPost(mockPostRepositoryInstance, tId);
    // assert
    expect(result).toEqual(post);
    // Verify that the method has been called on the Repository
    verify(mockPostRepository.getPost(tId));
  });
});
