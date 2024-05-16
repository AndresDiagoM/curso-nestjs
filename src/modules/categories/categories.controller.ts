import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { CategoriesService } from './categories.service'
import { Category } from 'src/models/category.model'
import { createCategoryDto, updateCategoryDto } from 'src/dtos/categories.dto'

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // get categories with params
  @Get(':id')
  getCategory(@Param('id') id: string): Category {
    return this.categoriesService.getCategory(Number(id))
  }

  // using @query
  @Get('')
  getCategories(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('filter') filter: string
  ) {
    return this.categoriesService.getCategories({ limit, offset, filter })
  }

  // POST create a new category with body
  @Post()
  createCategory(@Body() body: createCategoryDto) {
    return this.categoriesService.createCategory(body)
  }

  // PUT update a category
  @Put(':id')
  updateCategory(@Param('id') id: string, @Body() body: updateCategoryDto) {
    return this.categoriesService.updateCategory(Number(id), body)
  }

  // DELETE delete a category
  @Delete(':id')
  deleteCategory(@Param('id') id: string) {
    return this.categoriesService.deleteCategory(Number(id))
  }
}
