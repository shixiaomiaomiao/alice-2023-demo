import { Table, Column, Model, AllowNull, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Optional } from 'sequelize';

interface UserAttributes {
    id: number;
    user_id: string;
    avatar_thumb: string;
    name: string;
    createTime: Date;
    updateTime: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'user_id' | 'avatar_thumb' | 'name' | 'createTime' | 'updateTime'>{};


@Table({
        modelName: 'user2',
        timestamps: true,
        createdAt: 'createTime',
        updatedAt: 'updateTime',
        freezeTableName: true,

    })
class User extends Model<UserAttributes, UserCreationAttributes>{
    @AllowNull
    @Column
    user_id!: string;

    @Column
    avatar_thumb!: string;

    @Column
    name!: string;

    @CreatedAt
    @Column
    createTime!: Date;

    @UpdatedAt
    @Column
    updateTime!: Date;
}

export default User;