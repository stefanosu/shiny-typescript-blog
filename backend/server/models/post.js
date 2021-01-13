// 'use strict';

module.exports = (sequelize, DataTypes) => {
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

  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
  };
  return Post;
};
