import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateDeviceDto } from './dto/create-device.dto';
import { Device } from './entities/device.entity';

@Injectable()
export class DeviceService {
  constructor(
    @Inject('DEVICE_REPOSITORY')
    private deviceRepository: Repository<Device>
  ){}

  async create(createDeviceDto: CreateDeviceDto) : Promise<Device> {
    const device = new Device();
    device.color = createDeviceDto.color;
    device.partNumber = createDeviceDto.partNumber;
    device.category = createDeviceDto.category;
    return this.deviceRepository.save(device);
  }

  async findAll() : Promise<Device[]>{
    return this.deviceRepository.find({relations: ['category']});
  }

  async findOne(id: number) : Promise<Device> {
    return this.deviceRepository.findOne(id,{relations: ['category']});
  }

  async remove(id: number) : Promise<void> {
    await this.deviceRepository.delete(id);
  }
}
