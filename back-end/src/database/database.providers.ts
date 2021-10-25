import { Category } from 'src/categories/entities/category.entity';
import { Device } from 'src/device/entities/device.entity';
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'webfullstack',
      entities: [
        Category, Device,                                                                                                                                                                                      
      ],
      synchronize: true,
    }),
  },
];