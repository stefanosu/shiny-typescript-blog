import model from '../models/post';

const { Post } = model;

class Posts {
  static list(req, res) {
    return Post
      .findAll()
      .then(posts => res.status(200).send(posts));
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
    static modify(req, res) {
      const { title, content, favorite } = req.body
      return Post
        .findByPk(req.params.postId)
        .then((post) => {
          post.update({
            title: title || post.title,
            content: content || post.content,
            favorite: favorite || post.favorite,
          })
          .then((updatedPost) => {
            res.status(200).send({
              message: 'Post updated successfully',
              data: {
                title: title || updatedPost.title,
                content: content || updatedPost.content,
                favorite: favorite || updatedPost.favorite,
              }
            })
          })
          .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
    }
    static delete(req, res) {
      return Post
        .findByPk(req.params.Id)
        .then(post => {
          if(!post) {
            return res.status(400).send({
            message: 'Post Not Found',
            });
          }
          return post
            .destroy()
            .then(() => res.status(200).send({
              message: 'Post successfully deleted'
            }))
            .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error))
    }
}

export default Posts