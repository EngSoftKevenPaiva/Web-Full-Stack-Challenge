import { Category } from "src/categories/entities/category.entity";
import {Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Device {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Category, category => category.devices)
    category: Category;

    @Column("varchar", { length: 16 })
    color: string;

    @Column ({zerofill: true})
    partNumber: number;
}
