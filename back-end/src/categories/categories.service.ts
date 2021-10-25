import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject('CATEGORIES_REPOSITORY')
    private categoryRepository: Repository<Category>
  ){}

  async create(createCategoryDto: CreateCategoryDto) : Promise<Category>  {
    const category = new Category();
    category.name = createCategoryDto.name;
    return this.categoryRepository.save(category);
  }

  async findAll() : Promise<Category[]> {
    let categories: Category[];
    try{
      categories = await this.categoryRepository.find();

      let response;
      if (categories.length>0){
        response = {
        data: categories,
        }
      } else {
        response = {data: []}
      }
      return response
    } catch (error){
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: number) : Promise<Category>{
    return this.categoryRepository.findOne(id);
  }

  async remove(id: number) : Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
