import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { DatabaseModule } from './database/database.module';
import { DeviceModule } from './device/device.module';

@Module({
  imports: [DatabaseModule,CategoriesModule, DeviceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
