import { Model } from "sequelize";
​
export default class Posts extends Model {
    public id!: number;
    public title!: string;
    public content!: string;
    public favorite!: boolean; 
    public userid!:number; 
    public createdAt!: Date;
    public updatedAt!: Date;
}