import express, {Request, Response} from "express"
import path from "path"
import dotenv from "dotenv"
import apiRoutes from "./router/api"

dotenv.config()
const server = express()

server.use(express.static(path.join(__dirname,'../public')))
server.use(express.urlencoded({extended: true}))

server.use(apiRoutes)

server.use((req: Request, res: Response) => {
    res.status(404)
    res.json({error: "Endpoint not found"});
})

server.listen(process.env.PORT)