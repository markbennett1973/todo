import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'user',
  password: 'pass',
  database: 'todo',
  migrations: ['dist/db/migrations/*.js'],
  entities: ['dist/**/*.entity.js'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
