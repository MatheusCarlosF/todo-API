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
    port: 5682, // Substitua pelo seu host
    dialect: 'mysql',
    dialectOptions: {
        connectTimeout: 60000, // Tempo limite em milissegundos
      }, // O dialeto do banco de dados (pode ser 'mysql', 'postgres', 'sqlite', etc.)
  });

