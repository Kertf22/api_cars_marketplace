import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateSpecifications1659017947646 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        queryRunner.createTable(new Table({
            name: "specifications",
            columns: [{
                name: "id",
                type: "uuid",
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
            ]
        }))


    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        const table = await queryRunner.getTable("specifications");
        
        await queryRunner.dropTable(table);
    }

}