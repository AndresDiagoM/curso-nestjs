import { Controller, Get, Param, Query } from '@nestjs/common'
import { ProductService } from './product.service'

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`
  }

  // get with params
  @Get(':id')
  getProduct(@Param('id') id: string): string {
    return `Product with id ${id}`
  }

  // using @query
  @Get('')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string
  ) {
    return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`
  }
}
