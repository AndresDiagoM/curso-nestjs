import { Controller, Get, Param, Query } from '@nestjs/common'
import { CategoriesService } from './categories.service'

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // get categories with params
  @Get(':id')
  getCategory(@Param('id') id: string): string {
    return `Category with id ${id}`
  }

  // using @query
  @Get('')
  getCategories(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string
  ) {
    return `categories limit=> ${limit} offset=> ${offset} brand=> ${brand}`
  }
}
