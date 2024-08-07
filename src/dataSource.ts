import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host:  process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  migrations: ['dist/db/migrations/*.js'],
  entities: ['dist/**/*.entity.js'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
