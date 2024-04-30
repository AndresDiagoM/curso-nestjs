import { Controller, Get, Param, Query } from '@nestjs/common'
import { ProductService } from './product.service'

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('products/filter')
  getProductFilter() {
    return `yo soy un filter`
  }

  // get with params
  @Get('products/:id')
  getProduct(@Param('id') id: string): string {
    return `Product with id ${id}`
  }

  // using @query
  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string
  ) {
    return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`
  }
}
