module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter your username",
        },
      },

      email: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter your email",
        },
        unique: {
          args: true,
          msg: "Email already exists",
        },
        validate: {
          isEmail: {
            args: true,
            msg: "Please enter a valid email address",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter a password",
        },
        validate: {
          isNotShort: (value) => {
            if (value.length < 8) {
              throw new Error("Password should be at least 8 characters");
            }
          },
        },
      },
    },
    {}
  );
  User.associate = (models) => {
    User.hasMany(models.Post, {
      foreignKey: "userId",
    });
    return User;
    // define association here
  };
  return User;
};
