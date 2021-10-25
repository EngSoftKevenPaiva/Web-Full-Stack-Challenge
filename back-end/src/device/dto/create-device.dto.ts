import { Category } from "src/categories/entities/category.entity";

export class CreateDeviceDto {
    category: Category;
    color: string;
    partNumber: number;
}
