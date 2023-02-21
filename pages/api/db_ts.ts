import { Sequelize } from 'sequelize-typescript';
import type { NextApiRequest, NextApiResponse } from 'next';
import User from '../../models/user';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const sequelize = new Sequelize({
        database: 'alice_2023_demo',
        dialect: 'mysql',
        username: '用户名',
        password: '密码',
    });

    sequelize.addModels([User]);

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        // const res = await sequelize.sync({ force: true });
        console.log(`all sequelize models sync done`);
        const res2 = await User.sync();
        // console.log(res);
        console.log('-------------------');
        // console.log(res2);
        // 增
        // const res1 = await User.create({
        //     name: 'alice',
        //     avatar_thumb: 'http://test.com'
        // });
        // console.log(`create res:...`);
        // console.log(res1);

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
       console.log('The table for the User model was  just created!');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
      res.status(200).json({ msg: 'ok' })
}