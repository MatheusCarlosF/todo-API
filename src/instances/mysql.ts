import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config()

// export const sequelize = new Sequelize(
//     process.env.MYSQL_DB as string,
//     process.env.MYSQL_USER as string,
//     process.env.MYSQL_PASSWORD as string,
//     {
//         dialect: "mysql",
//         port: parseInt(process.env.MYSQL_PORT as string)
//     }
// )

export const sequelize = new Sequelize(process.env.MYSQL_DB as string, process.env.MYSQL_USER as string, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    port: 6152, 
    dialect: 'mysql',
    dialectOptions: {
        connectTimeout: 60000,
    }, 
});

