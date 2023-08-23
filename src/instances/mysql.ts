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

export const sequelize = new Sequelize(
    "mysql -hcontainers-us-west-65.railway.app -uroot -pKzrXHR3RVny7nagkSIZ5 --port 5682 --protocol=TCP railway"
)
