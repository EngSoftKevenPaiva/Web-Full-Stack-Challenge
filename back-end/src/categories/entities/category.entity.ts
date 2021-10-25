import { Device } from "src/device/entities/device.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 128 })
    name: string;

    @OneToMany(() => Device, device => device.category)
    devices: Device[];
}