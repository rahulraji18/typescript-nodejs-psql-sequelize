import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
import { Post } from "./post";

export interface UserAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
    isVerified: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export class User extends Model<UserAttributes> implements UserAttributes {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public isVerified!: boolean;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: true,
    sequelize: sequelize,
    paranoid: true //softdelete
})

User.hasMany(Post);
Post.belongsTo(User,{ foreignKey: 'userId' });

