import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { deviceProviders } from './device.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [DeviceController],
  providers: [DeviceService,...deviceProviders]
})
export class DeviceModule {}
