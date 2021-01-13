import Posts from '../interfaces/posts';

module.exports = (sequelize: { define: (arg0: string, arg1: { title: { type: any; allowNull: { args: boolean; msg: string; }; }; content: { type: any; allowNull: { args: boolean; msg: string; }; }; favorite: { type: any; allowNull: { defaultValue: boolean; }; }; }, arg2: {}) => any; }, DataTypes: { STRING: any; TEXT: any; BOOLEAN: any; }) => {
  const Post = sequelize.define(
    "Post",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter the title for your blog post",
        },
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: {
          args: false,
          msg: "Please put content for your blog post",
        },
      },
      favorite: {
        type: DataTypes.BOOLEAN,
        allowNull: {
          defaultValue: false,
        },
        
      },
    },
    {}
  );

  Post.associate = (models: { User: any; }) => {
    Post.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
  };
  return Post;
};
