import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUser1659101524260 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table(
            {
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "username",
                        type: "varchar"
                    },
                    {
                        name: "driver_license",
                        type: "varchar"
                    },
                    {
                        name: "admin",
                        type: "boolean"
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "password",
                        type: "varchar"
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            }
        ))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        const table = await queryRunner.getTable("users");

        await queryRunner.dropTable(table)
    }

}
