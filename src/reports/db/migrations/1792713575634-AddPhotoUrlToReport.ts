import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPhotoUrlToReport1792713575634 implements MigrationInterface {
    name = 'AddPhotoUrlToReport1792713575634'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "WATER_REPORT" ADD "photo_url" character varying(500) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "WATER_REPORT" DROP COLUMN "photo_url"`);
    }

}
