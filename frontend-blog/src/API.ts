import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:3000"

export const getAllPosts = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const posts: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/getPosts"
    )
    return posts
  } catch (error) {
    throw new Error(error)
  }
}


export const addPost = async (
  formData: PostObj
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const post: Omit<PostObj, "id"> = {
      title: formData.title,
      content: formData.content,
      favorite: false,
    }
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/createPosts",
      post
    )
    return savePost
  } catch (error) {
    throw new Error(error)
  }
}



export const updatePost = async (
  post: PostObj
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const postUpdate: Pick<PostObj, "favorite"> = {
      favorite: true,
    }
    const updatedPost: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/updatePost/${post.id}`,
      postUpdate
    )
    return updatedPost
  } catch (error) {
    throw new Error(error)
  }
}


export const deleteTodo = async (
  id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const deletedPost: AxiosResponse<ApiDataType> = await axios.delete(
      `${baseUrl}/deletePost/${id}`
    )
    return deletedPost
  } catch (error) {
    throw new Error(error)
  }
}

