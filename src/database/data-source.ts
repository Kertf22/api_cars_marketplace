import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "cars",
    database: "cars_marketplace",
    synchronize: true,
    logging: false,
    migrations: ["./src/database/migrations/*.ts"],
    
})

// cli: {
//     migrationsDir: ["./src/database/migrations"]
// }