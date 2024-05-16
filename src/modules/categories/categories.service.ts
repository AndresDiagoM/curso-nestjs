import { Injectable, NotFoundException } from '@nestjs/common'
import { Category } from '../../models/category.model'
import { createCategoryDto, updateCategoryDto } from 'src/dtos/categories.dto'

@Injectable()
export class CategoriesService {
  // properties
  private categories: Category[] = [
    {
      id: 1,
      name: 'Category 1',
      description: 'This is category 1'
    },
    {
      id: 2,
      name: 'Category 2',
      description: 'This is category 2'
    },
    {
      id: 3,
      name: 'Category 3',
      description: 'This is category 3'
    }
  ]

  // methods

  getCategories({ limit, offset, filter }): Category[] {
    if (filter) {
      return this.categories.filter((category) =>
        category.name.toLowerCase().includes(filter.toLowerCase())
      )
    }
    return this.categories.slice(offset, offset + limit)
  }

  getCategory(id: number): Category {
    const category = this.categories.find((category) => category.id === id)
    if (!category) throw new NotFoundException(`Category with id ${id} not found`)
    return category
  }

  createCategory(category: createCategoryDto): Category {
    const newCategory: Category = { id: this.categories.length + 1, ...category }
    this.categories.push(newCategory)
    return newCategory
  }

  updateCategory(id: number, category: updateCategoryDto): Category {
    const categoryOld = this.categories.find((category) => category.id === id)
    if (!categoryOld) throw new NotFoundException(`Category with id ${id} not found`)

    const index = this.categories.findIndex((category) => category.id === id)
    this.categories[index] = { ...categoryOld, ...category }

    return this.categories[index]
  }

  deleteCategory(id: number): Category {
    const category = this.categories.find((category) => category.id === id)
    if (!category) throw new NotFoundException(`Category with id ${id} not found`)

    this.categories = this.categories.filter((category) => category.id !== id)
    return category
  }
}
