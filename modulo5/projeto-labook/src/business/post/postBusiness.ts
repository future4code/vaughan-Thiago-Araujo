import { insertPost } from '../../data/post/insertPosts';
import { postData } from '../../model/post';
import { generateToken } from '../../services/Authenticator';
import { generateId } from '../../services/IdGenerator';

export const postBusiness = async (
  postData: postData
): Promise<string> => {
  if (
    !postData.photo ||
    !postData.description ||
    !postData.type ||
    !postData.createAt
  ) {
    throw new Error('Preencha os campos "photo", "description", "author_id" e "create_at"')
  }

  const newPost = {
    ...postData,
    id: generateId()
  }

  await insertPost(newPost)

  const token: string = generateToken({
    id: newPost.id,
  })

  return token

}
