import model from '../models/post';

const { Post } = model;

class Posts {
  static create(req, res) {
    const { title, content, description, quantity } = req.body
    const { userId } = req.params
    return Post
      .create({
        title,
        content,
        favorite,
        userId
      })
      .then(post => res.status(201).send({
        message: `Your blog post with the title ${title} has been created successfully `,
        post
      }))
    }
}

export default Posts