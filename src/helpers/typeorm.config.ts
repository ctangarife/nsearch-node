import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5437,
  username: 'nsearch',
  password: '1nt3r4ct1v3',
  database: 'nsearch',
  autoLoadEntities: true,
  synchronize: false,
  logging: false,
};

export default typeOrmConfig;