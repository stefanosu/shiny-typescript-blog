import Users from '../interfaces/users';


function userModel(sequelize: { define: (arg0: string, arg1: { username: { type: any; allowNull: { args: boolean; msg: string; }; }; email: { type: any; allowNull: { args: boolean; msg: string; }; unique: { args: boolean; msg: string; }; validate: { isEmail: { args: boolean; msg: string; }; }; }; password: { type: any; allowNull: { args: boolean; msg: string; }; validate: { isNotShort: (value: string | any[]) => void; }; }; }, arg2: {}) => any; }, DataTypes: { STRING: any; }) {
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
          isNotShort: (value: string | any[]) => {
            if (value.length < 8) {
              throw new Error("Password should be at least 8 characters");
            }
          },
        },
      },
    },
    {}
  );
  User.associate = (models: { Post: any; }) => {
    User.hasMany(models.Post, {
      foreignKey: "userId",
    });
    return User;
    // define association here
  };

  return User;
}

module.exports = userModel;
