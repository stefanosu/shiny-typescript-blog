import model from '../models/post';

const { Post } = model;

class Posts {
  static list(req, res) {
    return Book
      .findAll()
      .then(books => res.status(200).send(books));
  }
  static create(req, res) {
    const { title, content, favorite } = req.body
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