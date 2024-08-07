import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1723042024293 implements MigrationInterface {
  name = 'Migration1723042024293';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "item" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "dueDate" TIMESTAMP NOT NULL, "complete" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "item"`);
  }
}
