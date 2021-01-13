import { Model } from "sequelize";
​
export default class Users extends Model {
    public id!: number;
    public username!: string;
    public password!: string;
    public email!: string; 
    public createdAt!: Date;
    public updatedAt!: Date;
}