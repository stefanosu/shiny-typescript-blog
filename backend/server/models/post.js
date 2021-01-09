'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the title for your blog post'
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: {
        args: false,
        msg: 'Please put content for your blog post'
      }
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      allowNull: {
        defaultValue: false,
      } 
    },
    userId: {
      type: DataTypes.INTEGER, 
      references: {
        model: User,
        key: 'id',
        as: 'userId'
      }

    } 
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};