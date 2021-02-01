
interface PostObj{
  id: string
  title: string
  content: string 
  favorite: boolean 
  createdAt?: string 
  updatedAt?: string 
}

interface PostProps {
  post: PostObj
}


type ApiDataType = {
  posts: PostObj[]
  post?: PostObj
  message: string
  status: string 
}