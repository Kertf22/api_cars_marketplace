import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "database",
    port: 5432,
    username: "docker",
    password: "cars",
    database: "cars_marketplace",
    synchronize: true,
    logging: false,
    entities: ["./src/modules/**/entities/*.ts"],
    migrations: ["./src/database/migrations/*.ts"],
});



// cli: {
//     migrationsDir: ["./src/database/migrations"]
// }