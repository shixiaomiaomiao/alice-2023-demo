import { Sequelize, Model, DataTypes } from 'sequelize';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const sequelize = new Sequelize('alice_2023_demo', '用户名', '密码', {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '+08:00'
    });

    class User extends Model {}

    User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        avatar_thumb: {
            type: DataTypes.STRING,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        createTime: {
            type: DataTypes.DATE
        },
        updateTime: {
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        modelName: 'User',
        freezeTableName: true,
        tableName: 'user',
        timestamps: true,
        createdAt: 'createTime',
        updatedAt: 'updateTime'
    });


    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await User.sync();
        
        // 增
        // const res = await User.create({
        //     name: 'alice',
        //     avatar_thumb: 'http://test.com'
        // });
        // console.log(`create res:...`);
        // console.log(res);

        // 查
        // const num = await User.findAndCountAll();
        // console.log(`----num: ${num}`);
        // console.log(num);

        // 改
        // const res = await User.update({
        //     name: 'alice3'
        // }, {
        //     where: {
        //         id: 1
        //     }
        // });

        // 删
        const res = await User.destroy({
            where: {
                id: 1
            }
        });
        console.log(res);
       //  console.log('The table for the User model was  just created!');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
      res.status(200).json({ msg: 'ok' })
}