import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1723204000245 implements MigrationInterface {
    name = 'Migration1723204000245'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "dueDate" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ALTER COLUMN "dueDate" SET NOT NULL`);
    }

}
