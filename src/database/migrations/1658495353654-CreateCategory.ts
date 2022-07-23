import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCategory1658495353654 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: "categories",
            columns: [{

                name: "id",
                type: "varchar",
                isPrimary: true
            },
            {
                name: "name",
                type: "varchar",
            },
            {
                name: "description",
                type: "varchar",
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
            ],

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("category");
        
        await queryRunner.dropTable(table);
    }

}
