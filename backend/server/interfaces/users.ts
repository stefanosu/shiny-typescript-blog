import { Model } from "sequelize";
​
export default class Users extends Model {
    static createUser(arg0: string, createUser: any) {
      throw new Error('Method not implemented.');
    }
    public id!: number;
    public username!: string;
    public password!: string;
    public email!: string; 
    public createdAt!: Date;
    public updatedAt!: Date;
}